import { PageInterface } from './menu';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav ,ViewController,Events, App,MenuController,Platform} from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { ChangepwPage } from '../changepw/changepw';
import { EditprofilePage } from '../editprofile/editprofile';
import { PostjobPage } from '../postjob/postjob';
import { PaymentsPage } from '../payments/payments';
import {Http,Headers,RequestOptions} from '@angular/http';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { SharedProvider } from '../../providers/shared/shared';
import { ContactusPage } from '../contactus/contactus';
import { InfoPage } from '../info/info';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';
import { LoginPage } from '../login/login';
import { Hstry_oferPage } from '../hstry_ofer/hstry_ofer';
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  message_count: any;
  profile: any;
  fname: any;
  SigninPage;
  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  // pages: PageInterface[] = [
  //   { title: 'Tab 1', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
  //   { title: 'Tab 2', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts' },
  //   { title: 'Tab 3', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'contacts' },
  //   { title: 'Special', pageName: 'SpecialPage', icon: 'home' },
  //   { title: 'Change Password', pageName: 'ChangepwPage', icon: 'home' },
  //   { title: 'Edit Profile', pageName: 'EditprofilePage', icon: 'home' },
  //   { title: 'Post Job', pageName: 'PostjobPage', icon: 'home' },
  //   { title: 'Payments', pageName: 'PaymentsPage', icon: 'home' },
  //   { title: 'Contact Us', pageName: 'ContactusPage', icon: 'home' },
  //   { title: 'Info', pageName: 'InfoPage', icon: 'home' },
  //   { title: 'Signout', pageName: 'SigninPage', icon: 'home', },
  // ]

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
     { title: 'Message', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts' },
    // { title: 'Tab 3', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'contacts' },
    // { title: 'Special', pageName: 'SpecialPage', icon: 'home' },
    // { title: 'Change Password', pageName: 'ChangepwPage', icon: 'home' },
    // { title: 'Edit Profile', pageName: 'EditprofilePage', icon: 'home' },
    // { title: 'Post Job', pageName: 'PostjobPage', icon: 'home' },
    // { title: 'Payments', pageName: 'PaymentsPage', icon: 'home' },
    // { title: 'Contact Us', pageName: 'ContactusPage', icon: 'home' },
    // { title: 'Info', pageName: 'InfoPage', icon: 'home' },
    // { title: 'Signout', pageName: 'SigninPage', icon: 'home', },
  ]
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http:Http,
     public variable:VariableProvider,
    public Cmn:CommonProvider,
    public shared: SharedProvider,
    private fb: Facebook,
    public viewCtrl:  ViewController,
    public events: Events,
    public app: App,
    public menu: MenuController,
    
  ) {
   this.detail();
   this.Message_module();
   this.events.subscribe('7', (data)=>{
     console.log("bhumika")
    
  this.detail();
    })
  }
  signout() {
    console.log(localStorage.getItem('simple_suserid'))
    if(localStorage.getItem('simple_suserid')){
      console.log("simple")
     // alert("bhumika");
      localStorage.clear();
     this.navCtrl.push(LoginPage) 
      // .then(() => {
      //     const index = this.navCtrl.getActive().index;
      //      this.navCtrl.remove(0, index);
      //    });
    }else{
      console.log(localStorage.getItem('facebook'))
      console.log("facebook");
     this.fb.logout().then((sucess) => {
     // alert("gydsaty");
      localStorage.clear();
     // alert(sucess)
      this.navCtrl.push(LoginPage)
    }).catch((error) => {
     // alert(error);
       console.log(error)
    })
  }
} 



home_menu(){
this.events.publish('3', 'postjob');

 this.viewCtrl.dismiss();
 this.navCtrl.push(MenuPage);
}

// msgtab(pages: PageInterface){
//   console.log(pages)
//    this.menu.close();
//    this.nav.setRoot(pages[0].tabComponent, { tabIndex: pages[0].index });

//   // let nav = this.app.getRootNav();
//   // nav.push(Tab2Page);
// }




// signout(){
//   localStorage.clear();
// this.fb.logout().then(

// )  
// //this.navCtrl.push(SigninPage)
// }
changepaww(){
this.navCtrl.push(ChangepwPage)
}
editinfo(){
this.navCtrl.push(EditprofilePage)
}
postjob(){
this.navCtrl.push(PostjobPage)
}
contact_us(){
  this.navCtrl.push(ContactusPage)
  }
info(){
    this.navCtrl.push(InfoPage)
    }
payments(){
  this.navCtrl.push(PaymentsPage)
  }
  hstr_ofr(){
    this.navCtrl.push(Hstry_oferPage)
  }
  openPage(page: PageInterface) {
// alert("open page")
    let params = {};

   // return false;
   

    if (page.index) {
      console.log(page.index);
      params = { tabIndex: page.index};
    }else{
      this.events.publish('tab-t0-0', 'postjob');
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
        this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }



  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
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
        console.log(response)
         if(response.error==0){
        console.log(response)
        this.fname = response.detail.fullname
        console.log(this.fname);
         this.profile = response.detail.profilepicture;
        }
       })
  }
public Message_module(){
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
      this.message_count=response;
      console.log(this.message_count);
      console.log("bhumika_grover");
    })
  }

}

