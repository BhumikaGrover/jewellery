import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FindworkPage } from '../findwork/findwork';
import { HistoryPage } from '../history/history';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-active_contract',
  templateUrl: 'active_contract.html',
})
export class  Active_contractPage {
  msg_show: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.msg_show = this.navParams.get('msg');
    console.log( this.msg_show);
  }

 find_do(){
this.navCtrl.push(MenuPage);
}

actve_do(){
   this.navCtrl.push(Active_contractPage);
 }

  hstry_done(){
this.navCtrl.push(HistoryPage);
 }

}
