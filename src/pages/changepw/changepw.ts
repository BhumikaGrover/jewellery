import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams ,LoadingController,ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';


/**
 * Generated class for the ChangepwPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-changepw',
  templateUrl: 'changepw.html',
})
export class ChangepwPage {
   public user_id='';
  public loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
            //content: '<div class="circles"></div>'
          });
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public shared: SharedProvider,
    private http:Http,
    public Cmn:CommonProvider,
    public variable:VariableProvider,
    public alertCtrl : AlertController,
    public loadingCtrl:LoadingController,
    private toastCtrl: ToastController,
  
  ) {
  }

 Changepwd: FormGroup;
  changepwd:{
  oldpassword: any,
  newpassword: any,
  confirmpassword: any,
  action: string,
  
}={
  oldpassword: '',
  newpassword: '',
  confirmpassword: '',
  action: '',
}

ngOnInit(): any {
    this.Changepwd = this.formBuilder.group({
    'oldpassword': ['', [Validators.required]],
    'newpassword': ['', [Validators.required]],
    'confirmpassword': ['', [Validators.required]],
  },{validator: this.matchingPasswords('newpassword', 'confirmpassword')});
}


  matchingPasswords(newpasswordKey: string, confirmpasswordKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let newpassword = group.controls[newpasswordKey];
    let confirmpassword = group.controls[confirmpasswordKey];

    if (newpassword.value !== confirmpassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }
}
chnagep(data)
 {
    var url:string = this.variable.baseUrl + this.variable.CHANGE_PASSWORD_API;
    this.user_id=localStorage.getItem('userid');
    var postdata={
      userid:localStorage.getItem('userid'),
      action:'change_password',
     old_password:data.value.oldpassword,
     new_password:data.value.newpassword,
     confirm_password:data.value.confirmpassword,
   }
    this.loading.present();
      var serialized_data = this.Cmn.serializeObj(postdata);
console.log(serialized_data)
let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
let options = new RequestOptions({ headers: headers });
 this.http.post(url, serialized_data, options)
 .map(res => res.json())
 .subscribe(resolve => {
   console.log(resolve);
   if(resolve.error==1){
     this.loading.dismiss();
     let toast = this.toastCtrl.create({
      message:resolve.msg,
      duration: 3000,
     cssClass: 'toastCss',
      position: 'middle',
    });
    toast.present();
 //alert(resolve.msg);
   }else{
    this.loading.dismiss();
    let toast = this.toastCtrl.create({
      message:resolve.msg,
      duration: 3000,
     cssClass: 'toastCss',
      position: 'middle',
    });
    toast.present();
    // alert(resolve.msg);
   }
 })
 }

 isValid(field: string) {
    let formField = this.Changepwd.get(field);
    return formField.valid || formField.pristine;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepwPage');
  }

}
