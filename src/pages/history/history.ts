import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FindworkPage } from '../findwork/findwork';
import { Active_contractPage } from '../active_contract/active_contract';


/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 find_do(){
this.navCtrl.push(FindworkPage);
}

actve_do(){
   this.navCtrl.push(Active_contractPage);
 }

  hstry_done(){
this.navCtrl.push(HistoryPage);
 }
}
