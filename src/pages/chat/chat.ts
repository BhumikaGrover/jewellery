import { Component, ViewChild ,ContentChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController,AlertController,Content, Platform,ToastController} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { AcdescriptionPage } from '../Acdescription/Acdescription';


/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})




export class ChatPage {
  image_url: string;
  bottom: any;
  @ViewChild(Content) content: Content;
  
  user_details: any;
  converstaion: any;
  show_send_button=0;
  file_id: string;
  showName: string;
  show: any;
  interval: any;
  myInput: any;
  user_name: any;
  other_user: any;
  image_path: any;
  myChat: any;
  Other_user_id: any;
  user_id: any;
  public data = '';
  fileSelected = 0;
  docUri = "";
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
    // public content:Content,
    private alertCtrl: AlertController,
    private fileChooser: FileChooser, 
    public platform: Platform, 
    private transfer: Transfer, 
    private androidPermissions: AndroidPermissions,
    private file: File,
    public events: Events,
    private toastCtrl: ToastController
    ) {
   
   this.image_url=this.variable.baseUrl;
    this.image_path=this.variable.IMAGE_URL
    console.log(this.navParams);
    this.Other_user_id =this.navParams.get('other_user_id');
    this.user_name =this.navParams.get('username');
    console.log(this.user_name);
    this.user_id=localStorage.getItem('userid')
    this.All_message();
    this.interval= setInterval(()=>{
  this.All_message_other_user();
  this.detail()
 // alert("md")
},5000)

 

  }
  public All_message() {
    var url: string = this.variable.baseUrl + this.variable.MESSAGE_CHATING;
    var postdata = {
      myid:this.user_id,
      action:'otochat',
      otherid:this.Other_user_id
    }
    var serialized_data = this.Cmn.serializeObj(postdata);
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
        .subscribe((response) => {
          console.log(response)
          Loading.dismiss();
          if(response.error==0){
            this.myChat=response.data;
         // alert(this.myChat.length);
           this.converstaion=this.myChat.length;
           console.log(this.converstaion);
            this.other_user=response.othermem[0].profilepicture;
            console.log(this.other_user);
            console.log("bhumika");
          }
        }) 
      })
    }

    sendmessage(mess){ 
      if (this.docUri == "")  {
      console.log(mess);
      this.myInput=mess
      var url: string = this.variable.baseUrl + this.variable.MESSAGE_CHATING;
      var postdata = {
        myid:this.user_id,
        action:'insert_message',
        otherid:this.Other_user_id,
        message:this.myInput,
        fid:0
      }
      var serialized_data = this.Cmn.serializeObj(postdata);
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
          .subscribe((response) => {
            console.log(response)
            if(response.error==0){
              this.myInput = '';
              var postdata = {
                myid:this.user_id,
                action:'otochat',
                otherid:this.Other_user_id
              }
              var serialized_data = this.Cmn.serializeObj(postdata);
              console.log(serialized_data)
              let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
              let options = new RequestOptions({ headers: headers });
            
           
                this.http.post(url, serialized_data, options)
                  .map(res => res.json())
                  .subscribe((response) => {
                    console.log(response)
                    Loading.dismiss();
                    if(response.error==0){
                      this.bottom=setInterval(()=>{
                        this.content.scrollToBottom(300);
                    },1000)
                   
                      this.myChat=response.data;
                       this.converstaion=this.myChat.length;
                      console.log(this.converstaion);
                      this.other_user=response.othermem[0].profilepicture;
                      console.log(this.other_user);
                      console.log("bhumika");
                    }
                  }) 
            }else{
              alert("something going wrong")
            }
          })
        })
      }else{
       
       // alert("bhumika"+mess);
        var url: string = this.variable.baseUrl + this.variable.MESSAGE_CHATING;
        if (mess != undefined) {
          this.myInput = mess
        }
        else {
          this.myInput = ""
        }
       // alert( this.myInput);
       // this.myInput=mess
        const fileTransfer: TransferObject = this.transfer.create();
        let currentName = this.docUri.substring(this.docUri.lastIndexOf('/') + 1);
        let options1: FileUploadOptions = {
          fileKey: 'file',
          fileName: currentName,
          headers: {},
          //mimeType:"application/pdf",
          params: {
            "action": "upload_doc", 
          },
          chunkedMode: false
        }
        var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          showBackdrop: false,
          cssClass: 'loader'
        });
        Loading.present().then(() => {
        fileTransfer.upload(this.docUri, url, options1)
        .then((dataa) => {
         // Loading.dismiss();
          //  console.log('data ' + JSON.stringify(data));
           //alert("success " + JSON.stringify(dataa));
           //alert(dataa.response);
         //  alert(JSON.parse(dataa.response))
           var test=JSON.parse(dataa.response);
           this.file_id=test.fid;
         //  alert(this.file_id);
       //  alert("Your job has been created successfully");
         //this.file_id= dataa.response.fid;
         //alert(this.file_id);
         var url: string = this.variable.baseUrl + this.variable.MESSAGE_CHATING;
         var postdata = {
           myid:this.user_id,
           action:'insert_message',
           otherid:this.Other_user_id,
           message:this.myInput,
           fid: this.file_id,
         }
         var serialized_data = this.Cmn.serializeObj(postdata);
        // alert(serialized_data);
         console.log(serialized_data)
        
       //  alert(serialized_data);
         let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
         let options = new RequestOptions({ headers: headers });
           this.http.post(url, serialized_data, options)
             .map(res => res.json())
             .subscribe((response) => {
               console.log(response)
               Loading.dismiss();
               this.fileSelected = 0;
               this.myInput = '';
               this.docUri = '';
               this.file_id='';
               this.bottom=setInterval(()=>{
                this.content.scrollToBottom(300);
            },1000)
             //  alert(response);
            //   alert("success " + JSON.stringify(response));
           //   alert("bhumika");

             })
          })
        .catch((error)=>{
          Loading.dismiss();
              alert("error" + JSON.stringify(error));
         });
      });
    }
  }
  All_message_other_user(){
    clearInterval(this.bottom);
    var url: string = this.variable.baseUrl + this.variable.MESSAGE_CHATING;
    var postdata = {
      myid:this.user_id,
      action:'otochat',
      otherid:this.Other_user_id
    }
    var serialized_data = this.Cmn.serializeObj(postdata);
    console.log(serialized_data)
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
      this.http.post(url, serialized_data, options)
        .map(res => res.json())
        .subscribe((response) => {
          console.log(response)
          if(response.error==0){
            this.myChat=response.data;
            this.other_user=response.othermem[0].profilepicture;
            console.log(this.other_user);
            console.log("bhumika");
          }
        }) 
      }
    
     
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.bottom=setInterval(()=>{
      this.content.scrollToBottom(300);
  },1000)

  }
  // ionViewDidEnter() {
  //   setTimeout(() => {
  //          console.log("jisi")
  //         this.content.scrollToBottom(300);
  //       }, 1000)
  // }

  ionViewWillLeave() {
    this.events.publish('6', 'postjob');
    clearInterval(this.interval);
    clearInterval(this.bottom);
    console.log("Looks like I'm about to leave :(");
  }
 

  browseAttachment() {
  // alert("hcfdcuhnvcu")
    if (this.platform.is('android')) {
      //alert("my");
      this.chooseFileAndroid();
    } else if (this.platform.is('ios')) {
      this.chooseFileIOS();
    } else {
    }
  }
  chooseFileAndroid() {
  //  alert("grover");
    var hh=this;
    this.fileChooser.open()
      .then(uri => {
        this.checkPermission(uri)
     //   alert(uri)
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
           // alert('result ' + result)
            this.fileSelected = 1;
            this.docUri = result;
            this.show= result;
           this.showName = this.docUri.substring(this.show.lastIndexOf('/') + 1);
           //  alert(this.docUri);
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
            //  alert('result ' + result)
              this.fileSelected = 1;
              this.docUri = result;
              this.show= result;
              this.showName = this.docUri.substring(this.show.lastIndexOf('/') + 1);
            }, error => {
            //  alert(error);
            })
          } catch (error) {
           // alert(error);
          }
      },err=> alert('Please give the storage permissions'));
    }
   
    ///////////?Download filles/////////////
    // download(filename){
    //   this.docUri=filename;
    //     if (this.platform.is('android')) {
    //       this.loading.present();
    //       this.createDirectory();
    //     } else if (this.platform.is('ios')) {
    //       this.downlaodIOSFile();
    //     }
    // }
    download(filename){
      this.docUri=filename;
        if (this.platform.is('android')) {
     this.loading=this.loadingCtrl.create({
     spinner: 'bubbles',
    showBackdrop: false,
    cssClass: 'loader'
    })
          //this.loading.present();
          this.createDirectory();
        } else if (this.platform.is('ios')) {
          this.downlaodIOSFile();
        }
    }
    createDirectory() {
      this.loading.present();
       this.file.checkDir(this.file.externalRootDirectory, 'bowdaa').then(_ => {
         this.down_checkPermission();
       })
         .catch(err => {
           this.file.createDir(this.file.externalRootDirectory, 'bowdaa', false).then(res => {
             this.down_checkPermission();
           }), err => {
           }
         })
     }
     downloadAndroidFile() {
      this.loading.present();
       //alert("download");
       const url = this.variable.MESSAGE_DOC_DOWNLOAD + this.docUri;
     //alert(url);
       const fileTransfer: TransferObject = this.transfer.create();
       var options = {};
       fileTransfer.download(url, this.file.externalRootDirectory + "/bowdaa/" + this.docUri, true, options).then((entry) => {
         this.loading.dismiss();
        // alert("Download Completed! ")
         this.docUri='';
         let toast = this.toastCtrl.create({
          message:"Download Completed!",
          duration: 3000,
         cssClass: 'toastCss',
          position: 'middle',
        });
        toast.present();
       }, (error) => {
         this.loading.dismiss();
         alert('error error' + JSON.stringify(error))
        // alert('error error' + error);
       });
     }
     downlaodIOSFile() {
      const url = this.variable.MESSAGE_DOC_DOWNLOAD + this.docUri;
      const fileTransfer: TransferObject = this.transfer.create();
      var options = {};
      fileTransfer.download(url,this.file.documentsDirectory + this.docUri, true, options).then((entry) => {
     // alert("Download Completed! ")

      }, (error) => {
        //alert('error error' + JSON.stringify(error))
      });
    }
   down_checkPermission() {
    this.loading.present();
     // alert("duyh")
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
        success =>  this.downloadAndroidFile(),
        err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
      );
      
      this.androidPermissions.requestPermissions(
        [this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]).then(suucess=>{
         // this.downloadAndroidFile();
        },err=> alert('Please give the storage permissions'));
      }
  public detail() {
        var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
        var postdata = {
          userid:this.Other_user_id,
          action: 'user_detail'
        }
        var serialized_data = this.Cmn.serializeObj(postdata);
        console.log(serialized_data);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(url, serialized_data, options)
          .map(res => res.json())
          .subscribe((response) => {
            console.log(response)
            this.user_details = response.detail
            console.log(this.user_details);
          })
        }
        findWork(id){
            localStorage.setItem('act_id', id);
            this.navCtrl.push(AcdescriptionPage);
    }
}

