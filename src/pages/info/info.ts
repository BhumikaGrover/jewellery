import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeliverypolicyPage } from '../deliverypolicy/deliverypolicy';
import { RefundPage } from '../refund/refund';
import { TermsPage } from '../terms/terms';
import { PrivacyPage } from '../privacy/privacy';
import { PricingPage } from '../pricing/pricing';
import { AboutPage } from '../about/about';
import { FaqPage } from '../faq/faq';
import { Active_contractPage } from '../active_contract/active_contract';

/**
 * Generated class for the SpecialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

 deliveryPage(){
    this.navCtrl.push(DeliverypolicyPage);
  }

   refundPage(){
    this.navCtrl.push(RefundPage);
  }

 termsPage(){
    this.navCtrl.push(TermsPage);
  }

// privacyPage(){
//     this.navCtrl.push(Active_contractPage);
//   }

  pricingPage(){
    this.navCtrl.push(PricingPage);
  }

    aboutPage(){
    this.navCtrl.push(AboutPage);
  }

    faqPage(){
    this.navCtrl.push(FaqPage);
  }

}
