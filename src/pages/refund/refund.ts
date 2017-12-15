import { Component } from '@angular/core';
import { NavController, NavParams ,LoadingController,ToastController} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { InfoPage } from '../info/info';
/**
 * Generated class for the DeliverypolicyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-refund',
  templateUrl: 'refund.html',
})
export class RefundPage {
  refund_page: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public loadingCtrl:LoadingController,
    public shared: SharedProvider,
    private http:Http,
    public Cmn:CommonProvider,
    public variable:VariableProvider,
    private toastCtrl: ToastController,) 
    {
    this.refund()
  }
  refund(){
    var url:string = this.variable.baseUrl + this.variable.STATIC_PAGES_API;
    var static_page={
      action:"static_page",
      type:"refund_cancellation",
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
            this.refund_page=resolve.data;
            console.log(this.refund_page);
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad RefundPage');
  }

}
