import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController,AlertController} from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { SharedProvider } from '../../providers/shared/shared';
import {Http,Headers,RequestOptions} from '@angular/http';
import { FormsModule , FormGroup, FormBuilder, Validators, FormControl}  from '@angular/forms';
import { Active_contractPage } from '../active_contract/active_contract';
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-findwork',
  templateUrl: 'findwork.html',
})
export class FindworkPage {
  show_msg: string;
  display_msg: string;
  user_email: any;
  payfort22: any;
  req_id: any;
  req: any;
  user_id: string;
  shipping_show: any;
  shipping_data: any;

  constructor( public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public variable: VariableProvider,
    public Cmn: CommonProvider,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public shared: SharedProvider,
    public alertCtrl: AlertController,
    private theInAppBrowser: InAppBrowser,
    private http:Http,) {
      this.req_id = this.navParams.get('req');
      this.user_id = localStorage.getItem('userid');
      this.payfort22=this.variable.PAYFORT22_URL;
   // this.shipping_data=localStorage.getItem('Shipping')
    console.log(JSON.parse(localStorage.getItem('Shipping_response')));
    this.shipping_show=JSON.parse(localStorage.getItem('Shipping_response'));
  console.log(this.shipping_show);
  this.detail()
  }

  // Skipping() {
  // //  console.log(data.value)
  //  // localStorage.setItem('Shipping', data.value);
  //   var url: string = this.variable.baseUrl + this.variable.SKIPPING;

  //   console.log(url);
  //   var shipping = {
  //     streeaddress:this.shipping_show.postdata.streeaddress,
  //     streetcity:this.shipping_show.postdata.streetcity,
  //     state:this.shipping_show.postdata.state,
  //     postalcode:this.shipping_show.postdata.postalcode, 
  //     country_code:this.shipping_show.postdata.country_code, 
  //     width:this.shipping_show.postdata.width,
  //     height:this.shipping_show.postdata.height,
  //     length:this.shipping_show.postdata.length,
  //     weight:this.shipping_show.postdata.weight,
  //     REQID:this.req_id ,
  //     action:"ship_service",
  //     my_id:this.user_id
  //   }
  //  // this.loading.present();
  //   var serialized_data = this.Cmn.serializeObj(shipping);
  //   console.log(serialized_data)

  //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
  //   let options = new RequestOptions({ headers: headers });
  //   var Loading = this.loadingCtrl.create({
  //     spinner: 'bubbles',
  //     showBackdrop: false,
  //     cssClass: 'loader'
  //   });
  //   Loading.present().then(() => {
  //   this.http.post(url, serialized_data, options)
  //     .map(res => res.json())
  //     .subscribe(resolve => {
  //       console.log(resolve);
  //       Loading.dismiss()
  //       this.navCtrl.push(Active_contractPage)
       
  //     })
  //   })
  // }
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
    
  Skipping() {
      var url: string = this.variable.baseUrl + this.variable.SKIPPING;
      let target = "_blank";
      var options = 'location=no';
      let browser = this.theInAppBrowser.create(this.payfort22 + 
        "rec_name=" + this.shipping_show.postdata.rec_name + 
        "&rec_email=" + this.shipping_show.postdata.rec_email + 
        "&rec_phone=" + this.shipping_show.postdata.rec_phone + 
        "&streeaddress=" + this.shipping_show.postdata.streeaddress + 
        "&streetcity=" + this.shipping_show.postdata.streetcity + 
        "&state=" + this.shipping_show.postdata.state + 
        "&postalcode=" + this.shipping_show.postdata.postalcode + 
        "&country_code=" + this.shipping_show.postdata.country_code + 
        "&ship_name=" + this.shipping_show.postdata.ship_name  +
        "&ship_email=" + this.shipping_show.postdata.ship_email + 
        "&ship_phone=" + this.shipping_show.postdata.ship_phone + 
        "&ship_streeaddress=" + this.shipping_show.postdata.ship_streeaddress + 
        "&ship_streetcity=" + this.shipping_show.postdata.ship_streetcity + 
        "&ship_state=" + this.shipping_show.postdata.ship_state + 
        "&ship_postalcode=" + this.shipping_show.postdata.ship_postalcode + 
        "&ship_country_code=" + this.shipping_show.postdata.ship_country_code + 
        "&width=" + this.shipping_show.postdata.width + 
        "&height=" + this.shipping_show.postdata.height + 
        "&length=" + this.shipping_show.postdata.length + 
        "&weight=" + this.shipping_show.postdata.weight + 
        "&action=rate_service" + 
        "&requestid=" + this.req_id + 
        "&myid=" + this.user_id + 
        "&myemail=" +  this.user_email + 
        "&charge=" + this.shipping_show.data.charges + 
        "&servicetype=" + this.shipping_show.data.service , target, options);
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
        //  alert(JSON.stringify(obj));
          this.display_msg = JSON.stringify(obj.msg);
         // alert(JSON.stringify(obj.status));
         this.show_msg=decodeURIComponent(this.display_msg)
          if(obj.status=="0"){
            this.navCtrl.push(Active_contractPage,{
              msg:this.show_msg 
      })
    }else{
         // alert(this.display_msg);
         
          //var res = this.display_msg.replace("%20", " ");
         // this.show_msg = this.display_msg.replace("%20", " ");
            //  alert(this.show_msg);
          let alert = this.alertCtrl.create({
           // title: '<div style="text-align:center" class="ops">Oops</div>',
            subTitle: '<div style="text-align:center" class="psswrd">' + this.show_msg + '</div>',
            buttons: ['Dismiss']
          });
          alert.present();
          this.dismiss() 
    }
        } else {
          //      alert("bhumika")
        }
      })
      
      
    }
    dismiss() {
      this.viewCtrl.dismiss(
        //req_id:this.re_id 
      );
    }
}


