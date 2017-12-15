import { Component } from '@angular/core';
import { NavController, NavParams ,LoadingController, Platform,ToastController} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { InfoPage } from '../info/info';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  static_image_path: any;

  staic_about: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public loadingCtrl:LoadingController,
    public shared: SharedProvider,
    private http:Http,
    public Cmn:CommonProvider,
    public variable:VariableProvider,
    private iab: InAppBrowser,
    public platform: Platform, 
    private toastCtrl: ToastController,
  ) {
    this.static_image_path=this.variable.STATIC_PAGES_IMAge
    this.About_us()
    console.log(new Date());
  }

About_us(){
  var url:string = this.variable.baseUrl + this.variable.STATIC_PAGES_API;
  var static_page={
    action:"static_page",
    type:"about",
  }
    var serialized_data = this.Cmn.serializeObj(static_page);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
        });
        Loading.present().then(() => {
    this.http.post(url, serialized_data, options)
      .map(res => res.json())
      .subscribe(resolve => {
        console.log(resolve);
        Loading.dismiss();
        if(resolve.error==0){
          this.staic_about=resolve.data;
          console.log(this.staic_about);
        }else{
          let toast = this.toastCtrl.create({
            message:"No data found",
            duration: 3000,
           cssClass: 'toastCss',
            position: 'middle',
          });
          toast.present();
          this.navCtrl.push(InfoPage)

        }
      })
    })
}

public openWithInAppBrowser(url : string){
  let target = "_blank";
  this.iab.create(url,target);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
