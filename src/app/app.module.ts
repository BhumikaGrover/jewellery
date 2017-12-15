import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler,LoadingController, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EditjobPage } from '../pages/editjob/editjob';
import { HsdescriptionPage } from '../pages/hsdescription/hsdescription';
import { AcdescriptionPage } from '../pages/Acdescription/Acdescription';
import { ViewoffersPage } from '../pages/viewoffers/viewoffers';
import { Viewoffers_historyPage } from '../pages/viewoffers_history/viewoffers_history';
import { WrkdescriptionPage } from '../pages/wrkdescription/wrkdescription';
import { SubmitproposalPage } from '../pages/submitproposal/submitproposal';
import { ModalPage } from '../pages/modal/modal';
import { ModalbPage } from '../pages/modalb/modalb';
import { SigninPage } from '../pages/signin/signin';
import { EditfacebookPage } from '../pages/editfacebook/editfacebook';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpwPage } from '../pages/forgotpw/forgotpw';

import { PaymentsearnPage } from '../pages/paymentsearn/paymentsearn';
import { ExplorelistPage } from '../pages/explorelist/explorelist';
 import { MenuPageModule } from '../pages/menu/menu.module';
import { ChatPage } from '../pages/chat/chat';
import { BlogdescPage } from '../pages/blogdesc/blogdesc';
import { DeliverypolicyPage } from '../pages/deliverypolicy/deliverypolicy';
import { RefundPage } from '../pages/refund/refund';
import { TermsPage } from '../pages/terms/terms';
import { ContactusPage } from '../pages/contactus/contactus';
import { PrivacyPage } from '../pages/privacy/privacy';
import { PricingPage } from '../pages/pricing/pricing';
import { HistoryPage } from '../pages/history/history';
import { AboutPage } from '../pages/about/about';
import { ChangepwPage } from '../pages/changepw/changepw';
import { FaqPage } from '../pages/faq/faq';
import { LoginPage } from '../pages/login/login';
import { VerficationPage } from '../pages/Verfication/Verfication';
import { SharedProvider } from '../providers/shared/shared';
import { CommonProvider } from '../providers/common/common';
import { VariableProvider } from '../providers/variable/variable';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operators/map';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { CameraOptions } from '@ionic-native/camera';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { PostjobPage } from '../pages/postjob/postjob';
import { PaymentsPage } from '../pages/payments/payments';
import { Camera } from '@ionic-native/camera';
import { GalleryPage } from '../pages/gallery/gallery';
import { NavController,Events } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Modal_shippingPage } from '../pages/modal_shipping/modal_shipping';

import { MyApp } from './app.component';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { File } from '@ionic-native/file';
import { InfoPage } from '../pages/info/info';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FindworkPage } from '../pages/findwork/findwork';
import { Active_contractPage } from '../pages/active_contract/active_contract';

import { Explore_profilePage } from '../pages/Explore_profile/Explore_profile';
import { Ionic2RatingModule } from 'ionic2-rating';
import { Modal_restrPage } from '../pages/modal_restr/modal_restr';
import { Modal_popupPage } from '../pages/modal_popup/modal_popup';
import { DatePipe } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { IonicImageViewerModule } from 'ionic-img-viewer';
//import {TabsPage} from '../pages/tabs/tabs';
 import { MenuPage } from '../pages/menu/menu';
 import { Hstry_oferPage } from '../pages/hstry_ofer/hstry_ofer';


@NgModule({
  declarations: [
    MyApp,
    EditjobPage,
    HsdescriptionPage,
    ViewoffersPage,
    WrkdescriptionPage,
    SubmitproposalPage,
    ModalPage,
    SigninPage,
    SignupPage,
    ForgotpwPage,
    ExplorelistPage,
    ModalbPage,
    PaymentsearnPage,
    ChatPage,
    BlogdescPage,
    DeliverypolicyPage,
    RefundPage,
    TermsPage,
    PrivacyPage,
    PricingPage,
    AboutPage,
    FaqPage,
    VerficationPage,
   // MenuPage,
    EditfacebookPage,
    ChangepwPage,
    EditprofilePage,
    PostjobPage,
    PaymentsPage,
    GalleryPage,
    ContactusPage,
    InfoPage,
    FindworkPage,
    Active_contractPage,
    HistoryPage,
    Viewoffers_historyPage,
    Explore_profilePage,
    AcdescriptionPage,
    Modal_restrPage,
    Modal_popupPage,
    Modal_shippingPage ,
    //TabsPage,
    LoginPage,
    Hstry_oferPage

    

   

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    MomentModule,
    IonicImageViewerModule,
     MenuPageModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditjobPage,
    HsdescriptionPage,
    ViewoffersPage,
    WrkdescriptionPage,
    SubmitproposalPage,
    ModalPage,
    SigninPage,
    SignupPage,
    ForgotpwPage,
    ExplorelistPage,
    ModalbPage,
    PaymentsearnPage,
    ChatPage,
    BlogdescPage,
    DeliverypolicyPage,
    RefundPage,
    TermsPage,
    PrivacyPage,
    PricingPage,
    AboutPage,
    FaqPage,
    VerficationPage,
   // MenuPage,
    EditfacebookPage,
    ChangepwPage,
    EditprofilePage,
    PostjobPage,
    PaymentsPage,
    GalleryPage,
    ContactusPage,
    InfoPage,FindworkPage,
    Active_contractPage,
    HistoryPage,
    Viewoffers_historyPage,
    Explore_profilePage,
    AcdescriptionPage,
    Modal_restrPage,
    Modal_popupPage,
    Modal_shippingPage,
   // TabsPage,
    LoginPage,
    Hstry_oferPage
    
    
  
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Camera,
    SocialSharing,
    Transfer,
    FileChooser,
    AndroidPermissions,
    File,
    InAppBrowser,
    
    {
      provide: ErrorHandler, useClass: IonicErrorHandler
    },
    SharedProvider,
    CommonProvider,
    VariableProvider,
    DatePipe,
  ]
})
export class AppModule {}
