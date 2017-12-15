import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController,Platform,ToastController} from 'ionic-angular';
import { ViewoffersPage } from '../viewoffers/viewoffers';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { File } from '@ionic-native/file';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import  moment from 'moment';
import { ImageViewerController } from 'ionic-img-viewer';


/**
 * Generated class for the HsdescriptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-hsdescription',
  templateUrl: 'hsdescription.html',
})
export class HsdescriptionPage {
  showimage: any;
  _imageViewerCtrl: ImageViewerController;
  doc_path: string;
  doc_submit: string;
  subbmit_image: number;
  imagepath: any;
  job_details_image: any;
  date_format: string;
  time: Date;
  Current_date: any;
  currentTime: Date;
  image_path: any;
  req_id: any;
  job_details_dec: any;
  user_id: any;
  docUri;
  fileSelected = 0;
  
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
    private toastCtrl: ToastController,
    imageViewerCtrl: ImageViewerController
    ) {
      this._imageViewerCtrl = imageViewerCtrl;
      this.doc_submit=this.variable.IMAGE_URI;
      this.doc_path=this.variable.PROPOSAL_IMAGE;
      this.user_id = localStorage.getItem('userid');
      this.req_id= localStorage.getItem('his_id');
      //this.req_id = this.navParams.get('req');
      console.log(this.req_id);
      this.image_path=this.variable.IMAGE_URL
      console.log(this.image_path);
      this.currentTime = new Date()
      this.Current_date = moment(this.currentTime).format('DD-MM-YYYY');
 this.Job_details_findwork()
  }
  Job_details_findwork(){
    var url: string = this.variable.baseUrl + this.variable.JOB_api;
    ;
    console.log(url);
    var history = {
      action: "job_detail",
      reqid:this.req_id,
      userid:this.user_id
  
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
        console.log(resolve.data);
        this.job_details_dec=resolve.data[0];
        this.job_details_image = resolve.data[0].image;
        this.imagepath = this.job_details_image.split('.');
        console.log(this.imagepath[1]);
        if(this.imagepath[1]=="png"|| this.imagepath[1]=="PNG"  || this.imagepath[1]=="jpg" || this.imagepath[1]=="JPG" || this.imagepath[1]=="JPEG" || this.imagepath[1]=="jpeg"){
          this.subbmit_image=0;
        }else{
          this.subbmit_image=1;
        }
       this.docUri=resolve.data[0].image;
      //  this.time = new Date(parseInt(resolve.data[0].created));
      //  this.date_format = moment(this.time).format('DD-MM-YYYY');
      this.time= new Date(resolve.data[0].created);
      this.date_format= this.time.getDate()+"-"+(this.time.getMonth()+1)+"-"+this.time.getFullYear();
       console.log(this.date_format);
       console.log(this.docUri);
       if (this.docUri != "")
        this.fileSelected = 1;
      else
        this.fileSelected = 0;
       
      })
    })
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
      //alert("Download Completed! ")
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad HsdescriptionPage');
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
