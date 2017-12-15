import { Component } from '@angular/core';
import { NavController, NavParams ,LoadingController} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the FaqPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  public items = [];
  faq: any;


   diseases = [
   ];
shownGroup = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public loadingCtrl:LoadingController,
    public shared: SharedProvider,
    private http:Http,
    public Cmn:CommonProvider,
    public variable:VariableProvider,
  ) {
    this.About_us()
  }

  About_us(){
    var url:string = this.variable.baseUrl + this.variable.STATIC_PAGES_API;
    var static_page={
      action:"static_page",
      type:"faq",
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
           
            for (let faq of resolve.data) {
              console.log(faq.heading)
              //this.diseases.push(faq.heading);
             
              this.diseases.push({title: faq.heading, description:faq.description});     
                       
              // console.log(this.items.heading);

            }
            console.log(this.diseases);
          }else{
  
          }
        })
      })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }


      toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
}
  
isGroupShown(group) {
    return this.shownGroup === group;
}
}
