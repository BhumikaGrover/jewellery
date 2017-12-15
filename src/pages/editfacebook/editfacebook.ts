import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController} from 'ionic-angular';
import { FormsModule , FormGroup, FormBuilder, Validators, FormControl}  from '@angular/forms';
import { SharedProvider } from '../../providers/shared/shared';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { VerficationPage } from '../Verfication/Verfication';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { SigninPage } from '../signin/signin';
import { TermsPage } from '../terms/terms';
import { LoginPage } from '../login/login';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


/**
 * Generated class for the EditprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editfacebook',
  templateUrl: 'editfacebook.html',
})
export class EditfacebookPage {
imgTosend:'';
facebook_data;
profilepicture;
use;
public data = {
  fname:"",
  lastname:"",
  email:""

};
  
public Error=99;msg;msg1;Error1 : any;  user_id:any;
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
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    public variable:VariableProvider,
    public Cmn:CommonProvider,
    public loadingCtrl:LoadingController,
    private alertCtrl: AlertController,
    private fb: Facebook,
  ) {
  
    console.log(localStorage.getItem('facebook_pic'));
this.profilepicture=localStorage.getItem('facebook_pic');

              this.facebook_data = JSON.parse(localStorage.getItem('facebook_login'));
               console.log("fname->>>",this.facebook_data)
              console.log("fname->>>",this.facebook_data.first_name);
              console.log("dgydgdyugy")
              this.data.fname=this.facebook_data.first_name;
              console.log(this.data.fname);
              console.log("email->>>",this.facebook_data.email)
this.data.lastname=this.facebook_data.last_name;
console.log(this.data.fname)
//this.data.lastname=this.facebook_data.last_name;
console.log(this.data.fname)
//this.userInfo.username=response.detail.username;
//this.userInfo.role=response.detail.role;
if(this.facebook_data.email==undefined){
this.data.email='';
console.log(this.data.email);
}else{
  this.data.email=this.facebook_data.email;
  console.log(this.data.email);
}

//     this.updateForm=formBuilder.group({
//         'fname': [''],
//       'lastname': [''],
//       'username': [''],
//       'role': [''],
//       'email': [''],
         
// })
  }
// updateForm: FormGroup;
// userInfo: {
//     fname: string,
//     username: string,
//     role: string,
//     email: string,
//     lastname: any,
//       } = {
//         fname: '',
//         username: '',
//         role: '',
//         email: '',
//         lastname:'',
//           };



    //       ngOnInit(): any {
    // this.updateForm = this.formBuilder.group({
    //   'fname': ['', [Validators.required]],
    //   'lastname': ['', [Validators.required]],
    //   'username': ['', [Validators.required]],
    //   'role': ['', [Validators.required]],
    //   'email': ['', [Validators.required ,]],
      
    // });
  //}
  //   nameValidator(control: FormControl): {[s: string]: boolean} {
  //   if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
  //     return {invalidName: true};
  //   }
  // }


//  isValid(field: string) {
//     let formField = this.updateForm.get(field);
//     return formField.valid || formField.pristine;
//   }

//    emailValidator(control: FormControl): {[s: string]: boolean} {
// var url:string = this.variable.baseUrl + this.variable.SIGNIN_API;
//          //Fake a slow response from server
//       var status={}

//       var postdata={
//         action:'unique_match',
//         type:'email',
//         value: control.value
//       }

//      var serialized_data = this.Cmn.serializeObj(postdata);
// console.log(serialized_data)

// let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
// let options = new RequestOptions({ headers: headers });


//       if (!(control.value.toLowerCase().match('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'))) {
//               return {invalidEmail: true};
//        } else {
//           console.log("ok")
//          this.http.post(url, serialized_data, options)
//               .map(res=>res.json())
//               .subscribe((response)=>{
//                 console.log(response)

//                   if(response.error == 2){

//                     this.Error1 = 3;
//                     this.msg1 = response.msg;
//                   // return {isValid : false}

//                   } else if(response.error == 1) {

//                     this.Error1 = 1;
//                     console.log(control.valid)

//                   } else {
                  
//                       this.Error1 = 0;
//                       console.log(control.valid)

//                   }
//               })
//        }
// }


// public checkUsername(control: FormControl){
 
   
//  var url:string = this.variable.baseUrl + this.variable.SIGNIN_API;
//       //Fake a slow response from server
//  var status={}

// var postdata={
//   action:'unique_match',
//    type:'username',
//    value: control.value
// }

//  var serialized_data = this.Cmn.serializeObj(postdata);
// console.log(serialized_data);
// let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});
// let options = new RequestOptions({ headers: headers });
//    this.http.post(url, serialized_data, options)
//  .map(res=>res.json())
//  .subscribe((response)=>{
//   console.log(response)

//     if(response.error == 2){

//       this.Error = 2;
//       this.msg = response.msg;
//      // return {isValid : false}

//     } else if(response.error == 1) {

//        this.Error = 1;
//        console.log(control.valid)

//     } else {
    
//         this.Error = 0;
//         console.log(control.valid)

//      }
//  })
        
// }
  profileupdate(data){
   var url:string = this.variable.baseUrl + this.variable.SIGNIN_API;
   console.log("bhumika"+ localStorage.getItem('facebook_login'));
   console.log(data.value.agree);
   if (data.value.agree == true) {
        this.use = 1;
      } else {
        this.use = 0;
      }
  // this.facebook_data = localStorage.getItem('facebook_login');
   var signindata={
     action:"fbsignup" ,
     fb_id:this.facebook_data.id,
      device_token:2122132 ,
      user_email:data.value.email,
      fname:data.value.fname,
      lastname:data.value.lastname ,
      user_role:data.value.role,
      user_username:data.value.username,
      user_terms_of_use:this.use,
      imageUrl:this.profilepicture
    // userid:localStorage.getItem('userid'), 
    // action:"user_detail"
  }
  this.loading.present();
  var serialized_data = this.Cmn.serializeObj(signindata);
console.log(serialized_data)

let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
let options = new RequestOptions({ headers: headers });
 this.http.post(url, serialized_data, options)
 .map(res => res.json())
 .subscribe(resolve => {
  this.loading.dismiss();


   console.log(resolve);
   if(resolve.error== 0){
     this.loading.dismiss();
     alert(resolve.msg);
    
     localStorage.setItem('facebook', resolve.userid)
     console.log("bhumika");
     console.log(localStorage.getItem('userid'));
     console.log("bhumika");
    //  let alert = this.alertCtrl.create({
    //   // title: '<div style="text-align:center" class="ops">Oops</div>',
    //   subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
    //  buttons: ['Dismiss']
    //   });
    //   alert.present();
     this.navCtrl.push(SigninPage);
   }else{
     this.loading.dismiss();
   // alert("else"+resolve.msg);
    //   let alert = this.alertCtrl.create({
    //     title: '<div style="text-align:center" class="ops">Oops</div>',
    //     subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
    //    buttons: [
    //     {
    //       text: 'Dismiss',
    //       role: 'Dismiss',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //   ]
    // })
     
      //   });
      //   alert.present();
     
        let alert = this.alertCtrl.create({
          title: '<div style="text-align:center" class="ops">Oops</div>',
          subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
          buttons: [
            {
              text: 'Dismiss',
              role: 'Dismiss',
              handler: () => {
                this.sigout()
                console.log('Cancel clicked');
              }
            },
            
          ]
        });
        alert.present();
      
   }
   // this.userinfo.profilepicture ='data:image/jpeg;base64,' + imageUri;;
 })
}


sigout(){
  this.fb.logout().then((sucess) => {
    // alert("gydsaty");
     localStorage.clear();
    // alert(sucess)
     this.navCtrl.push(LoginPage)
   }).catch((error) => {
    // alert(error);
      console.log(error)
   })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }
  terms(){
    this.navCtrl.push(TermsPage);
  }

}
