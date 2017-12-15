import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController,AlertController  } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the Tab2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  interval: number;
  message_count: any;
  chatting_length: any;
  no_found: any;
  image_path: any;
  chatting_listing: any;
  user_id: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public Cmn: CommonProvider,
    public variable: VariableProvider,
    public shared: SharedProvider,
    public loadingCtrl: LoadingController,
    private http: Http,
    private alertCtrl: AlertController,
    public events : Events
  ) {
    // this.interval= setInterval(()=>{
    //   this.Message_module()
    //  // alert("md")
    // },5000)
    this.user_id=localStorage.getItem('userid');
    // this.events.subscribe('tab-t0-1', (data)=>{
    //   this.All_message();
    //    alert('working')
    //  })
    
     this.events.subscribe('6', (data)=>{
      this.All_message();
    })
   
  }
  public All_message() {
    var url: string = this.variable.baseUrl + this.variable.MESSAGE_CHATING;
    var postdata = {
      userid:this.user_id,
      action:'allchat'
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
         this.chatting_length=response.error;
         console.log(this.chatting_length);
          if (response.error == 0) {
            Loading.dismiss();
            this.chatting_listing = response.data;
            console.log(this.chatting_listing);
            this.image_path=response.profilefolder;
            this.no_found=response.defaultimage;
          }else {
            Loading.dismiss();
          }
        }) 
      })
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
    this.events.subscribe('tab-t0-1', (data)=>{
      console.log(this.navCtrl.canGoBack())
      if(this.navCtrl.canGoBack() == true){
        this.navCtrl.popToRoot()
      } 
      this.All_message();
       //alert('working')
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



}
