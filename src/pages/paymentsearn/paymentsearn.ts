import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController,Platform,ToastController,AlertController} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { PaymentsPage } from '../payments/payments';
import { AcdescriptionPage } from '../Acdescription/Acdescription';
/**
 * Generated class for the SpecialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-paymentsearn',
  templateUrl: 'paymentsearn.html',
})
export class PaymentsearnPage {
  earm_amount: number;
  total: number;
  earne_payments: any;
  lenght_earne: any;
  user_id: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public Cmn: CommonProvider,
    public variable: VariableProvider,
    public shared: SharedProvider,
    public loadingCtrl: LoadingController,
    private http: Http,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
  ) {
    this.user_id = localStorage.getItem('userid');
    this.earned_payments();
  }
  earned_payments() {
    
        var url: string = this.variable.baseUrl + this.variable.ACTIVE_CONTRACTS
        var postdata = {
          action: "earned",
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
                this.earne_payments = resolve.data;
                this.lenght_earne = this.earne_payments.length;
                console.log(this.lenght_earne);
                console.log(this.earne_payments);
                let total = 0;
                for (let i = 0; i < this.earne_payments.length; i++) {
                  if(this.earne_payments[i].totalamount != null){
                  total = total + parseInt(this.earne_payments[i].totalamount);
                  this.earm_amount=total;
                }
              }
                console.log(total);
              }
            })
        })
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialPage');
  }

relPage(){
    this.navCtrl.push(PaymentsPage);
  }
  activePage(id) {
    //alert("start")
    localStorage.setItem('act_id', id);
    this.navCtrl.push(AcdescriptionPage);
  }


}
