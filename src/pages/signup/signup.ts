import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SharedProvider } from '../../providers/shared/shared';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ActionSheetController } from 'ionic-angular';
import { CameraOptions } from '@ionic-native/camera';
import { VerficationPage } from '../Verfication/Verfication';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Camera } from '@ionic-native/camera';
import { TermsPage } from '../terms/terms';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  show_mage: any;
  image_path: any;
  imgTosend = '';
  srcImage = "assets/images/a.jpg";
  country_list = '';
  use = 1; 0;
  public data={
    gender: "",
    gaming:"",
    role:"",
  }
  
  // public loading = this.loadingCtrl.create({
  //   spinner: 'bubbles',
  //   showBackdrop: false,
  //   cssClass: 'loader'
  //   //content: '<div class="circles"></div>'
  // });

 //public data = ''; 

  public Error = 99; msg; msg1; Error1: any; user_id: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public shared: SharedProvider,
    private http: Http,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    public variable: VariableProvider,
    public Cmn: CommonProvider,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
this.show_mage=this.variable.IMAGE_URL+"noprofilepicture.gif"
    this.image_path=this.variable.IMAGE_URL
    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
    var countrydata = {
      action: "country_list",
    }
    var serialized_data = this.Cmn.serializeObj(countrydata);
    console.log(serialized_data)
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_data, options)
      .map(res => res.json())
      .subscribe(resolve => {
        console.log(resolve);
        console.log(resolve.list);
        this.country_list = resolve.list
        console.log(this.country_list);

      })
  }

  // myForm: FormGroup;
  //   userInfo: {
  //     fname: string,
  //     lname:string,
  //     email: string,
  //     choosename:string,
  //     phone: string,
  //     dob:any,
  //     gaming:any,
  //     role:any,
  //       agree:any
  //       } = {
  //         fname: '',
  //         lname:'',
  //         email: '',
  //         choosename:'',
  //         phone: '',
  //         dob: '',
  //         gaming:'',
  //         role:'',
  //         agree:false
  //           };

  //        ngOnInit(): any {
  //     this.myForm = this.formBuilder.group({
  //     'fname': ['', [Validators.required,this.nameValidator.bind(this)]],
  //     'lname': ['',[Validators.required,this.nameValidator.bind(this)]],
  //     'phone': ['', [Validators.required,this.phoneValidator.bind(this)]],
  //     'email': ['',[Validators.required, this.emailValidator.bind(this)]],
  //     'gender': ['', [Validators.required]],
  //     'dob': ['', [Validators.required,this.nameValidator.bind(this)]],
  //     'password':['', [Validators.required, Validators.minLength(5),  Validators.maxLength(15)]],
  //     'gaming':[''],
  //     'role':['',[Validators.required]],
  //     'choosename':['', [Validators.required,this.checkUsername.bind(this)]],
  //     'duplicatePassword': ['', Validators.required],
  //     'agree':['']
  //     },{validator: this.matchingPasswords('password', 'duplicatePassword'),
  // namevalidator: this.nameValidator.bind(this),
  // });
  //   }
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }


  public serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");

  }

  onSubmit(data) {

    console.log("bhumika")
    console.log(data.value.agree)
    if (data.value.password == data.value.duplicatePassword) {
      if (data.value.agree == true) {
        this.use = 1;
      } else {
        this.use = 0;
      }
      console.log(data);
      var poastdata = {
        action: 'sign_up',
        user_email: data.value.email,
        fname: data.value.fname,
        lastname: data.value.lname,
        user_gender: data.value.gender,
        user_mobile: data.value.phone,
        user_username: data.value.choosename,
        user_password: data.value.password,
        user_terms_of_use: this.use,
        device_token: '1231354vfzsxs',
        user_role: data.value.role,
        country:data.value.gaming

      }
      console.log(poastdata);
     
      var serialized_all = this.serializeObj(poastdata);
      console.log(serialized_all);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
      let options = new RequestOptions({ headers: headers });
      var Loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        showBackdrop: false,
        cssClass: 'loader'
          });
          Loading.present().then(() => {
      this.http.post(this.shared.myGlobalVar + 'api.php', serialized_all, options)
        .map(res => res.json())
        .subscribe((resolve) => {
          console.log(resolve)
          if (resolve.error == 0) {
            Loading.dismiss();
            let alert = this.alertCtrl.create({
           //   title: '<div style="text-align:center" class="ops">Oops</div>',
              subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
             buttons: ['Ok']
              });
              alert.present();
            localStorage.setItem('userid', resolve.userid);
            this.user_id = localStorage.getItem('userid');
            console.log(this.user_id + "bhumika_grover");
            this.uploadImage();
            var postdata = {
              userid: localStorage.getItem('userid'),
              action: 'user_detail'
            }
            var serialized_all = this.serializeObj(postdata);
            this.http.post(this.shared.myGlobalVar + 'api.php', serialized_all, options)
              .map(res => res.json())
              .subscribe((userdata) => {
                console.log(userdata)
                if (userdata.error == 0) {
                  localStorage.setItem('userrole', userdata.detail.role);
                  localStorage.setItem('userdata', JSON.stringify(userdata.detail));
                  console.log(localStorage.getItem('userdata'));
                  console.log(localStorage.getItem('userrole'));
                  this.navCtrl.push(SigninPage);
                } else {
                }
              })
          }
          else if (resolve.error == 3) {
            Loading.dismiss();
         //   alert(resolve.msg)
            let alert = this.alertCtrl.create({
              title: '<div style="text-align:center" class="ops">Oops</div>',
              subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
             buttons: ['Dismiss']
              });
              alert.present();
          } else if (resolve.error == 2) {
            Loading.dismiss();
          //  alert(resolve.msg)
            let alert = this.alertCtrl.create({
              title: '<div style="text-align:center" class="ops">Oops</div>',
              subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
             buttons: ['Dismiss']
              });
              alert.present();
          } else if (resolve.error == 4) {
            Loading.dismiss();
           // alert(resolve.msg)
               let alert = this.alertCtrl.create({
                 title: '<div style="text-align:center" class="ops">Oops</div>',
                 subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
                buttons: ['Dismiss']
                 });
                 alert.present();
           
          } else {
            Loading.dismiss();
         //   alert(resolve.msg)
            let alert = this.alertCtrl.create({
              title: '<div style="text-align:center" class="ops">Oops</div>',
              subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
             buttons: ['Dismiss']
              });
              alert.present();
          }
        })
      })
    } else {
      // alert("password mismatch");
      let alert = this.alertCtrl.create({
        title: '<div style="text-align:center" class="ops">Oops</div>',
        subTitle: '<div style="text-align:center" class="psswrd">Password Mismatch</div>',
       buttons: ['Dismiss']
        });
        alert.present();
    }
 
  }
   
  // isValid(field: string) {
  //     let formField = this.myForm.get(field);
  //     return formField.valid || formField.pristine;
  //   }
  //  nameValidator(control: FormControl): {[s: string]: boolean} {
  //     if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
  //       return {invalidName: true};
  //     }
  //   }

  emailValidator(control: FormControl): { [s: string]: boolean } {

    //Fake a slow response from server
    var status = {}

    var postdata = {
      action: 'unique_match',
      type: 'email',
      value: control.value
    }

    var serilizedata = this.serializeObj(postdata)

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    if (!(control.value.toLowerCase().match('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'))) {
      return { invalidEmail: true };
    } else {
      console.log("ok")
      this.http.post(this.shared.myGlobalVar + 'api.php', serilizedata, options)
        .map(res => res.json())
        .subscribe((response) => {
          console.log(response)

          if (response.error == 2) {

            this.Error1 = 3;
            this.msg1 = response.msg;
            // return {isValid : false}

          } else if (response.error == 1) {

            this.Error1 = 1;
            console.log(control.valid)

          } else {

            this.Error1 = 0;
            console.log(control.valid)

          }
        })
    }
  }
  phoneValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value !== '') {
      if (!control.value.match('\\(?\\d\\)?-? *\\d-? *-?\\d')) {
        return { invalidPhone: true };
      }
    }
  }
  public checkUsername(control: FormControl) {



    //Fake a slow response from server
    var status = {}

    var postdata = {
      action: 'unique_match',
      type: 'username',
      value: control.value
    }

    var serilizedata = this.serializeObj(postdata)

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.shared.myGlobalVar + 'api.php', serilizedata, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response)

        if (response.error == 2) {

          this.Error = 2;
          this.msg = response.msg;
          // return {isValid : false}

        } else if (response.error == 1) {

          this.Error = 1;
          console.log(control.valid)

        } else {

          this.Error = 0;
          console.log(control.valid)

        }
      })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  // doLogin() {
  //   this.navCtrl.setRoot('MenuPage');
  // }

  signPage() {
    this.navCtrl.push(SigninPage);
  }

  public presentActionSheet() {

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  public takePicture(sourceType) {
    var options = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      this.imgTosend = imagePath;
      this.srcImage = 'data:image/jpeg;base64,' + imagePath
      this.show_mage='data:image/jpeg;base64,' + imagePath
    }, (err) => {
      //this.presentToast('Error while selecting image.');
    });
  }

  uploadImage() {
    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
    var postdata = {
      action: 'save_avatar',
      img: this.imgTosend,
      userid: localStorage.getItem('userid')
    }
    var serialized_data = this.Cmn.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_data, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(JSON.stringify(response));
        //alert('response is ' + JSON.stringify(response));
      })
    }


    terms(){
      this.navCtrl.push(TermsPage);
    }
}
