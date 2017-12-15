import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController,Platform,AlertController,ToastController} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { File } from '@ionic-native/file';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { ModalController } from 'ionic-angular';
import { Modal_restrPage } from '../modal_restr/modal_restr';
import { Modal_popupPage } from '../modal_popup/modal_popup';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ChatPage } from '../chat/chat';
import { ImageViewerController } from 'ionic-img-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Modal_shippingPage } from '../modal_shipping/modal_shipping';
/**
 * Generated class for the ViewoffersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-viewoffers',
  templateUrl: 'viewoffers.html',
})
export class ViewoffersPage {
  fedexx: string;
  showimage: any;
  _imageViewerCtrl: ImageViewerController;
  start_offer_pay: any;
  User: string;
  filename: any;
  doc_path: string;
  shipping_lenght: any;
  my_shipping: any;
  o_user_id: any;
  off_id: any;
  class = '';
  offer_user: any;
  request_id: any;
  offer_id: any;
  start_offer: any;
  lenght_release: any;
  release_payment: any;
  image_path: string;
  docUri: string;
  lenght_offer: any;
  offer_lenght: any;
  view_offersss: any;
  req_id: any;
  user_id: any;
  show_image:any;
  public rating={
    rate:'',
  }
  public loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    showBackdrop: false,
    cssClass: 'loader'
      });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public Cmn: CommonProvider,
    public variable: VariableProvider,
    public shared: SharedProvider,
    public loadingCtrl: LoadingController,
    private http: Http,
    private fileChooser: FileChooser, 
    private transfer: Transfer, 
    public platform: Platform,
    private file: File,
    private androidPermissions: AndroidPermissions,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private theInAppBrowser: InAppBrowser,
    imageViewerCtrl: ImageViewerController
  ) {
    this.fedexx=this.variable.FED_EX;
    this._imageViewerCtrl = imageViewerCtrl;
    this.user_id = localStorage.getItem('userid');
    this.req_id = this.navParams.get('request_id');
    this.image_path=this.variable.IMAGE_URL;
    this.doc_path=this.variable.PROPOSAL_IMAGE;
    
    ;
    console.log(this.image_path);
    console.log(this.req_id);
    this.views_offer();
  }

  views_offer(){
    var url: string = this.variable.baseUrl + this.variable.JOB_api;
    ;
    console.log(url);
    var history = {
      action: "myjob_offer",
      job_id:this.req_id,
      current_userid:this.user_id
  
    }
  
    //this.loading.present();
    var serialized_data = this.Cmn.serializeObj(history);
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
        Loading.dismiss();
        console.log(resolve)
       if(resolve.error==0){
        this.view_offersss=resolve.jobdata[0];
        console.log(this.view_offersss);
       this.rating.rate=resolve.jobdata[0].rating;
        this.offer_lenght=resolve.offers;
      this.lenght_offer= this.offer_lenght.length;
      // if(this.lenght_offer!=0){
      //   for (let i = 0; i < this.offer_lenght; i++) {
      //     console.log("bhumika")
      //     console.log(this.offer_lenght[i].file);
      //   }
      // }
      this.release_payment=resolve.release_payment;
      this.lenght_release=this.release_payment.length;
      console.log(this.lenght_release);
      console.log(resolve.jobstartoffers.length);
      this.my_shipping = resolve.shipping;
      this.shipping_lenght=this.my_shipping.length;
      if(resolve.jobstartoffers.length!=0){
      this.start_offer=resolve.jobstartoffers[0].USERID;
      console.log("bhumika")
      console.log(this.start_offer);}
      console.log(this.lenght_offer);
      if(this.lenght_offer != ""){
        for (let i = 0; i < this.lenght_offer; i++) {
        console.log("bhumika")
        console.log(this.offer_lenght[i].status);
        console.log(this.offer_lenght[i].file);
       // console.log(this.offer_lenght.file);
        console.log("dcgt")
        if(this.offer_lenght[i].file!=""){
        //  console.log(this.filename )
          this.filename = this.offer_lenght[i].file.split('.');
          console.log(this.filename[1]);
          if(this.filename[1]=="png"|| this.filename[1]=="PNG"  || this.filename[1]=="jpg" || this.filename[1]=="JPG" || this.filename[1]=="JPEG" || this.filename[1]=="jpeg"){
            this.show_image=0;
          }else{
            this.show_image=1;
          }
        }
        if(this.offer_lenght[i].status > 4){
          this.offer_lenght[i].class = "add_class";
        console.log("grover")
        
        }else{
          this.offer_lenght[i].class = "";
        }
        console.log(this.class);
       
      }
      console.log(this.rating)
        }
   
      
      
       }
      //   this.job_details_dec=resolve.data[0];
      //  this.docUri=resolve.data[0].image;
      //  if (this.docUri != "")
      //   this.fileSelected = 1;
      // else
      //   this.fileSelected = 0;
       
      })
    })
  }
  fedex(){
    // alert("bhumika")
     let target = "_blank";
     var options = 'location=no';
     let browser = this.theInAppBrowser.create( this.fedexx  , target, options);
   }

   ship_the_product(id){
    console.log(id);
    let modal_shippingPage = this.modalCtrl.create(Modal_shippingPage,{
      req:id
    });
    modal_shippingPage.present();
  }

  checkPermission() {
   // alert("check")
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      
      success =>  this.downloadAndroidFile(),
      
      err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );
    
    this.androidPermissions.requestPermissions(
      [this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]).then(suucess=>{
       // this.downloadAndroidFile();
      },err=> alert('Please give the storage permissions'));
    }


    // checkPermission(uri) {
    //   this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
    //     success => console.log('Permission granted'),
    //     err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    //   );
      
    //   this.androidPermissions.requestPermissions(
    //     [this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]).then(suucess=>{
    //       try {
    //           (<any>window).FilePath.resolveNativePath(uri, (result) => {
    //            // alert('result ' + result)
    //             this.isChangedFile = true;
    //             this.fileSelected = 1;
    //             this.docUri = result;
    //             this.showname=this.docUri.substring(this.docUri.lastIndexOf('/') + 1);
    //           }, error => {
    //           //  alert(error);
    //           })
    //         } catch (error) {
    //          // alert(error);
    //         }
    //     },err=> alert('Please give the storage permissions'));
    //   }
  download(filename){
   // alert("hjfg")
    this.docUri=filename;
   // console.log(filename);
//alert( this.docUri);
      if (this.platform.is('android')) {
        this.loading.present();
        this.createDirectory();
      } else if (this.platform.is('ios')) {
        this.downlaodIOSFile();
      }
    
  }

  createDirectory() {
  //  alert("dcm")
    this.file.checkDir(this.file.externalRootDirectory, 'bowdaa').then(_ => {
      this.checkPermission();
    })
      .catch(err => {
        this.file.createDir(this.file.externalRootDirectory, 'bowdaa', false).then(res => {

          this.checkPermission();

        }), err => {

        }
      })
  }
  downloadAndroidFile() {
  //  alert("dyd")
    const url = this.variable.PROPOSAL_IMAGE + this.docUri;
  // alert(url);
    const fileTransfer: TransferObject = this.transfer.create();
    var options = {};
    fileTransfer.download(url, this.file.externalRootDirectory + "/bowdaa/" + this.docUri, true, options).then((entry) => {
      this.loading.dismiss();
    //  alert("Download Completed! ")
      let toast = this.toastCtrl.create({
        message:"Download Completed!",
        duration: 3000,
       cssClass: 'toastCss',
        position: 'middle',
      });
      toast.present();
    }).catch((error)=>{
  
      this.loading.dismiss();
      alert('error error' + JSON.stringify(error))
  
 });
  }
  // downloadAndroidFile() {
  //   const url = this.variable.PROPOSAL_IMAGE + this.docUri;
  // // alert(url);
  //   const fileTransfer: TransferObject = this.transfer.create();
  //   var options = {};
  //   fileTransfer.download(url, this.file.externalRootDirectory + "/bowdaa/" + this.docUri, true, options).then((entry) => {
  //     this.loading.dismiss();
  //     alert("Download Completed! ")

  //   }, (error) => {
  //     this.loading.dismiss();
  //     alert('error error' + JSON.stringify(error))
  //   });
  // }
  downlaodIOSFile() {
    alert("ios")
    const url = this.variable.IMAGE_URI + this.docUri;
    const fileTransfer: TransferObject = this.transfer.create();
    var options = {};
    fileTransfer.download(url,this.file.documentsDirectory + this.docUri, true, options).then((entry) => {
    alert("Download Completed! ")
    }, (error) => {
      //alert('error error' + JSON.stringify(error))
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewoffersPage');
  }



  send_invitation(off_id,o_user_id,req_id) {
    console.log(off_id,o_user_id,req_id);
    var url: string = this.variable.baseUrl + this.variable.ACTIVE_CONTRACTS;
    ;
    console.log(url);
    var Send = {
      action: "sent_invitation",
      offer_id:off_id,
      offeruser_id: o_user_id,
      requestid:req_id
    }
    var serialized_data = this.Cmn.serializeObj(Send);
    console.log(serialized_data)

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    //  var Loading = this.loadingCtrl.create({
    //   spinner: 'bubbles',
    //   showBackdrop: false,
    //   cssClass: 'loader'
    //     });
    //     Loading.present().then(() => {
    this.http.post(url, serialized_data, options)
      .map(res => res.json())
      .subscribe(resolve => {
        //   Loading.dismiss();
        console.log(resolve)
        let toast = this.toastCtrl.create({
          message:resolve.msg,
          duration: 3000,
          cssClass: 'toastCss',
          position: 'middle',
        });
        toast.present();
        this.views_offer()
      })
  //  })

  }
  

 


  restr_clk(req_id,USERID) {
    console.log(USERID)
    console.log(req_id);
    localStorage.setItem('user_payment', USERID);
    this.User = localStorage.getItem('user_payment');
    console.log(this.User );
    let modal_restr = this.modalCtrl.create(Modal_restrPage,{
      r_id:req_id,
      USER_ID:USERID
    }
     );
    modal_restr.present();
    modal_restr.onDidDismiss((data) => {
      this.views_offer();
       })
      }




      presentConfirm(off_id,o_user_id,req_id) {
        this.offer_id=off_id
        this.offer_user=o_user_id
        this.request_id=req_id
            let alert = this.alertCtrl.create({
              //title: 'Confirm purchase',
              message: 'Are you sure you want to start the job?',
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'OK',
                  handler: () => {
                    console.log('Buy clicked');
                    this.startjob()
                  }
                }
              ]
            });
            alert.present();
           
          }



          end_job_alert(req_i,off_i,o_user_i,){
            this.off_id=off_i;
            this.o_user_id=o_user_i;
            this.req_id=req_i;
            console.log(this.req_id);
            let alert = this.alertCtrl.create({
              // title: 'Confirm purchase',
              message: 'Are you sure you want to end job?',
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'OK',
                  handler: () => {
                    console.log('Buy clicked');
                    this.endjob()
                  }
                }
              ]
            });
            alert.present();
          }
          endjob(){
            var url: string = this.variable.baseUrl + this.variable.ACTIVE_CONTRACTS;
            ;
            console.log(url);
            var Send = {
              action: "end_project",
              end_offer_id:this.off_id,
              end_offeruser_id: this.o_user_id,
              requestid:this.req_id,
              my_id:this.user_id
             
            }
            var serialized_data = this.Cmn.serializeObj(Send);
            console.log(serialized_data)
        
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            let options = new RequestOptions({ headers: headers });
            //  var Loading = this.loadingCtrl.create({
            //   spinner: 'bubbles',
            //   showBackdrop: false,
            //   cssClass: 'loader'
            //     });
            //     Loading.present().then(() => {
            this.http.post(url, serialized_data, options)
              .map(res => res.json())
              .subscribe(resolve => {
                //   Loading.dismiss();
                console.log(resolve)
                let toast = this.toastCtrl.create({
                  message:resolve.msg,
                  duration: 3000,
                  cssClass: 'toastCss',
                  position: 'middle',
                });
                toast.present();
               // alert(resolve.msg)
                this.views_offer();
              })
          //  })
        
          }

          startjob() {
            // console.log(off_id,o_user_id,req_id);
             var url: string = this.variable.baseUrl + this.variable.ACTIVE_CONTRACTS;
             ;
             console.log(url);
             var Send = {
               action: "start_project",
               start_offer_id:this.offer_id,
               start_offeruser_id:this.offer_user,
               requestid:this.request_id,
               my_id:this.user_id
              
             }
             var serialized_data = this.Cmn.serializeObj(Send);
             console.log(serialized_data)
         
             let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
             let options = new RequestOptions({ headers: headers });
             //  var Loading = this.loadingCtrl.create({
             //   spinner: 'bubbles',
             //   showBackdrop: false,
             //   cssClass: 'loader'
             //     });
             //     Loading.present().then(() => {
             this.http.post(url, serialized_data, options)
               .map(res => res.json())
               .subscribe(resolve => {
                 //   Loading.dismiss();
                 console.log(resolve)
                 let toast = this.toastCtrl.create({
                  message:resolve.msg,
                  duration: 3000,
                  cssClass: 'toastCss',
                  position: 'middle',
                });
                toast.present();
                 this.views_offer();
               })
           //  })
         
           }

  // submit_rating(data){
  //   alert("hfrbghyr")
  //   console.log(data.value)
  //   var url: string = this.variable.baseUrl + this.variable.ACTIVE_CONTRACTS;
  //   ;
  //   console.log(url);
  //   var Send = {
  //     action:"rating_to_job",
  //     ratingvalue:data.value.jobstar,
  //     review:data.value.job_rating,
  //     requestid:this.req_id,
  //     webreview:data.value.web_rating,
  //     webratingvalue:data.value.currentRate,
  //     myid:this.user_id
     
  //   }
  //   console.log(Send);
  //   var serialized_data = this.Cmn.serializeObj(Send);
  //   console.log(serialized_data)

  //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
  //   let options = new RequestOptions({ headers: headers });
  //   //  var Loading = this.loadingCtrl.create({
  //   //   spinner: 'bubbles',
  //   //   showBackdrop: false,
  //   //   cssClass: 'loader'
  //   //     });
  //   //     Loading.present().then(() => {
  //   this.http.post(url, serialized_data, options)
  //     .map(res => res.json())
  //     .subscribe(resolve => {
  //       //   Loading.dismiss();
  //       console.log(resolve)
  //       alert(resolve.msg)
       
  //     })

  // }

  rate_clk() {
    let modal_popup = this.modalCtrl.create(Modal_popupPage,
    {
      req:this.req_id
    });
    modal_popup.present();
    modal_popup.onDidDismiss((data) => {
      this.views_offer();
       })
  }

  chatPage(id,name){
    console.log(id,name);
    console.log(name);
     this.navCtrl.push(ChatPage,{
       other_user_id:id,
       username:name
     });
   } 

   presentImage(path,myImage) {
    // alert("image");
     this.showimage= path+myImage;
     console.log( this.showimage);
     const imageViewer = this._imageViewerCtrl.create( this.showimage);
     imageViewer.present();
   
     setTimeout(() => imageViewer.dismiss(), 1000);
     imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
   }
}
