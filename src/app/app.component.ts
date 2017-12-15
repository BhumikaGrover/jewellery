import { Component } from '@angular/core';
import { Platform,MenuController ,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EditjobPage } from '../pages/editjob/editjob';
import { HsdescriptionPage } from '../pages/hsdescription/hsdescription';
import { ViewoffersPage } from '../pages/viewoffers/viewoffers';
import { Viewoffers_historyPage } from '../pages/viewoffers_history/viewoffers_history';
import { WrkdescriptionPage } from '../pages/wrkdescription/wrkdescription';
import { SubmitproposalPage } from '../pages/submitproposal/submitproposal';
import { ModalPage } from '../pages/modal/modal';
import { ModalbPage } from '../pages/modalb/modalb';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpwPage } from '../pages/forgotpw/forgotpw';
import { ExplorelistPage } from '../pages/explorelist/explorelist';
import { PaymentsearnPage } from '../pages/paymentsearn/paymentsearn';
import { ChatPage } from '../pages/chat/chat';
import { BlogdescPage } from '../pages/blogdesc/blogdesc';
import { DeliverypolicyPage } from '../pages/deliverypolicy/deliverypolicy';
import { RefundPage } from '../pages/refund/refund';
import { TermsPage } from '../pages/terms/terms';
import { PrivacyPage } from '../pages/privacy/privacy';
// import { MenuPageModule } from '../pages/menu/menu.module';
import { PricingPage } from '../pages/pricing/pricing';
import { AboutPage } from '../pages/about/about';
import { FaqPage } from '../pages/faq/faq';
import { VerficationPage } from '../pages/Verfication/Verfication';
import { ChangepwPage } from '../pages/changepw/changepw';
import { LoginPage } from '../pages/login/login';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { PostjobPage } from '../pages/postjob/postjob';
import { PaymentsPage } from '../pages/payments/payments';
import { EditfacebookPage } from '../pages/editfacebook/editfacebook';
import { SharedProvider } from '../providers/shared/shared';
import { CommonProvider } from '../providers/common/common';
import { VariableProvider } from '../providers/variable/variable';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Http,Headers,RequestOptions} from '@angular/http';
import { NavController,Events } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { File } from '@ionic-native/file';
import { ContactusPage } from '../pages/contactus/contactus';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { PostjobPage } from '../pages/postjob/postjob';
import { FindworkPage } from '../pages/findwork/findwork';
import { Active_contractPage } from '../pages/active_contract/active_contract';
import { HistoryPage } from '../pages/history/history';
import { Explore_profilePage } from '../pages/Explore_profile/Explore_profile';
import { Modal_restrPage } from '../pages/modal_restr/modal_restr';
import { Modal_popupPage } from '../pages/modal_popup/modal_popup';
import { Modal_shippingPage } from '../pages/modal_shipping/modal_shipping';
import {TabsPage} from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { Hstry_oferPage } from '../pages/hstry_ofer/hstry_ofer';
//declare var Connection: any;
//declare var navigator: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  network: number;
   rootPage:any = LoginPage;

 // rootPage:any;
  fname;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private fb: Facebook,
    private http: Http,
    public variable:VariableProvider,
    public Cmn:CommonProvider,
    public events: Events,
    private menu: MenuController,
     public alertCtrl: AlertController,
  ) {
   
   
  }
   ngOnInit(){
     return new Promise(resolve=>{
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.rootPage=localStorage.getItem('userid')!=null ? MenuPage:LoginPage;
       // alert(localStorage.getItem('userid'));
        this.menu.swipeEnable(true, 'menu1');
        this.splashScreen.hide();
       
        // this.detail();
        // this.events.subscribe('user:login', () => {
        //   this.checkNetwork()
        // });
        this.platform.registerBackButtonAction(() => {
                this.showConfirm();
              //  navigator['app'].exitApp();                
            });
      });
       
    
   })
   }
  public detail() {
    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
    var postdata = {
      userid: localStorage.getItem('userid'),
      action: 'user_detail'
    }
    var serialized_data = this.Cmn.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_data, options)
      .map(res => res.json())
      .subscribe((response) => {
        if(response.error==0){
        console.log(response)
        this.fname = response.detail.fullname
        console.log(this.fname);
        }
      })
    }

    public Message_module() {
      var url: string = this.variable.baseUrl + this.variable.MESSAGE_CHATING;
      var postdata = {
        userid: localStorage.getItem('userid'),
        action: 'unreadmessage'
      }
      var serialized_data = this.Cmn.serializeObj(postdata);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(url, serialized_data, options)
        .map(res => res.json())
        .subscribe((response) => {
          console.log(response)
          console.log("bhumika_grover");
        })
      }
    
  showConfirm() {
    let confirm = this.alertCtrl.create({
       title: '<div style="text-align:center" class="ops">Exit?</div>',
       message: 'Do you want to exit the app?',
       buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Exit',
          handler: () => {
            console.log('Agree clicked');
             navigator['app'].exitApp(); 
          }
        }
      ]
    });
    confirm.present();
  }

//   checkNetwork() {
//     this.platform.ready().then(() => {
//         var networkState = navigator.connection.type;
//         var states = {};
//         states[Connection.UNKNOWN]  = 'Unknown connection';
//         states[Connection.ETHERNET] = 'Ethernet connection';
//         states[Connection.WIFI]     = 'WiFi connection';
//         states[Connection.CELL_2G]  = 'Cell 2G connection';
//         states[Connection.CELL_3G]  = 'Cell 3G connection';
//         states[Connection.CELL_4G]  = 'Cell 4G connection';
//         states[Connection.CELL]     = 'Cell generic connection';
//         states[Connection.NONE]     = '0';
//         alert(states[networkState]);
//         if(states[networkState]== 0){
//           this.network=9;
//           alert(this.network);
//         }
//         // let alert = Alert.create({
//         //     title: "Connection Status",
//         //     subTitle: states[networkState],
//         //     buttons: ["OK"]
//         // });
//         // this.navCtrl.present(alert);
//     });
// }
}

