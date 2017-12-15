import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams, Events, LoadingController,AlertController,ToastController,MenuController} from 'ionic-angular';
import { IonicPage, NavController,App, NavParams, Events, LoadingController,AlertController,ToastController,MenuController} from 'ionic-angular';
import { EditjobPage } from '../editjob/editjob';
import { HsdescriptionPage } from '../hsdescription/hsdescription';
import { WrkdescriptionPage } from '../wrkdescription/wrkdescription';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { SubmitproposalPage } from '../submitproposal/submitproposal';
import { ViewoffersPage } from '../viewoffers/viewoffers';
import { Viewoffers_historyPage } from '../viewoffers_history/viewoffers_history';
import { ChatPage } from '../chat/chat';
import { AcdescriptionPage } from '../Acdescription/Acdescription';
import { DatePipe } from '@angular/common';
import  moment from 'moment';
import { MomentModule } from 'angular2-moment';
import { Explore_profilePage } from '../Explore_profile/Explore_profile';
// import { MenuPage } from '../menu/menu';
// import { MenuPageModule } from '../menu/menu.module';
/**
 * Generated class for the Tab1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hstry_ofer',
  templateUrl: 'hstry_ofer.html',
})
export class Hstry_oferPage  {
  mydate: any;
  findwork_lenght: any;
  History_time: Date;
  format: string;
  date_format: string;
  find_work: Date;
  work_today: Date;
  showDate: number;
  find_work_time: any;
  currentTime: Date;
  today: any;
  hide: number;
  image_path: string;
  lenght_active: any;
  active_contracts: any;
  show_tabs: any;
  req_id: any;
  history_lenght: any;
  job_id: any;
  request_id: any;
  user_id;
  // history_details;
  public findWork = 0;
  i;
  find_work_details;
  pageno:number = 0;
  page_ct;
  find_work_lenght;
  history_page = 0;
  show_in;
  c_name;
  show_pages;
  public budget_price="";
  public hasMoreData = true;
  
  public items = [];
  public history_details = [];
public icons='findwork';
  // public loading = this.loadingCtrl.create({
  //   spinner: 'bubbles',
  //   showBackdrop: false,
  //   cssClass: 'loader'
  //   //content: '<div class="circles"></div>'
  // });
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public events: Events,
    private socialSharing: SocialSharing,
    public Cmn: CommonProvider,
    public variable: VariableProvider,
    public shared: SharedProvider,
    public loadingCtrl: LoadingController,
    private http: Http,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private datepipe: DatePipe,
    public menuCtrl: MenuController,
    public app: App,
    

    
  ) { 
    //alert("grover");
    this.show_tabs= this.navParams.get('id');
    
    // events.publish('user:login');
    this.user_id = localStorage.getItem('userid');
    this.image_path=this.variable.IMAGE_URL
    // if(this.show_tabs=="3"){
    //   alert(this.findWork);
    //   this.findWork=2;
    //  this.history(1)
    // }else{
    //   alert("bhunmika")
      // this.find_work_listing('','',1);
    // }
    this.history(1)
    
     this.currentTime = new Date();
     this.format = moment(this.currentTime).format('DD-MM-YYYY');
     console.log(this.format);
  //   alert(this.format);
   //  alert("bhumi");
  }
  regularShare(id) {
    this.request_id=id
   // alert(this.request_id);
    // share(message, subject, file, url)
    this.socialSharing.share("https://bowdaa.com/viewjob?REQID="+this.request_id);
  }

 

///////////////history////////////////////


  history(id) {
   
    console.log(id);
    this.findWork = 2;     //////use for show history div////////////
    this.show_in = 1;         //////use for history pagination////////////
   // alert(this.findWork);
    if(id==1){
      this.hasMoreData = true;
      this.history_page=1;
      this.history_details=[];
    }else{
      this.history_page++
    }
    var url: string = this.variable.baseUrl + this.variable.JOB_api;
    console.log(url);
    var history = {
      action: "my_offer_request",
      current_userid: this.user_id,
      page_number: this.history_page,
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
        console.log(resolve);
        Loading.dismiss();
        if (resolve.error == 0) {
          this.page_ct = resolve.page_count
          // this.history_details=resolve.job_req_data;
          //console.log(this.history_details);
          console.log(resolve.job_req_data);
          this.history_lenght=resolve.job_req_data.length;
          console.log(this.history_lenght);
          for (let data_history of resolve.job_req_data) {
           
        // data_history.creatededs=moment(this.History_time).format('DD-MM-YYYY');
            this.history_details.push(data_history);
            this.History_time= new Date(data_history.created);
            data_history.creatededs= this.History_time.getDate()+"-"+(this.History_time.getMonth()+1)+"-"+this.History_time.getFullYear();
            // console.log(data_history.created);
           // this.History_time=new Date(parseInt(data_history.created));
           // console.log(this.History_time);
           // console.log("huhududygfe");
            if (this.history_page == this.page_ct) {
              this.hasMoreData = false;
            }
          }
        }else{
        }
      })
    })
  }
  presentConfirm(id) {
this.job_id=id
    let alert = this.alertCtrl.create({
      //title: 'Confirm purchase',
      message: 'Are you sure you want to delete?',
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
            this.Delete_history_post() 
          }
        }
      ]
    });
    alert.present();
  }

  Delete_history_post() {
    this.history_page=1;
    this.show_in = 1;
    //alert(id);
    var url: string = this.variable.baseUrl + this.variable.JOB_api;
    ;
    console.log(url);
    var history = {
      action: "delete_job",
      jobid: this.job_id,
      userid: this.user_id,

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
        console.log(resolve);
        Loading.dismiss();
        if (resolve.error == 0) {
          this.history_details=[];
          let toast = this.toastCtrl.create({
            message:"Job successfully deleted!",
            duration: 2000,
           cssClass: 'toastCss',
            position: 'middle',
          });
          toast.present();

          var history = {
            action: "my_job_request",
            current_userid: this.user_id,
            page_number:this.history_page,
          }
          //this.loading.present();
          var serialized_data = this.Cmn.serializeObj(history);
          console.log(serialized_data)
      
          let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
          let options = new RequestOptions({ headers: headers });
          this.http.post(url, serialized_data, options)
          .map(res => res.json())
          .subscribe(resolve => {
            console.log(resolve);
            //Loading.dismiss();
            if (resolve.error == 0) {
              this.hasMoreData = true;
              this.page_ct = resolve.page_count
              // this.history_details=resolve.job_req_data;
              //console.log(this.history_details);
              for (let data_history of resolve.job_req_data) {
                this.history_details.push(data_history);
                // console.log();
                console.log("huhududygfe");
                console.log(this.history_page);
                if (this.history_page == this.page_ct) {
                  this.hasMoreData = false;
                }
              }
            }else{
            }
          })
         
        }else{

        }
      })
    })
  }
  /////////////////////////////////////////////////




  // public History_api() {
  //   this.history_page++
  //   var url: string = this.variable.baseUrl + this.variable.JOB_api;

  //   console.log(url);
  //   var history = {
  //     action: "my_job_request",
  //     current_userid: this.user_id,
  //     page_number: this.history_page,
  //   }
  //   //this.loading.present();
  //   var serialized_data = this.Cmn.serializeObj(history);
  //   console.log(serialized_data)

  //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
  //   let options = new RequestOptions({ headers: headers });
  //   var Loading = this.loadingCtrl.create({
  //     spinner: 'bubbles',
  //     showBackdrop: false,
  //     cssClass: 'loader'
  //       });
  //       Loading.present().then(() => {
  //   this.http.post(url, serialized_data, options)
  //     .map(res => res.json())
  //     .subscribe(resolve => {
  //       console.log(resolve);
  //       Loading.dismiss();
  //       if (resolve.error == 0) {
  //         this.page_ct = resolve.page_count
  //         // this.history_details=resolve.job_req_data;
  //         //console.log(this.history_details);
  //         for (let data_history of resolve.job_req_data) {
  //           this.history_details.push(data_history);
  //           // console.log();
  //           console.log("huhududygfe");
  //           if (this.history_page == this.page_ct) {
  //             this.hasMoreData = false;
  //           }
  //         }
  //       }else{
  //       }
  //     })
  //   })
  // }

  history_pagination(infiniteScroll: any) {
    this.show_in = 1;
    // alert("hudhsud")
   this.history(0)
   setTimeout(() => {
    infiniteScroll.complete()
    if (this.history_page == this.page_ct) {
      // alert("udygyudgy");
      this.hasMoreData = false;
    }else{
      this.hasMoreData = true;
    }
  },500)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad history_offerPage');
   
  }

  editjobPage(history_view){
    console.log(history_view.REQUESTID);
      this.navCtrl.push(EditjobPage, { jobId: history_view.REQUESTID });
    }

  hsdescriptionPage(req_id) {
    localStorage.setItem('his_id', req_id);
    this.navCtrl.push(HsdescriptionPage);
  }

  wrkdescriptionPage(id) {
    console.log(id);
    localStorage.setItem('iddd', id);
    this.navCtrl.push(WrkdescriptionPage,{
      request_id:id,
    });
  }

 
  
  submit_purposal() {
    this.navCtrl.push(SubmitproposalPage);
  }
  
  contract(){
    this.findWork = 1;
   
    var url: string = this.variable.baseUrl + this.variable.ACTIVE_CONTRACTS
    var postdata = {
      action: "active_contratcs",
      current_userid: this.user_id,
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
          if (resolve.error == 0) {
            this.active_contracts = resolve.data;
            this.lenght_active = this.active_contracts.length;
            console.log(this.lenght_active);
            console.log(this.active_contracts);
            // let total = 0;
            // for (let i = 0; i < this.earne_payments.length; i++) {
            //   total = total + parseInt(this.earne_payments[i].totalamount);
            //   this.earm_amount=total;
            // }
            // console.log(total);
          }
        })
    })
  }
  ViewoffersPage
  // views_offer(id){
  // // this.navCtrl.push(Viewoffers_historyPage,{
  // //   request_id:id,
  // // });
  // }
  views_offer(id){
  this.navCtrl.push(ViewoffersPage,{
    request_id:id,
  });
  }
  Chatting(id, name) {
    console.log(id,name)
    this.navCtrl.push(ChatPage, {
      other_user_id: id,
      username: name
    });
  }
 activePage(id) {
    localStorage.setItem('act_id', id);
    this.navCtrl.push(AcdescriptionPage);
  }


    private newFunction() {
        return this.today;
    }

    Explore_user_details(id) {
      this.navCtrl.push(Explore_profilePage, {
        user_details: id
      });
    }
    
   
    // toggleMenu() {
    // //  this.navCtrl.setRoot('MenuPageModule');
    //   this.navCtrl.push(MenuPageModule);
    // }
   
    
    }
