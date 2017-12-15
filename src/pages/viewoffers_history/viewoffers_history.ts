import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController,Platform} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { File } from '@ionic-native/file';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';

/**
 * Generated class for the ViewoffersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-viewoffers_history',
  templateUrl: 'viewoffers_history.html',
})
export class Viewoffers_historyPage {
  image_path: string;
  docUri: string;
  lenght_offer: any;
  offer_lenght: any;
  view_offersss: any;
  req_id: any;
  user_id: any;
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
  ) {
    this.user_id = localStorage.getItem('userid');
    this.req_id = this.navParams.get('request_id');
    console.log(this.req_id);
    this.image_path=this.variable.IMAGE_URL
    console.log(this.image_path);
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
        this.view_offersss=resolve.jobdata[0]
        this.offer_lenght=resolve.offers;
      this.lenght_offer= this.offer_lenght.length;
      console.log(this.lenght_offer);
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
  download(filename){
    this.docUri=filename;
    console.log(filename);
alert( this.docUri);
      if (this.platform.is('android')) {
        this.loading.present();
        this.createDirectory();
      } else if (this.platform.is('ios')) {
        this.downlaodIOSFile();
      }
    
  }

  createDirectory() {
    alert("dcm")
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
    const url = this.variable.PROPOSAL_IMAGE + this.docUri;
   alert(url);
    const fileTransfer: TransferObject = this.transfer.create();
    var options = {};
    fileTransfer.download(url, this.file.externalRootDirectory + "/bowdaa/" + this.docUri, true, options).then((entry) => {
      this.loading.dismiss();
      alert("Download Completed! ")

    }, (error) => {
      this.loading.dismiss();
      alert('error error' + JSON.stringify(error))
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
    console.log('ionViewDidLoad ViewoffersPage');
  }

}
