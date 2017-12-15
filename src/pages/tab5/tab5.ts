import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,Events} from 'ionic-angular';
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
import { ModalController } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';

/**
 * Generated class for the Tab5Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tab5',
  templateUrl: 'tab5.html',
})
export class Tab5Page {
   countrylist:'';
  picgallery:'';
  public userinfo:any;
  profilepicture;
  imgTosend;
  srcImage;
  role_assign:1;
  userInfo;
  gallery_hide;
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
    public modalCtrl: ModalController,
    public events : Events
  ) {
  
//this.getuserdetail();
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
            this.userinfo = response.detail;
            console.log(this.userinfo + "bhumika");
           
            // var countryaction = {
            //   action: 'country_list'
            // }
            // var serialized_data = this.Cmn.serializeObj(countryaction);
            // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            // let options = new RequestOptions({ headers: headers });
            // this.http.post(url, serialized_data, options)
            //   .map(resp => resp.json())
            //   .subscribe((countries) => {
            //     console.log(countries)

                // this.countrylist = countries.list;
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
                    } else {
                      this.gallery_hide = 0
                    }
                  })
                })
           //   })
            })
          })
        }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab5Page');
    this.events.subscribe('tab-t0-4', (data)=>{
      // console.log(this.navCtrl.canGoBack())
       // if(this.navCtrl.canGoBack() == true){
       //   this.navCtrl.popToRoot()
       // } 
       this.getuserdetail();
        //alert('working')
      })
  }
presentModal(gallery) {
  console.log('modal---')
    let modal = this.modalCtrl.create(GalleryPage, { photogallery: this.picgallery ,index:gallery});
    console.log('index is '+gallery)
    modal.present();
  }
}
