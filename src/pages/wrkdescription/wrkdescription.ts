import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController,Platform,ToastController} from 'ionic-angular';
import { SubmitproposalPage } from '../submitproposal/submitproposal';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { File } from '@ionic-native/file';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ViewoffersPage } from '../viewoffers/viewoffers';
import  moment from 'moment';
import { ImageViewerController } from 'ionic-img-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the HsdescriptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-wrkdescription',
  templateUrl: 'wrkdescription.html',
})
export class WrkdescriptionPage {
  fedexx: string;
  _imageViewerCtrl: ImageViewerController;
  showimage: any;
  subbmit_image: number;
  imagepath: any;
  job_details_image: any;
  doc_submit: string;
  doc_path: string;
  show_image: number;
  filename: any;
  shipping_lenght: any;
  my_shipping: any;
  time: Date;
  date_format: any;
  Current_date: any;
  currentTime: any;
  release_lenght: any;
  release_payment: any;
  show: any;
  request_id: any;
  docUri_myoffer: any;
  image_path: any;
  lenght_offer: any;

  my_offer: any;
  public loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    showBackdrop: false,
    cssClass: 'loader'
    //content: '<div class="circles"></div>'
  });
  isChangedFile = false;
  docUri;
  req_iddd: any;
  job_details_dec;
  user_id;
  req_id;
  fileSelected = 0;
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
    private socialSharing: SocialSharing,
    private toastCtrl: ToastController,
    private theInAppBrowser: InAppBrowser,
    imageViewerCtrl: ImageViewerController
    ) {
      this.fedexx=this.variable.FED_EX;
      this._imageViewerCtrl = imageViewerCtrl;
      this.doc_submit=this.variable.IMAGE_URI;
      this.doc_path=this.variable.PROPOSAL_IMAGE;
      this.user_id = localStorage.getItem('userid');
      this.req_iddd = this.navParams.get('request_id');
      this.req_id= localStorage.getItem('iddd');
      //this.req_id = this.navParams.get('req');
      console.log(this.req_id);
      this.image_path=this.variable.IMAGE_URL
      console.log(this.image_path);
      console.log("bhumika")
      this.Job_details_findwork()
      this.currentTime = new Date()
      this.Current_date = moment(this.currentTime).format('DD-MM-YYYY');
  }


  Job_details_findwork() {
    var url: string = this.variable.baseUrl + this.variable.JOB_api;
    console.log(url);
    var history = {
      action: "job_detail",
      reqid: this.req_id,
      userid: this.user_id

    }
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
          console.log(resolve.data);
          if (resolve.error == 0) {
            this.my_offer = resolve.myoffer;
            this.lenght_offer = this.my_offer.length;
            this.job_details_dec = resolve.data[0];
            this.job_details_image = resolve.data[0].image;
            this.imagepath = this.job_details_image.split('.');
            console.log(this.imagepath[1]);
            if(this.imagepath[1]=="png"|| this.imagepath[1]=="PNG"  || this.imagepath[1]=="jpg" || this.imagepath[1]=="JPG" || this.imagepath[1]=="JPEG" || this.imagepath[1]=="jpeg"){
              this.subbmit_image=0;
            }else{
              this.subbmit_image=1;
            }
            //this.time=new Date(parseInt(resolve.data[0].created));
            //this.date_format = moment(this.time).format('DD-MM-YYYY');
            this.time= new Date(resolve.data[0].created);
            this.date_format= this.time.getDate()+"-"+(this.time.getMonth()+1)+"-"+this.time.getFullYear();
            console.log(this.date_format);
            this.docUri = resolve.data[0].image;
            this.release_payment = resolve.release_payment
            this.release_lenght = this.release_payment.length;
            this.my_shipping = resolve.shipping;
            this.shipping_lenght=this.my_shipping.length;
            if(this.lenght_offer != ""){
              for (let i = 0; i < this.lenght_offer; i++) {
              console.log("bhumika")
             // console.log(this.offer_lenght[i].status);
              console.log(this.my_offer[i].file);
             // console.log(this.offer_lenght.file);
              console.log("dcgt")
              if(this.my_offer[i].file!=""){
              //  console.log(this.filename )
                this.filename = this.my_offer[i].file.split('.');
                console.log(this.filename[1]);
                if(this.filename[1]=="png"|| this.filename[1]=="PNG"  || this.filename[1]=="jpg" || this.filename[1]=="JPG" || this.filename[1]=="JPEG" || this.filename[1]=="jpeg"){
                  this.show_image=0;
                }else{
                  this.show_image=1;
                }
              }
            }
            
             
            }
            
              
            if (this.docUri != "")
              this.fileSelected = 1;
            else
              this.fileSelected = 0;
          } else {

          }
        })
      })
    }

    fedex(){
    //  alert("bhumika")
      let target = "_blank";
      var options = 'location=no';
      let browser = this.theInAppBrowser.create( this.fedexx  , target, options);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HsdescriptionPage');
  }

 submitproposalPage(id,uid){
   console.log(id);
    this.navCtrl.push(SubmitproposalPage,{
      request_id:id,
      post_id:uid,
    });
  }
  checkPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      success =>  this.downloadAndroidFile(),
      err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );
    
    this.androidPermissions.requestPermissions(
      [this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]).then(suucess=>{
        this.downloadAndroidFile();
      },err=> alert('Please give the storage permissions'));
    }


  download() {
      if (this.platform.is('android')) {
        this.loading.present();
        this.createDirectory();
      } else if (this.platform.is('ios')) {
        this.downlaodIOSFile();
      }
    
  }
  createDirectory() {
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
    const url = this.variable.IMAGE_URI + this.docUri;
    const fileTransfer: TransferObject = this.transfer.create();
    var options = {};
    fileTransfer.download(url, this.file.externalRootDirectory + "/bowdaa/" + this.docUri, true, options).then((entry) => {
      this.loading.dismiss();
     // alert("Download Completed! ")
     let toast = this.toastCtrl.create({
      message:"Download Completed!",
      duration: 3000,
     cssClass: 'toastCss',
      position: 'middle',
    });
    toast.present();

    }, (error) => {
      this.loading.dismiss();
      //alert('error error' + JSON.stringify(error))
    });
  }

  downlaodIOSFile() {
    const url = this.variable.IMAGE_URI + this.docUri;
    const fileTransfer: TransferObject = this.transfer.create();
    var options = {};
    fileTransfer.download(url,this.file.documentsDirectory + this.docUri, true, options).then((entry) => {
    alert("Download Completed! ")
    }, (error) => {
      //alert('error error' + JSON.stringify(error))
    });
  }

