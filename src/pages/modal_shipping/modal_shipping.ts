import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController,AlertController} from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { SharedProvider } from '../../providers/shared/shared';
import {Http,Headers,RequestOptions} from '@angular/http';
import { FormsModule , FormGroup, FormBuilder, Validators, FormControl}  from '@angular/forms';
import { FindworkPage } from '../findwork/findwork';
/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal_shipping',
  templateUrl: 'modal_shipping.html',
})
export class Modal_shippingPage {
  req_id: any;

  public data = '';
  
  //country_list;
    constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public viewCtrl: ViewController,
    public variable: VariableProvider,
    public Cmn: CommonProvider,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public shared: SharedProvider,
    private http:Http,
  ) {
    this.req_id = this.navParams.get('req');
    console.log(this.req_id);
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal_shippingPage');
  }
  Skipping(data) {
    console.log(data.value)
    console.log(data.value.name)
    console.log(data.value.email)
    console.log(data.value.phn)
   // localStorage.setItem('Shipping', data.value);
    var url: string = this.variable.baseUrl + this.variable.SKIPPING_ADDRESS;

    console.log(url);
    var shipping = {
      rec_name:data.value.name,
      rec_email:data.value.email,
      rec_phone:data.value.phn,
      streeaddress:data.value.street,
      streetcity:data.value.city,
      state:data.value.state,
      postalcode:data.value.pcode, 
      country_code:data.value.ccode, 
      ship_name:data.value.shipname,
      ship_email:data.value.shipemail,
      ship_phone:data.value.shipphn,
      ship_streeaddress:data.value.rstreet,
      ship_streetcity:data.value.rcity,
      ship_state:data.value.rstate,
      ship_postalcode:data.value.rpostcode,
      ship_country_code:data.value.rcountrycode,
      width:data.value.boxwidth,
      height:data.value.boxheight,
      length:data.value.boxlength,
      weight:data.value.boxweight,
      //REQID:this.req_id,
      action:"rate_service",
    }
   // this.loading.present();
    var serialized_data = this.Cmn.serializeObj(shipping);
    console.log(serialized_data)

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
        Loading.dismiss()
        if(resolve.error==0){
          console.log(resolve.postdata)
          localStorage.setItem('Shipping_response', JSON.stringify(resolve));
              this.navCtrl.push(FindworkPage,{
            req:this.req_id
          })
        }else{
          let alert = this.alertCtrl.create({
            // title: '<div style="text-align:center" class="ops">Oops</div>',
             subTitle: '<div style="text-align:center" class="psswrd">' + resolve.msg + '</div>',
             buttons: ['Dismiss']
           });
           alert.present();
        }
      })
    })
  }
    
 
 dismiss() {
    this.viewCtrl.dismiss({
     // gg:this.value,
     // myval:this.myInput
    });
  }

}
