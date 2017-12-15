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
/**
 * Generated class for the PricingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal_restr',
  templateUrl: 'modal_restr.html',
})
export class Modal_restrPage {
  extra_add_amount: string;
  show_msg: any;
  display_msg: any;
  user_email: any;
  payfort: string;
  user_id: string;
  User: any;
  re_id: any;
  amount: any;
  des: any;
  public data = '';
 
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
    private theInAppBrowser: InAppBrowser
  ) {
    this.User = localStorage.getItem('user_payment');
    //this.User= this.navParams.get('USER_ID');
    this.extra_add_amount=this.variable.amount;
   this.payfort=this.variable.PAYFORT_URL;
    console.log(this.payfort);
    this.user_id = localStorage.getItem('userid');
    this.re_id = this.navParams.get('r_id');
    //this.User= this.navParams.get('USER_ID');
    console.log(this.User);
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
payment(data) {
  this.des = data.value.des;
  // this.amount = parseFloat(this.extra_add_amount)+parseFloat(data.value.amount);
  this.amount =parseFloat(data.value.amount);
  console.log(this.amount);
  let target = "_blank";
  var options = 'location=no';
  let browser = this.theInAppBrowser.create(this.payfort + "?requestid=" + this.re_id + "&description=" + this.des + "&myid=" + this.user_id + "&amount=" + this.amount + "&email=" + this.user_email + "&getuserid=" + this.User, target, options);
  browser.on('loadstart').subscribe((event) => {
    if (event.url.match('status')) {
      browser.close();
      let data = event.url.split("?"); 
      let obj = {
        msg: '',
        status: '',
      };
      for (let key in data) {
        let myvala = data[key].split("&");
        for (let key1 in myvala) {
          obj[myvala[key1].split("=")[0]] = myvala[key1].split("=")[1];
        }
      }
      // alert(JSON.stringify(obj));
      this.display_msg = JSON.stringify(obj.msg);
    //  alert("bhumika")
    //  alert(this.display_msg);
      this.show_msg=decodeURIComponent(this.display_msg)
      //var res = this.display_msg.replace("%20", " ");
     // this.show_msg = this.display_msg.replace("%20", " ");
        //  alert(this.show_msg);
      let alert = this.alertCtrl.create({
       // title: '<div style="text-align:center" class="ops">Oops</div>',
        subTitle: '<div style="text-align:center" class="psswrd">' + this.show_msg + '</div>',
        buttons: ['Dismiss']
      });
      alert.present();
      this.dismiss();
    } else {
      //      alert("bhumika")
    }
  })
}

}