///////////////////////////////////////
  download_myoffer(file) {
    this.docUri_myoffer=file;
  //  alert(this.docUri_myoffer);
    if (this.platform.is('android')) {
      this.loading.present();
      this.createDirectory_myoffer();
    } else if (this.platform.is('ios')) {
      this.downlaodIOSFile_myoffer();
    }
  
}
createDirectory_myoffer() {
  this.file.checkDir(this.file.externalRootDirectory, 'bowdaa').then(_ => {
    this.checkPermission_myoffer();
  })
    .catch(err => {
      this.file.createDir(this.file.externalRootDirectory, 'bowdaa', false).then(res => {

        this.checkPermission_myoffer();

      }), err => {

      }
    })
}
checkPermission_myoffer() {
  this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
    success =>  this.downloadAndroidFile_myoffer(),
    err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
  );
  
  this.androidPermissions.requestPermissions(
    [this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]).then(suucess=>{
      this.downloadAndroidFile_myoffer();
    },err=> alert('Please give the storage permissions'));
  }
  downloadAndroidFile_myoffer() {
    const url = this.variable.PROPOSAL_IMAGE + this.docUri_myoffer;
    const fileTransfer: TransferObject = this.transfer.create();
    var options = {};
    fileTransfer.download(url, this.file.externalRootDirectory + "/bowdaa/" + this.docUri_myoffer, true, options).then((entry) => {
      this.loading.dismiss();
     //alert("Download Completed!")
      let toast = this.toastCtrl.create({
        message:"Download Completed!",
        duration: 3000,
       cssClass: 'toastCss',
        position: 'middle',
      });
      toast.present();
    }, (error) => {
      this.loading.dismiss();
      //alert('error error' + JSON.stringify(error))
    });
  }

  downlaodIOSFile_myoffer() {
    const url = this.variable.PROPOSAL_IMAGE + this.docUri_myoffer;
  //  alert(url)
    const fileTransfer: TransferObject = this.transfer.create();
    var options = {};
    fileTransfer.download(url,this.file.documentsDirectory + this.docUri_myoffer, true, options).then((entry) => {
    alert("Download Completed! ")
    }, (error) => {
      //alert('error error' + JSON.stringify(error))
    });
  }
//////////////////////////////////////////
Share(id){
 // alert(id)
  this.request_id=id
  // alert(this.request_id);
   // share(message, subject, file, url)
   this.socialSharing.share("https://bowdaa.com/viewjob?REQID="+this.request_id);
}


invitation(invi_ofer_id,incvi_use_id,requ_id,value){
  var url: string = this.variable.baseUrl + this.variable.ACTIVE_CONTRACTS;
  console.log(url);
  var history = {
    action: "invitation_accept",
    invitation_offer_id:invi_ofer_id,
    invitation_user_id:incvi_use_id,
    requestid:requ_id,
    accept:value,
    my_id:this.user_id

  }
  var serialized_data = this.Cmn.serializeObj(history);
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
     // Loading.dismiss();
      console.log(resolve)
      if(resolve.error==0){
        this.show=resolve.msg
        console.log(this.show);
        this.Job_details_findwork();
      }
    })
 // })

}
viewoffersPage(id){
  this.navCtrl.push(ViewoffersPage,{
    request_id:id,
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
