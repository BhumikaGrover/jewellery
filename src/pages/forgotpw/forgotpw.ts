import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,AlertController, ToastController} from 'ionic-angular';
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
  selector: 'page-forgotpw',
  templateUrl: 'forgotpw.html',
})
export class ForgotpwPage {
  
 public loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
            //content: '<div class="circles"></div>'
          });  
  //  myForm: FormGroup;
  // userInfo: {
  //   email: string
  // } = {
  //   email: '',
  // };
  public data = '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public shared: SharedProvider,
    private http:Http,
    public Cmn:CommonProvider,
   public variable:VariableProvider,
  public loadingCtrl:LoadingController,
  private alertCtrl: AlertController,
  private toastCtrl: ToastController,
  ) {
  }
// ngOnInit(): any {
//     this.myForm = this.formBuilder.group({
//       'email': ['', [Validators.required, this.emailValidator.bind(this)]],
//     });
//   }

forget(data)
  {
    var url:string = this.variable.baseUrl + this.variable.FORGOT_PASSWORD_API;
    var forgot={
      action:"forget_password",
      email:data.value.email
    }
    this.loading.present();
     var serialized_data = this.Cmn.serializeObj(forgot);
     console.log(serialized_data)
let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
let options = new RequestOptions({ headers: headers });
 this.http.post(url, serialized_data, options)
 .map(res => res.json())
 .subscribe(resolve => {
   console.log("bhumika")
   console.log(resolve);
   if(resolve.error==0){
     this.loading.dismiss();
     let toast = this.toastCtrl.create({
      message:resolve.msg,
      duration: 3000,
     cssClass: 'toastCss',
      position: 'middle',
    });
    toast.present();
   // alert(resolve.msg);
    this.navCtrl.push(SigninPage);
   }else{
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      //   title: '<div style="text-align:center" class="ops">Oops</div>',
         subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
        buttons: ['Ok']
         });
         alert.present();
  //  alert(resolve.msg);
   }
 })
  }

//  isValid(field: string) {
//     let formField = this.myForm.get(field);
//     return formField.valid || formField.pristine;
//   }

//   emailValidator(control: FormControl): {[s: string]: boolean} {

//       if (!(control.value.toLowerCase().match('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'))) {
//               return {invalidEmail: true};
     
//        }
// }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpwPage');
  }

signiPage(){
    this.navCtrl.push(SigninPage);
  }

}
