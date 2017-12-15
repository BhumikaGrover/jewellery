import { Component } from '@angular/core';
import { NavController, NavParams ,LoadingController,MenuController,Events} from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotpwPage } from '../forgotpw/forgotpw';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { EditfacebookPage } from '../editfacebook/editfacebook';
import { VerficationPage } from '../Verfication/Verfication';
import {TabsPage} from '../tabs/tabs';
/**
 * Generated class for the SigninPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  public Userrole = '';
  public user_id = '';
  profilepicface
  facebook_data;
   public loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
            //content: '<div class="circles"></div>'
          });
    signinform: FormGroup;
  loginparam: {
    username: any,
    password: any,
    action: string,
    device_token: any,
  } = {
    username: '',
    password: '',
    action: '',
    device_token: '',
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public shared: SharedProvider,
    private http:Http,
    public Cmn:CommonProvider,
    public variable:VariableProvider,
    private fb: Facebook,
    public alertCtrl : AlertController,
    public loadingCtrl:LoadingController,
    private menu: MenuController,
    public events : Events,
  ) {
  //  events.publish('user:login');
  }


  ngOnInit(): any {
    this.signinform = this.formBuilder.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]],
    });
  }


  signin(data) {
    return new Promise(resplve=>{
    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
    console.log(url);
    var signindata = {
      username: data.value.username,
      password: data.value.password,
      action: "login",
      device_token: "223211"
    }
   // this.loading.present();
    var serialized_data = this.Cmn.serializeObj(signindata);
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
        if (resolve.error == 0) {
          localStorage.setItem('userid', resolve.userid);
          localStorage.setItem('simple_suserid', resolve.userid);
          this.user_id = localStorage.getItem('simple_suserid');
          console.log(this.user_id);

          var postdata = {
            userid: this.user_id,
            action: 'user_detail'
          }
          console.log(postdata)
          var serialized_data = this.Cmn.serializeObj(postdata);
          this.http.post(url, serialized_data, options)
            .map(res => res.json())
            .subscribe((userdata) => {
              console.log(userdata)
              Loading.dismiss();
              if (userdata.error == 0) {
              //  this.loading.dismiss();

                 this.navCtrl.setRoot('MenuPage');
               // this.navCtrl.push(MenuPage)
                // .then(() => {
                //     const index = this.navCtrl.getActive().index;
                //    // this.navCtrl.remove(0, index);
                //   });
                 
                localStorage.setItem('userdata', JSON.stringify(userdata.detail));
               // this.menu.swipeEnable(false, 'menu1');
                console.log(JSON.stringify(localStorage.getItem('userdata')));
                // this.navCtrl.push(MenuPage).then(() => {
                //   const index = this.navCtrl.getActive().index;
                //   this.navCtrl.remove(0, index);
                // });
              }
            })
        } else {
          Loading.dismiss();
        //  this.loading.dismiss();
          let alert = this.alertCtrl.create({
            title: '<div style="text-align:center" class="ops">Oops</div>',
            subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
           buttons: ['Dismiss']
            });
            alert.present();
        }
      })
    })
  })
    }

isValid(field: string) {
    let formField = this.signinform.get(field);
    return formField.valid || formField.pristine;
  }
// facebook_login(){
//   alert("facebook");
//   alert("grover");
//   this.fb.login(['public_profile', 'user_friends', 'email'])
//   .then((res: FacebookLoginResponse) => {
//       console.log('Logged into Facebook!', res)
//       alert("xfsd")
//       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
// let options = new RequestOptions({ headers: headers });
// console.log('https://graph.facebook.com/v2.9/' + res.authResponse.userID + '?fields=id,email,name,birthday,locale,age_range,gender,first_name,last_name&access_token=' + res.authResponse.accessToken);
//  this.http.post('https://graph.facebook.com/v2.9/' + res.authResponse.userID + '?fields=id,email,name,birthday,locale,age_range,gender,first_name,last_name&access_token=' + res.authResponse.accessToken, options+ "['public_profile', 'user_friends', 'email']")
 
//  .map(res => res.json())
//  .subscribe(data => {
//    console.log(data);
//  })
//   }



// )

//   .catch(e =>console.log('Error logging into Facebook', e));


// }
resend(){
   this.navCtrl.push(VerficationPage);
}
  facebook_login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        // alert(JSON.stringify(res))
        this.fb.api('me/?fields=id,email,last_name,first_name', ["public_profile", "email"])
          .then((result) => {
            // alert(JSON.stringify(result))
            console.log(result.id);
            //alert(result.id);
            this.profilepicface = "https://graph.facebook.com/" + result.id + "/picture?type=large"
            console.log(this.profilepicface);
            localStorage.setItem('facebook_pic', this.profilepicface);
            console.log(localStorage.getItem('facebook_pic'));
            localStorage.setItem('facebook_login', JSON.stringify(result));
            this.facebook_data = localStorage.getItem('facebook_login');
            console.log(this.facebook_data);
            //  alert("bhumika")
            //   alert("grover") 
            var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
            // this.facebook_data = localStorage.getItem('facebook_login');
            var signindata = {
              action: "fblogincheck",
              fb_id: result.id,
            }
            this.loading.present();
            var serialized_data = this.Cmn.serializeObj(signindata);
            console.log(serialized_data)

            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            let options = new RequestOptions({ headers: headers });
            this.http.post(url, serialized_data, options)
              .map(res => res.json())
              .subscribe(resolve => {
                console.log(resolve);
                if(resolve.error == 5){
                  this.loading.dismiss();
                  this.navCtrl.push(EditfacebookPage)
                } else if (resolve.error == 0) {
                  this.loading.dismiss();
                  localStorage.setItem('userid', resolve.userid);
                  localStorage.setItem('facebook', resolve.userid);
                  console.log(localStorage.getItem('userid'));
                  console.log("bhumika");
                  console.log(localStorage.getItem('facebook'));
                  console.log("bhumika");
                  this.navCtrl.setRoot('MenuPage');
                }else {
                  this.loading.dismiss();
                  let alert = this.alertCtrl.create({
                    title: '<div style="text-align:center" class="ops">Oops</div>',
                    subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
                   buttons: ['Dismiss']
                    });
                    alert.present();
                }
              })
          }).catch(d => {
           // alert(JSON.stringify(d))
            this.loading.dismiss();
            let alert = this.alertCtrl.create({
              title: '<div style="text-align:center" class="ops">Oops</div>',
              subTitle: '<div style="text-align:center" class="psswrd">'+"User Cancelled"+'</div>',
             buttons: ['Dismiss']
              });
              alert.present();
          //  // alert(JSON.stringify(d))
          })
        })
      .catch(e => {
       // alert("grover"+e)
      //  alert(JSON.stringify(e))
        this.loading.dismiss();
        let alert = this.alertCtrl.create({
          title: '<div style="text-align:center" class="ops">Oops</div>',
          subTitle: '<div style="text-align:center" class="psswrd">'+"User Cancelled"+'</div>',
         buttons: ['Dismiss']
          });
          alert.present();
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  //  doLogin() {

  //   this.navCtrl.setRoot('MenuPage');
  // }
facebook(){
  this.navCtrl.push(EditfacebookPage);
}
 signupPage(){
    this.navCtrl.push(SignupPage);
  }
ForgotpwPage(){
    this.navCtrl.push(ForgotpwPage);
  }
}
