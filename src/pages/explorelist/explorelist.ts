import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalbPage } from '../modalb/modalb';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Explore_profilePage } from '../Explore_profile/Explore_profile';
import { Ionic2RatingModule } from 'ionic2-rating';
/**
 * Generated class for the ExplorelistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-explorelist',
  templateUrl: 'explorelist.html',
})
export class ExplorelistPage {
  user_list: any;
  country_name: any;
  rating_explore: any;
  role_explore: any;
  all_user_list: any;
  image_path: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public Cmn: CommonProvider,
    public variable: VariableProvider,
    public shared: SharedProvider,
    public loadingCtrl: LoadingController,
    private http: Http,
    private alertCtrl: AlertController
  ) {
    this.image_path = this.variable.IMAGE_URL;
    // this.role_explore= this.navParams.get('explore_role');
    this.role_explore = localStorage.getItem('explore_role');
    console.log(this.role_explore)
    this.Explore_manufcature('', '');
  }


  Explore_manufcature(C_name, Rate) {
    var url: string = this.variable.baseUrl + this.variable.STATIC_PAGES_API;
    var Manufacturer = {
      action: "userallbyrole",
      type: this.role_explore,
      rating: Rate,
      name: C_name
    }
    var serialized_data = this.Cmn.serializeObj(Manufacturer);
    console.log(serialized_data)
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
          console.log(resolve)
          this.user_list=resolve.error;
          console.log(this.user_list);
          if (resolve.error == 0) {
            this.all_user_list = resolve.alluser;
            console.log(this.all_user_list);
          } else {

            // let alert = this.alertCtrl.create({
            //   //  title: 'Low battery',
            //   subTitle: resolve.data,
            //   buttons: ['OK']   
            // });
            // alert.present();
          }
        })
    })
  }

  Explore_user_details(id) {
    this.navCtrl.push(Explore_profilePage, {
      user_details: id
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorelistPage');
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalbPage);
    modal.present();
    modal.onDidDismiss((data) => {
      console.log(data);
      console.log(data.myval);
      this.country_name = data.myval
      this.rating_explore = data.gg
      this.Explore_manufcature(this.country_name, this.rating_explore)
    })
  }

}
