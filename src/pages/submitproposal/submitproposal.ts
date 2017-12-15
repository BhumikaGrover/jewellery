import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController,Platform,ToastController,AlertController} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { WrkdescriptionPage } from '../wrkdescription/wrkdescription';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { File } from '@ionic-native/file';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';

/**
 * Generated class for the SubmitproposalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-submitproposal',
  templateUrl: 'submitproposal.html',
})
export class SubmitproposalPage {
  showName: string;
  post_id_id: any;
  req_id_id: any;
  user_id;
  public data = '';
  fileSelected = 0
  docUri = "";
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public Cmn: CommonProvider,
     public variable: VariableProvider,
     public shared: SharedProvider,
     public loadingCtrl: LoadingController,
     private http: Http,
     private file: File,
     private androidPermissions: AndroidPermissions,
     private fileChooser: FileChooser, 
     public platform: Platform, 
     private transfer: Transfer,
     private toastCtrl: ToastController,
     private alertCtrl: AlertController,
    ) {
      this.user_id = localStorage.getItem('userid');
      this.req_id_id = this.navParams.get('request_id');
      console.log(this.req_id_id);
      this.post_id_id = this.navParams.get('post_id');
      console.log(this.post_id_id);
  }

  callAPIToPostJob(data) {
    if (this.docUri == "") { //if no attachment
      var url: string = this.variable.baseUrl + this.variable.JOB_api
      var postdata = {
        action: "submit_proposal",
        delivery_day:data.value.deliver_day ,
        bid_amount:data.value.amount ,
        description:data.value.description ,
        myid:this.user_id ,
        post_user_id:this.post_id_id,
        jobid:this.req_id_id,
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
             .subscribe(resolve => {
              Loading.dismiss();
          console.log(resolve);
          if(resolve.error==0){
           // alert(resolve.msg);
            let toast = this.toastCtrl.create({
              message:resolve.msg,
              duration: 3000,
             cssClass: 'toastCss',
              position: 'middle',
            });
            toast.present();
            this.cancel()
           this.navCtrl.push(WrkdescriptionPage).then(() => {
            const index = this.navCtrl.getActive().index;
            this.navCtrl.remove(0, index);
          });
          }else{
            let alert = this.alertCtrl.create({
              title: '<div style="text-align:center" class="ops">Oops</div>',
              subTitle: '<div style="text-align:center" class="psswrd">'+resolve.msg+'</div>',
             buttons: ['Dismiss']
              });
              alert.present();
           // alert(resolve.msg);
          }
        })
      })
    } else {
      const fileTransfer: TransferObject = this.transfer.create();
      let currentName = this.docUri.substring(this.docUri.lastIndexOf('/') + 1);
    // alert('currentName ' + currentName);
      let options1: FileUploadOptions = {
        fileKey: 'image',
        fileName: currentName,
        headers: {},
        //mimeType:"application/pdf",
        params: {
          action: "submit_proposal",
          delivery_day:data.value.deliver_day ,
          bid_amount:data.value.amount ,
          description:data.value.description ,
          myid:this.user_id ,
          post_user_id:this.post_id_id,
          jobid:this.req_id_id,
        },
        chunkedMode: false
      }
      var Loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        showBackdrop: false,
        cssClass: 'loader'
          });
          Loading.present().then(() => {
            fileTransfer.upload(this.docUri, this.variable.baseUrl + this.variable.JOB_api, options1)
            .then((data) => {
              console.log('data ' + JSON.stringify(data));
             // alert("success " + JSON.stringify(data));
              Loading.dismiss();
             // alert("");
              let toast = this.toastCtrl.create({
                message:"The proposal has been submitted successfully.",
                duration: 3000,
                cssClass: 'toastCss',
                position: 'middle',
              });
              toast.present();
              this.cancel()
            }, (err) => {
              console.log('data ' + JSON.stringify(err));
             // alert("error" + JSON.stringify(err));
              Loading.dismiss();
              let alert = this.alertCtrl.create({
                title: '<div style="text-align:center" class="ops">Oops</div>',
                subTitle: '<div style="text-align:center" class="psswrd">Something went wrong.</div>',
               buttons: ['Dismiss']
                });
                alert.present();
            });
          })
        }
      }

// Form_submit_proposal(data){
//   var url: string = this.variable.baseUrl + this.variable.JOB_api;
//   ;
//   console.log(url);
//   var history = {
//     action: "submit_proposal",
//     delivery_day:data.value.deliver_day ,
//     bid_amount:data.value.amount ,
//     description:data.value.description ,
//     myid:this.user_id ,
//     post_user_id:this.post_id_id,
//     jobid:this.req_id_id,
//     image:"dox"
//   }
// console.log(history);
//   //this.loading.present();
//   var serialized_data = this.Cmn.serializeObj(history);
//   console.log(serialized_data)

//   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
//   let options = new RequestOptions({ headers: headers });
//    var Loading = this.loadingCtrl.create({
//     spinner: 'bubbles',
//     showBackdrop: false,
//     cssClass: 'loader'
//       });
//       Loading.present().then(() => {
//   this.http.post(url, serialized_data, options)
//     .map(res => res.json())
//     .subscribe(resolve => {
//       Loading.dismiss();
//       console.log(resolve);
//       if(resolve.error==0){
//         alert(resolve.msg);
//         this.cancel()
//       }else{
//         alert(resolve.msg);
//       }
//     })
//   })
// }
cancel(){ 
    this.navCtrl.push(WrkdescriptionPage
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitproposalPage');
  }

  browseAttachment() {
    if (this.platform.is('android')) {
      this.chooseFileAndroid();
    } else if (this.platform.is('ios')) {
      this.chooseFileIOS();
    } else {
    }
  }

  chooseFileAndroid() {
    var hh=this;
    this.fileChooser.open()
      .then(uri => {
        this.checkPermission(uri)
      })
      .catch(e => console.log('error'));
  }
  chooseFileIOS() {
    var hh = this;
    (<any>window).FilePicker.isAvailable(function (avail) {
      if (avail) {
        var utis = ["public.data"];
        (<any>window).FilePicker.pickFile(res => {
          hh.docUri = res;
          hh.fileSelected = 1;
        })
      }
    });
  }

  checkPermission(uri) {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      success => {
        try {
          (<any>window).FilePath.resolveNativePath(uri, (result) => {
            //alert('result ' + result)
            this.fileSelected = 1;
            this.docUri = result;
           
          }, error => {
           // alert(error);
          })
        } catch (error) {
         // alert(error);
        }
      },
      err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );
    this.androidPermissions.requestPermissions(
      [this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]).then(suucess=>{
        try {
            (<any>window).FilePath.resolveNativePath(uri, (result) => {
            // alert("gydsg");
             // alert('result ' + result)
              this.fileSelected = 1;
              this.docUri = result;
              this.showName = this.docUri.substring(this.docUri.lastIndexOf('/') + 1);
             // alert(this.showName);
            }, error => {
            //  alert
            (error);
            })
          } catch (error) {
           // alert(error);
          }
      },err=> alert('Please give the storage permissions'));
    }
    remove_Post(){
      // alert("remove")
       this.fileSelected = 0;
       this.docUri = ""
       this.showName=""
       console.log(this.docUri);
     }

}
