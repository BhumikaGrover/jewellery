import { Component } from '@angular/core';
import { NavController, NavParams ,ToastController} from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';


/**
 * Generated class for the ForgotpwPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-Verfication',
  templateUrl: 'Verfication.html',
})
export class VerficationPage {
public data={};
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public shared: SharedProvider,
    private http:Http,
    public Cmn:CommonProvider,
   public variable:VariableProvider,
   private toastCtrl: ToastController,
  ) {
  }
rsend(data){
   var url:string = this.variable.baseUrl + this.variable.SIGNIN_API;
console.log(url);
  var signindata={
   email:data.value.email,
    action:"resend_link",
   
  }
  
  var serialized_data = this.Cmn.serializeObj(signindata);
console.log(serialized_data)

let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
let options = new RequestOptions({ headers: headers });
 this.http.post(url, serialized_data, options)
 .map(res => res.json())
 .subscribe(resolve => {
   console.log(resolve);
  if(resolve.error==0){
   // alert(resolve.msg)
    let toast = this.toastCtrl.create({
      message:resolve.msg,
      duration: 3000,
     cssClass: 'toastCss',
      position: 'middle',
    });
    toast.present();
  }else{
   // alert(resolve.msg)
    let toast = this.toastCtrl.create({
      message:resolve.msg,
      duration: 3000,
     cssClass: 'toastCss',
      position: 'middle',
    });
    toast.present();
  }
   })
}




  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpwPage');
  }

signiPage(){
    this.navCtrl.push(SigninPage);
  }

}
