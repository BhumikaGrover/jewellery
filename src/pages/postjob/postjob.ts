import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform ,ToastController,ViewController,Events} from 'ionic-angular';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { CommonProvider } from '../../providers/common/common';
import { LoadingController } from 'ionic-angular';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { MenuPage } from '../menu/menu';
import {Tab1Page} from '../tab1/tab1';


/**
 * Generated class for the PostjobPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-postjob',
  templateUrl: 'postjob.html',
})
export class PostjobPage {
  findWork: number;
  showname: string;
  elementType = ""
  elementType1 = ""
  elementType2 = ""
  elementType3 = ""
  yellow: boolean
  pink: boolean
  white: boolean
  date
  date1
  day
  month
  year
  today_date
  public data: any = '';
  docUri = "";
  fname = ''
  profileImage = "assets/images/a.jpg"
  colorVisible = 1
  caratVisible = 1
  fileSelected = 0

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

  constructor(private androidPermissions: AndroidPermissions,
    private http: Http, 
    public variable: VariableProvider, 
    public platform: Platform, 
    private transfer: Transfer, 
    public loadingCtrl: LoadingController, 
    public commonProvider: CommonProvider, 
    private fileChooser: FileChooser, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController,
    public viewCtrl:  ViewController,
    public events: Events
  ) {
    

    this.date = new Date();
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

    this.detail();
  }

  checkPermission(uri) {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      success => {
        try {
          (<any>window).FilePath.resolveNativePath(uri, (result) => {
          //  alert('result ' + result)
            this.fileSelected = 1;
            this.docUri = result;
          }, error => {
           // alert("hdbh"+error);
          })
        } catch (error) {
        //  alert(error);
        }
      },
      err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );
    
    this.androidPermissions.requestPermissions(
      [this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]).then(suucess=>{
        try {
            (<any>window).FilePath.resolveNativePath(uri, (result) => {
            //  alert('result ' + result)
              this.fileSelected = 1;
              this.docUri = result;
              this.showname=this.docUri.substring(this.docUri.lastIndexOf('/') + 1);
            }, error => {
             // alert("sdyhuydf"+error);
            })
          } catch (error) {
           //alert(error);
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
      delete this.carat
      this.colorVisible = 1
      this.caratVisible = 1
    }
    console.log(this.element);
  }

  browseAttachment() {
    //alert("open");
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

  callAPIToPostJob(alldata) {
    if (this.docUri == "") { //if no attachment
      var url: string = this.variable.baseUrl + this.variable.POST_JOB
      var postdata = {
        "action": "new_job", 
        "title": alldata.value.title,
        "description": alldata.value.description,
        "price": alldata.value.budget,
        "dilivery_day": alldata.value.duration,
        "userid": localStorage.getItem('userid'),
        "quantity": alldata.value.quantity,
        "kt": this.carat,
        "color": this.elementType,
        "element": this.element,
      }
      this.commonProvider = new CommonProvider(this.loadingCtrl);
    //  this.commonProvider.Loader.present();
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
          Loading.dismiss();
          console.log(response);
          console.log('data ' + JSON.stringify(response));
          //this.clearField();
          if(response.error==0){
          let toast = this.toastCtrl.create({
            message:"Your job has been created successfully",
            duration: 3000,
           cssClass: 'toastCss',
            position: 'middle',
          });
          toast.present();
        //  localStorage.setItem('id', '3');
            this.events.publish('3', 'postjob');
            this.findWork=2;
           this.viewCtrl.dismiss();
        //  this.navCtrl.pop(Tab1Page);
         // alert("Your job has been created successfully");
          // this.navCtrl.push(Tab1Page,{
          //   id:"3"
          // })
          // or can exit from this page
        }
        }, err => {
          console.log("Error");
          Loading.dismiss();
        //  this.commonProvider.Loader.dismiss();
        });
      })
    } else {
    //  alert('file name ' + this.docUri);
      const fileTransfer: TransferObject = this.transfer.create();
      let currentName = this.docUri.substring(this.docUri.lastIndexOf('/') + 1);
    //  alert('currentName ' + currentName);
      let options1: FileUploadOptions = {
        fileKey: 'image',
        fileName: currentName,
        headers: {},
        //mimeType:"application/pdf",
        params: {
          "action": "new_job", 
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
      //alert('data '+options1);
      this.commonProvider = new CommonProvider(this.loadingCtrl);
    //  this.commonProvider.Loader.present();
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
        });
        Loading.present().then(() => {
      fileTransfer.upload(this.docUri, this.variable.baseUrl + this.variable.POST_JOB, options1)
      .then((data) => {
          console.log('data ' + JSON.stringify(data));
         // alert('data ' + JSON.stringify(data));
          Loading.present()
          this.clearField();
          let toast = this.toastCtrl.create({
            message:"Your job has been created successfully",
            duration: 3000,
           cssClass: 'toastCss',
            position: 'middle',
          });
          toast.present();
       //   alert("success " + JSON.stringify(data));
       this.events.publish('3', 'postjob');
       this.findWork=2;
        this.viewCtrl.dismiss();
      // alert("Your job has been created successfully");
          this.clearField(); // or can exit from this page
        }).catch((error)=>{
          Loading.dismiss()
          alert("error" + JSON.stringify(error));
           
       });
      })

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
    this.fileSelected = 0;
    this.commonProvider.Loader.dismiss();
  }

  public detail() {

    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;

    var postdata = {
      userid: localStorage.getItem('userid'),
      action: 'user_detail'
    }

    var serialized_data = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_data, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log('res is ' + response)
        this.fname = response.detail.fullname
        this.profileImage = response.detail.profilepicture
        console.log(this.fname);
      })
  }
  remove_Post(){
  //  alert("fgffg")
    this.fileSelected = 0;
    this.docUri = ""
    this.showname=""
    console.log(this.docUri);
  }
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }

my_request(){
  this.events.publish('3', 'postjob');
   this.viewCtrl.dismiss();
}

}
