import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExplorelistPage } from '../explorelist/explorelist';

/**
 * Generated class for the Tab4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tab4',
  templateUrl: 'tab4.html',
})
export class Tab4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab4Page');
  }

 explorelistPage(role){
   console.log(role);
   localStorage.setItem('explore_role', role);
    this.navCtrl.push(ExplorelistPage);
  }

}
