import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams ,LoadingController, Platform, IonicPage} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
declare var google;
/**
 * Generated class for the SpecialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  public data = '';
  longitude: any;
  latitude;
  @ViewChild('map') mapElement;
  map: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public loadingCtrl:LoadingController,
    public shared: SharedProvider,
    private http:Http,
    public Cmn:CommonProvider,
    public variable:VariableProvider,
    public platform: Platform, ) {
      
  }
  
  contactus(data){
    var url:string = this.variable.baseUrl + this.variable.STATIC_PAGES_API;
    var static_page={
      action:"contact",
      uname:data.username,
      email:data.email,
      message:data.message
    }
      var serialized_data = this.Cmn.serializeObj(static_page);
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
          Loading.dismiss();
          if(resolve.error==0){
            alert("Thank you for your contact with Bowdaa")
          }else{
            resolve
          }
        })
      })
  }





  loadMap1(){
   
    // this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    // console.log(resp.coords.latitude);
    // console.log(resp.coords.longitude);
    //  alert(resp.coords.latitude);
    //  alert(resp.coords.longitude);
    this.latitude = "25.1216";
    this.longitude = "55.3774";
   
    let latLng = new google.maps.LatLng(this.latitude,this.longitude); 
   
    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }; 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     var marker = new google.maps.Marker({
     position: latLng,
     map: this.map,
   });

   // alert(this.latitude+'/'+this.longitude);
  //  }).catch((error) => {
  //  console.log('Error getting location', error);
   // alert(error)
  //  let toast = aa.toastCtrl.create({
  //  message: 'Please on your location',
  //  duration: 3000,
  //  cssClass: 'toastCss',
  //  position: 'bottom',
  //  });
  //  toast.present();
  //  this.diagnostic.switchToLocationSettings();
 };
 

 

  ionViewDidLoad() {
    this.loadMap1();
    console.log('ionViewDidLoad ContactusPage');
  }

}
