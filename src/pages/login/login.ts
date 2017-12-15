
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';

 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
 
  doLogin() {
    this.navCtrl.setRoot('MenuPage');
  }

  signinPage(){
    this.navCtrl.push(SigninPage);
  }
 
}
