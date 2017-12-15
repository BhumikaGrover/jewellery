import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController,Platform,ToastController,AlertController,MenuController} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { PaymentsearnPage } from '../paymentsearn/paymentsearn';
import { ViewoffersPage } from '../viewoffers/viewoffers';
import { MenuPage } from '../menu/menu';
/**
 * Generated class for the SpecialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {
  totalvbhghg(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  total_amount: any;
  total: number;
  lenght_release: any;
  release_payments: any;
  user_id: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public Cmn: CommonProvider,
    public variable: VariableProvider,
    public shared: SharedProvider,
    public loadingCtrl: LoadingController,
    private http: Http,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public platform: Platform,
    private menu: MenuController,
    ) {
      this.user_id = localStorage.getItem('userid');
      this.Release_payments();
  }
  Release_payments() {

    var url: string = this.variable.baseUrl + this.variable.ACTIVE_CONTRACTS
    var postdata = {
      action: "released",
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
            this.release_payments = resolve.data;
            this.lenght_release = this.release_payments.length;
            console.log(this.lenght_release);
            console.log(this.release_payments);
            let total = 0;
            console.log(total);
            for (let i = 0; i < this.release_payments.length; i++) {
              if(this.release_payments[i].totalamount != null){
              console.log(this.release_payments[i].totalamount);
              total = total + parseInt(this.release_payments[i].totalamount);
              this.total_amount=total
              }
            }
            console.log(total);
            console.log( this.total_amount);
            // this.platform.registerBackButtonAction(() => {
            //   this.navCtrl.push(MenuPage);
            //   this.menu.swipeEnable(false, 'menu1');
            // })
          }
        })
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialPage');
  }

 earnPage(){
    this.navCtrl.push(PaymentsearnPage);
  }

  view_offers(id){
   // alert("start");
    this.navCtrl.push(ViewoffersPage,
    {
      request_id:id
    });
  }
}
