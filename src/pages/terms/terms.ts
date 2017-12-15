import { Component } from '@angular/core';
import { NavController, NavParams ,LoadingController} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the TermsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
  terms: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public loadingCtrl:LoadingController,
    public shared: SharedProvider,
    private http:Http,
    public Cmn:CommonProvider,
    public variable:VariableProvider)
    {
      this.terms_condition()
  }
  terms_condition(){
    var url:string = this.variable.baseUrl + this.variable.STATIC_PAGES_API;
    var static_page={
      action:"static_page",
      type:"terms_of_service",
    }
      var serialized_data = this.Cmn.serializeObj(static_page);
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
          if(resolve.error==0){
            this.terms=resolve.data;
            console.log(this.terms);
          }else{
  
          }
        })
      })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

}
