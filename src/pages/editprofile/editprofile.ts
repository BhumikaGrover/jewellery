import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ToastController,ViewController,Events} from 'ionic-angular';
import { FormsModule , FormGroup, FormBuilder, Validators, FormControl}  from '@angular/forms';
import { SharedProvider } from '../../providers/shared/shared';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { ActionSheetController } from 'ionic-angular';
import { Camera,CameraOptions} from '@ionic-native/camera';
import { VerficationPage } from '../Verfication/Verfication';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';


/**
 * Generated class for the EditprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  //userInfo: any;
  countrylist: '';
  picgallery:'';
  public userinfo={
    profilepicture: '',
    bcountry:'',
  }
  profilepicture;
  imgTosend;
  srcImage;
  role_assign:1;
public userInfo={
fname: '',
    username: '',
    role: '',
    email: '',
      skills: '',
       experiance: '',
         descripiton: '',
         designation:'',
          paypal: '',
          phone: '',
          country: '',
          address: '',
           lastname: '',
            gender: '',
          facebook: '',
          insta: '',
          twitter: '',
          youtube: '',
          pinta: '',
          linkdin: '',
          website: '',
          bname: '',
          bnikname: '',
          bcountry: '',
          bbank: '',
          branch: '',
          bcity: '',
          bcode: '',
          bswift: '',
          bibank: '',
          baccount: '',
          account_number: '',
}


    
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
    private toastCtrl: ToastController,
    public viewCtrl:  ViewController,
    public events : Events,
    private _zone: NgZone,
  ) {
    //this._zone = _zone;

   this.getuserdetail();
   this.userinfo.profilepicture='';
  }
  public getuserdetail() {
    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
    return new Promise(resolve => {
      var postdata = {
        userid: localStorage.getItem('userid'),
        action: 'user_detail'

      }
      var serialized_data = this.Cmn.serializeObj(postdata);
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
        .subscribe((response) => {
          console.log(response)
          //this.userinfo = response.detail;
         
          this.userinfo.profilepicture=response.detail.profilepicture;

          //alert(this.userinfo.profilepicture);
          console.log(this.userinfo + "bhumika");
       //   this.userInfo.baccount=response.detail.account_type;
         // alert(response.detail.account_type)
          if(response.detail.account_type==null){
           this.userInfo.baccount ="";
              }
              else{
                this.userInfo.baccount=response.detail.account_type;
          //       alert("bhumi")
          // if(response.detail.account_type=="1")
          // {
          //   this.userInfo.baccount="Account No";
           
          // }else if(response.detail.account_type=="2"){
          //   alert("cdjkcn")
          // this.userInfo.baccount = "IBAN";
          // alert
          // }
        }
          this.userInfo.fname = response.detail.fullname;
          this.userInfo.lastname = response.detail.lastname;
          this.userInfo.username = response.detail.username;
          this.userInfo.role = response.detail.role;
          this.userInfo.email = response.detail.email;
          this.userInfo.designation = response.detail.designation;
          this.userInfo.skills = response.detail.skills;
          this.userInfo.experiance = response.detail.experience;
          this.userInfo.descripiton = response.detail.description;
          this.userInfo.paypal = response.detail.pemail;
          this.userInfo.address = response.detail.address;
          this.userInfo.phone = response.detail.mobile;
          this.userInfo.country = response.detail.country;
          this.userInfo.gender = response.detail.gender;
          this.userInfo.facebook = response.detail.facebook_link;
          this.userInfo.insta = response.detail.insta_link;
          this.userInfo.twitter = response.detail.twitter_link;
          this.userInfo.youtube = response.detail.youtube_link;
          this.userInfo.pinta = response.detail.pin_link;
          this.userInfo.linkdin = response.detail.linkedin_link;
          this.userInfo.website = response.detail.website;
          this.userInfo.paypal = response.detail.pemail;
          this.userInfo.bname = response.detail.bank_name;
          this.userInfo.bnikname = response.detail.bank_nickname;
          this.userInfo.bcountry = response.detail.bank_country;
          this.userInfo.bbank = response.detail.bank_bane;
          this.userInfo.branch = response.detail.bank_branch;
          this.userInfo.bcity = response.detail.bank_city;
          this.userInfo.bcode = response.detail.bank_code;
          this.userInfo.bswift = response.detail.bank_swiftcode;
          this.userInfo.bibank = response.detail.bank_intermediary;
          this.userInfo.bibank = response.detail.bank_intermediary;
          this.userInfo.account_number = response.detail.account_number;
         
          if(this.userInfo.bcountry == null){
            this.userInfo.bcountry = "";
          }
         
          if (this.userInfo.role == "Consumer") {
            this.role_assign = 1;
          }
          var countryaction = {
            action: 'country_list'
          }
          var serialized_data = this.Cmn.serializeObj(countryaction);

          let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
          let options = new RequestOptions({ headers: headers });
         
          this.http.post(url, serialized_data, options)
            .map(resp => resp.json())
            .subscribe((countries) => {
              console.log(countries)

              this.countrylist = countries.list;
              var usergallery = {
                action: 'my_gallery',
                userid: localStorage.getItem('userid'),
              }
              var serialized_data = this.Cmn.serializeObj(usergallery);

              let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
              let options = new RequestOptions({ headers: headers });
              this.http.post(url, serialized_data, options)
                .map(resp => resp.json())
                .subscribe((gallery) => {
                  console.log(gallery)
                  Loading.dismiss();
                  if (gallery.error == 0) {
                    this.picgallery = gallery.data;
                  }
                })
             })
          })
      })
    })
  }

//    nameValidator(control: FormControl): {[s: string]: boolean} {
//     if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
//       return {invalidName: true};
//     }
//   }


//  isValid(field: string) {
//     let formField = this.updateForm.get(field);
//     return formField.valid || formField.pristine;
//   }
  public profileupdate(data) {
    console.log(data.value);
    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
    this.loading.present();
    console.log(data.value)
    return new Promise(resolve => {
      data.value.action = 'edit_profile';
      data.value.userid = localStorage.getItem('userid');
      var postdata = {
        action: 'edit_profile',
        userid: localStorage.getItem('userid'),
        phone: data.value.phone,
        country: data.value.country,
        designation: data.value.designation,
        address: data.value.address,
        skills: data.value.skills,
        experience: data.value.experiance,
        descripiton: data.value.descripiton,
        paypal: data.value.paypal,
        fname: data.value.fname,
        user_gender: data.value.gender,
        website: data.value.website,
        linkedin_link: data.value.linkdin,
        pin_link: data.value.pinta,
        youtube_link: data.value.youtube,
        twitter_link: data.value.twitter,
        insta_link: data.value.insta,
        facebook_link: data.value.facebook,
        lastname: data.value.lastname,
        bank_name:data.value.bname,
        bank_nickname:data.value.bnikname, 
        bank_country:data.value.bcountry, 
        bank_bane:data.value.bbank,
        bank_branch:data.value.branch,
        bank_city:data.value.bcity, 
        bank_code:data.value.bcode, 
        bank_swiftcode:data.value.bswift, 
        bank_intermediary:data.value.bibank, 
        account_type:data.value.baccount, 
        account_number:data.value.account_number,
      }
      console.log(data.value);
      var serialized_data = this.Cmn.serializeObj(postdata);
      console.log(serialized_data)
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(url, serialized_data, options)
        .map(res => res.json())
        .subscribe((response) => {
          console.log(response)
          if (response.error == 0) {
            // this.presentToastprofile(response.msg);
            this.loading.dismiss();
         //   alert(response.msg);
            let toast = this.toastCtrl.create({
              message:response.msg,
              duration: 3000,
             cssClass: 'toastCss',
              position: 'middle',
            });
            toast.present();
            this.events.publish('7', 'honey');
            console.log("bhumi")
            this.viewCtrl.dismiss();
          }
          else {
            this.events.publish('7', 'honey');
            this.loading.dismiss();
            let toast = this.toastCtrl.create({
              message:response.msg,
              duration: 1000,
             cssClass: 'toastCss',
              position: 'middle',
            });
            toast.present();
            this.viewCtrl.dismiss();
          //  alert(response.msg);
            //this.presentToast(response.msg);
          }
        });
      })
    }



CameraAction() {
 var url:string = this.variable.baseUrl + this.variable.SIGNIN_API;
  console.log('opening');
  let actionsheet = this.actionSheetCtrl.create({
   title: "Choose Album",
   buttons: [{
    text: 'Camera',
    handler: () => {
    // this.loading.present();
     const options: CameraOptions = {
      quality: 70,
      sourceType: 1,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
     }
     this.camera.getPicture(options).then((imageUri) => {

     // alert('img   '+imageUri);
      this.imgTosend = imageUri;
      this.srcImage ='data:image/jpeg;base64,' + imageUri;
  //  alert(this.srcImage);
       var postdata = {
        action:'save_avatar',
        img:imageUri,
        userid:localStorage.getItem('userid')
      }

    //  alert(JSON.stringify(postdata));
     var serialized_data = this.Cmn.serializeObj(postdata);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});
      let options = new RequestOptions({ headers: headers });
      this.http.post(url, serialized_data, options).map(res=>res.json())
      .subscribe((response)=>{
        // this.loading.dismiss();
        console.log(response);
        // alert('response');
          alert(JSON.stringify(response));
       this.userinfo.profilepicture ='data:image/jpeg;base64,' + imageUri;;
      
     }, (err) => {
       alert('error');
     alert(JSON.stringify(err));
    });
     //this.loading.dismiss();
     }, (err) => {
      // alert(err);
     // this.loading.dismiss();
      console.log(err);
     });
    }
   },
   {
    text: 'Gallery',
    handler: () => {
     console.log("Gallery Clicked");
     //alert("get Picture")
     //this.loading.present();
     const options: CameraOptions = {
      quality: 10,
      sourceType: 0,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
     }
     this.camera.getPicture(options).then((imageData) => {
   //   alert('img   '+imageData);
      this.srcImage = 'data:image/jpeg;base64,' + imageData;
      this.imgTosend = imageData;
    //  alert(this.srcImage);
        var postdata = {
        action:'save_avatar',
        img:imageData,
        userid:localStorage.getItem('userid')
      }

  //    alert(JSON.stringify(postdata));
     var serialized_data = this.Cmn.serializeObj(postdata);
     console.log(serialized_data);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});
      let options = new RequestOptions({ headers: headers });
      this.http.post(url, serialized_data, options)
      .map(res=>res.json())
      .subscribe((response)=>{
        // this.loading.dismiss();
     //    alert('response');
         console.log("bhumika")
        console.log(JSON.stringify(response))
     //     alert(JSON.stringify(response));
       this.userinfo.profilepicture ='data:image/jpeg;base64,' + imageData;;
      
     }, (err) => {
       alert('error');
     alert(JSON.stringify(err));
     console.log(JSON.stringify(err));
    });

      //this.loading.dismiss();
     }, (err) => {
    //  this.loading.dismiss();

      // Handle error
     });
    }
   },
   {
    text: 'Cancel',
    role: 'cancel',
    handler: () => {
     console.log('Cancel clicked');
     //  actionsheet.dismiss();

    }
   }]
  });

  actionsheet.present();
 }

  selectgalleryimg() {
    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
    this.camera.getPicture({
      quality: 10,
      destinationType: 0, // DATA_URL
      sourceType: 0,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      var postdata = {
        action: 'add_gallery',
        img: imageData,
        userid: localStorage.getItem('userid')
      }

      this.loading.present();
      var serialized_data = this.Cmn.serializeObj(postdata);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(url, serialized_data, options)
        .map(res => res.json())
        .subscribe((response) => {
          let toast = this.toastCtrl.create({
            message:"Image is uploaded successfully!",
            duration: 3000,
           cssClass: 'toastCss',
            position: 'middle',
          });
          toast.present();
        //  alert(JSON.stringify(response));
          var usergallery = {
            action: 'my_gallery',
            userid: localStorage.getItem('userid')
          }
          var serialized_data = this.Cmn.serializeObj(usergallery);
          let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
          let options = new RequestOptions({ headers: headers });
          this.http.post(url, serialized_data, options)
            .map(resp => resp.json())
            .subscribe((gallery) => {
              console.log(gallery)
              this.picgallery = gallery.data;
              this.loading.dismiss();
            })
          })
        })
      }


  public deleteimg(gall_id) {
    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
    return new Promise(resolve => {
      var postdata = {
        action: 'remove_gallery',
        galleryid: gall_id

      }

      var serialized_data = this.Cmn.serializeObj(postdata);
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
          .subscribe((response) => {
            console.log(response)
            if (response.error == 0) {
              var usergallery = {
                action: 'my_gallery',
                userid: localStorage.getItem('userid')
              }
              var serialized_data = this.Cmn.serializeObj(usergallery);
              console.log(serialized_data)
              let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
              let options = new RequestOptions({ headers: headers });
              this.http.post(url, serialized_data, options)
                .map(resp => resp.json())
                .subscribe((gallery) => {
                  Loading.dismiss();
                  console.log(gallery)
                  // if (gallery.error == 0) {
                    this.picgallery = gallery.data;let toast = this.toastCtrl.create({
                      message:"Image delete successfully!",
                      duration: 3000,
                     cssClass: 'toastCss',
                      position: 'middle',
                    });
                    toast.present();
                  // } else {

                  // }
                })
              } else {

            }
          })
      })
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
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
      this.userinfo.profilepicture = 'data:image/jpeg;base64,' + imagePath
      this.uploadImage();
    }, (err) => {
      //this.presentToast('Error while selecting image.');
    });
  }

  uploadImage() {
    this.loading.present();
    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
    var postdata = {
      action: 'save_avatar',
      img: this.imgTosend,
      userid: localStorage.getItem('userid')
    }
   // alert(postdata);
    var serialized_data = this.Cmn.serializeObj(postdata);
   // alert(serialized_data);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_data, options)
      .map(res => res.json())
      .subscribe((response) => {

       // alert('response is ' + JSON.stringify(response));
        this.events.publish('7', 'honey');
      this.loading.dismiss();
      })
  }
}
