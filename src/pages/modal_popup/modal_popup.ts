import { Component } from '@angular/core';
import { NavController, NavParams, ViewController,LoadingController,ToastController} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { InfoPage } from '../info/info';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the PricingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal_popup',
  templateUrl: 'modal_popup.html',
})
export class Modal_popupPage {
  taing: any;
  req_id: any;
  show_msg: any;
  display_msg: any;
  user_email: any;
  payfort: string;
  user_id: string;
  User: any;
  re_id: any;
  amount: any;
  des: any;
  star:any;
  public data = '';
 shoe_content=1;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public loadingCtrl:LoadingController,
    public shared: SharedProvider,
    private http:Http,
    public Cmn:CommonProvider,
    public variable:VariableProvider,
    private toastCtrl: ToastController,
    public viewCtrl: ViewController,
    private theInAppBrowser: InAppBrowser,
    public modalCtrl: ModalController,
  ) {
    this.shoe_content=1;
   this.payfort=this.variable.PAYFORT_URL;
    console.log(this.payfort);
    this.user_id = localStorage.getItem('userid');
    this.req_id = this.navParams.get('req');
    this.User= this.navParams.get('USER_ID');
    console.log( this.re_id);
    console.log("bhumika")
    this.detail();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PricingPage');
  }
  dismiss() {
    this.viewCtrl.dismiss({
      req_id:this.re_id 
    });
  }


  public detail() {
    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
    var postdata = {
      userid:this.user_id,
      action: 'user_detail'
    }
    var serialized_data = this.Cmn.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_data, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        this.user_email=response.detail.email;
      })
    }




public mymsg;
submit_rating(data){
  console.log(data.value)
  var url: string = this.variable.baseUrl + this.variable.ACTIVE_CONTRACTS;
  ;
  console.log(url);
  console.log(data.value.web_rating)
  var Send = {
    action:"rating_to_job",
    ratingvalue:data.value.jobstar,
    review:data.value.job_rating,
    requestid:this.req_id,
    webreview:this.taing,
    webratingvalue:this.star,
    myid:this.user_id
   
  }
  console.log(Send);
  var serialized_data = this.Cmn.serializeObj(Send);
  console.log(serialized_data)

  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
  let options = new RequestOptions({ headers: headers });
  //  var Loading = this.loadingCtrl.create({
  //   spinner: 'bubbles',
  //   showBackdrop: false,
  //   cssClass: 'loader'
  //     });
  //     Loading.present().then(() => {
  this.http.post(url, serialized_data, options)
    .map(res => res.json())
    .subscribe(resolve => {
      //   Loading.dismiss();
      console.log(resolve)
      let toast = this.toastCtrl.create({
        message:resolve.msg,
        duration: 3000,
        cssClass: 'toastCss',
        position: 'middle',
      });
      toast.present();
    //  alert(resolve.msg)
      this.dismiss()
    })

}

change_value(data){
  console.log(data.value.web_rating);
  this.taing=data.value.web_rating;
  this.star=data.value.currentRate;
  this.shoe_content=0;
}

}
