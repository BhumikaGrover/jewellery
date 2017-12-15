import { Component } from '@angular/core';
import { NavController, NavParams, Platform ,ToastController} from 'ionic-angular';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { CommonProvider } from '../../providers/common/common';
import { LoadingController } from 'ionic-angular';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AndroidPermissions } from '@ionic-native/android-permissions';
/**
 * Generated class for the EditjobPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-editjob',
  templateUrl: 'editjob.html',
})
export class EditjobPage {
  showname: any;
  created: any;

  elementType = ""
  elementType1 = ""
  elementType2 = ""
  elementType3 = ""
  yellow: boolean
  pink: boolean
  white: boolean
  isChangedFile = false;
  date
  date1
  day
  month
  year
  today_date
  public data: any = '';
  docUri;
  fname = ''
  profileImage = "assets/images/a.jpg"
  colorVisible = 1
  caratVisible = 1
  fileSelected = 0;
  cordova:any;

  carats(): string[] {
    return [
      "9kt", "10kt", "14kt", "18kt", "21kt", "22kt", "24kt"
    ];
  }

  carat: string = "9kt";

  elements(): string[] {
    return [
      "Gold", "Silver", "Diamond"
    ];
  }
  element: string = "Gold";

  constructor(private toastCtrl: ToastController,private androidPermissions: AndroidPermissions,public navparams: NavParams,private http: Http, public variable: VariableProvider, public platform: Platform, private transfer: Transfer, public loadingCtrl: LoadingController, public commonProvider: CommonProvider, private fileChooser: FileChooser, public navCtrl: NavController, public navParams: NavParams) {

    this.getJobDetail();
    this.detail();
    
  }

  checkPermission(uri) {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      success => console.log('Permission granted'),
      err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );
    
    this.androidPermissions.requestPermissions(
      [this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]).then(suucess=>{
        try {
            (<any>window).FilePath.resolveNativePath(uri, (result) => {
             // alert('result ' + result)
              this.isChangedFile = true;
              this.fileSelected = 1;
              this.docUri = result;
              this.showname=this.docUri.substring(this.docUri.lastIndexOf('/') + 1);
            }, error => {
            //  alert(error);
            })
          } catch (error) {
           // alert(error);
          }
      },err=> alert('Please give the storage permissions'));
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostjobPage');
  }


  updateColor() {
    this.elementType = ""
    if (this.yellow) {
      this.elementType1 = "yellow";
    } else {
      this.elementType1 = "";
    }
    if (this.pink) {
      this.elementType2 = "pink";
    } else {
      this.elementType2 = "";
    }
    if (this.white) {
      this.elementType3 = "white";
    } else {
      this.elementType3 = "";
    }

    this.checkElementType();
  }
  checkElementType() {
    if (this.elementType1 != "" && this.elementType == "") {
      this.elementType = this.elementType1
    }

    if (this.elementType2 != "" && this.elementType != "") {
      this.elementType = this.elementType + "," + this.elementType2
    } else if (this.elementType2 != "" && this.elementType == "") {
      this.elementType = this.elementType2
    }

    if (this.elementType3 != "" && this.elementType != "") {
      this.elementType = this.elementType + "," + this.elementType3
    } else if (this.elementType3 != "" && this.elementType == "") {
      this.elementType = this.elementType3
    }
  }

  caratChosen(): void {
    console.log(this.carat);
  }

  elemetChoosen(): void {
    if (this.element != 'Gold') {
      this.colorVisible = 0
      this.caratVisible = 0
    } else {
      this.colorVisible = 1
      this.caratVisible = 1
    }

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
      .catch(e => this.isChangedFile = false);
  }

  chooseFileIOS() {
    var hh = this;
    (<any>window).FilePicker.isAvailable(function (avail) {
      if (avail) {
        var utis = ["public.data"];
        (<any>window).FilePicker.pickFile(res => {
          alert('uri is ' + res)
          hh.docUri = res;
          hh.isChangedFile = true;
          hh.fileSelected = 1;
        }, (err) => {
          hh.isChangedFile = false;
        })
      } else {

      }
    });
  }

  callAPIToPostJob(alldata) {
    //alert('file name ' + this.elementType);
    this.commonProvider = new CommonProvider(this.loadingCtrl);
    this.commonProvider.Loader.present();

    if (this.isChangedFile) {
      const fileTransfer: TransferObject = this.transfer.create();
      let currentName = this.docUri.substring(this.docUri.lastIndexOf('/') + 1);
    //  alert('name ' + currentName);

      let options1: FileUploadOptions = {
        fileKey: 'image',
        fileName: currentName,
        headers: {},
        //mimeType:"application/pdf",
        params: {
          "action": "edit_job",
          "jobid": this.navparams.get('jobId'),
          "title": alldata.value.title,
          "description": alldata.value.description,
          "price": alldata.value.budget,
          "dilivery_day": alldata.value.duration,
          "userid": localStorage.getItem('userid'),
          "quantity": alldata.value.quantity,
          "kt": this.carat,
          "color": this.elementType,
          "element": this.element,
        },
        chunkedMode: false
      }

      fileTransfer.upload(this.docUri, this.variable.baseUrl + this.variable.EDIT_JOB, options1)
        .then((data) => {
          console.log('data ' + JSON.stringify(data));
         // alert("success " + JSON.stringify(data));
         // alert("Job sucessfully updated");
          let toast = this.toastCtrl.create({
            message:"Job sucessfully updated",
            duration: 3000,
           cssClass: 'toastCss',
            position: 'middle',
          });
          //this.clearField();
          this.commonProvider.Loader.dismiss();
        }, (err) => {
          console.log('data ' + JSON.stringify(err));
          alert("error--- " + JSON.stringify(err));
          this.commonProvider.Loader.dismiss();
        });
    } else {
      var url: string = this.variable.baseUrl + this.variable.EDIT_JOB
      var postdata = {
        "action": "edit_job",
        "jobid": this.navparams.get('jobId'),
        "title": alldata.value.title,
        "description": alldata.value.description,
        "price": alldata.value.budget,
        "dilivery_day": alldata.value.duration,
        "userid": localStorage.getItem('userid'),
        "quantity": alldata.value.quantity,
        "kt": this.carat,
        "color": this.elementType,
        "element": this.element
      }
      // this.commonProvider = new CommonProvider(this.loadingCtrl);
      // this.commonProvider.Loader.present();
      var serialized_data = this.serializeObj(postdata);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(url, serialized_data, options)
        .map(res => res.json())
        .subscribe((response) => {
          console.log('data ' + JSON.stringify(response));
         // alert("Job sucessfully updated");
          let toast = this.toastCtrl.create({
            message:"Job sucessfully updated",
            duration: 3000,
           cssClass: 'toastCss',
            position: 'middle',
          });
          toast.present();
          //alert("success " + JSON.stringify(response));
          //this.clearField();
          this.commonProvider.Loader.dismiss();
        }, err => {
          console.log("Error");
          this.commonProvider.Loader.dismiss();
        });
    }


  }

  clearField() {
    this.data = {
      title: '',
      description: '',
      budget: '',
      quantity: '',
      duration: ''
    };
    this.element = "Gold"
    this.carat = "9kt"
    this.yellow = false
    this.pink = false
    this.white = false
    this.docUri = ""
  }

  public detail() {

    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;

    var postdata = {
      userid: localStorage.getItem('userid'),
      action: 'user_detail'
    }
    //this.commonProvider = new CommonProvider(this.loadingCtrl);
    //this.commonProvider.Loader.present();
    var serialized_data = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_data, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response)
        this.fname = response.detail.fullname
        this.profileImage = response.detail.profilepicture
        //this.commonProvider.Loader.dismiss();
      }, err => {
        console.log("Error");
        //this.commonProvider.Loader.dismiss();
      });
  }

  public getJobDetail() {

    var url: string = this.variable.baseUrl + this.variable.GET_JOB_DETAIL;

    var postdata = {
      reqid: this.navparams.get('jobId'),
      action: 'job_detail'
    }
    this.commonProvider = new CommonProvider(this.loadingCtrl);
    this.commonProvider.Loader.present();
    var serialized_data = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_data, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response.data)
        console.log("editjob"+response.data)
        this.setData(response.data);
      }, err => {
        console.log("Error");
        this.commonProvider.Loader.dismiss();
      });
  }

  setData(response) {
   this.created=response[0].created;
    this.date = new Date(response[0].created);
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth() + 1;
    this.day = this.date.getDate()
    if (this.date.getDate() < 10) {
      this.day = '0' + this.day;
    }
    if (this.month < 10) {
      this.month = '0' + this.month;
    }

    this.today_date = this.day + "/" + this.month + "/" + this.year;

    this.data = {
      title: response[0].title,
      description: response[0].scriptolutiondesc,
      budget: parseFloat(response[0].scriptolutionprice),
      quantity: response[0].quantity,
      duration: response[0].scriptolutiondays,
      created: response[0].created
    };
    this.element = response[0].element
    console.log(this.element);
    this.carat = response[0].carat
    this.docUri = response[0].image

    if (this.docUri != "")
      this.fileSelected = 1;
    else
      this.fileSelected = 0;

   // alert('this.element ' + this.element)
    this.elemetChoosen();

    if (response[0].color.indexOf("yellow") !== -1) {
      this.yellow = true
    } else {
      this.yellow = false
    }
    if (response[0].color.includes("white")) {
      this.white = true
    } else {
      this.white = false
    }
    if (response[0].color.includes("pink")) {
      this.pink = true
    } else {
      this.pink = false
    }
    this.commonProvider.Loader.dismiss();
  }

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }
  remove_Post(){
    var url: string = this.variable.baseUrl + this.variable.REMOVE_UPLOAD;
    
        var postdata = {
          image_remove_id:this.navparams.get('jobId'),
        }
        //this.commonProvider = new CommonProvider(this.loadingCtrl);
        //this.commonProvider.Loader.present();
        var serialized_data = this.serializeObj(postdata);
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
            this.fileSelected = 0;
            this.docUri = "";
            this.showname="";
            Loading.dismiss()
          })
        })
  }
}
