import { Component } from '@angular/core';
import { BlogdescPage } from '../blogdesc/blogdesc';
import { NavController, NavParams ,LoadingController, Platform,IonicPage} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the Tab3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page {
  blog_image_path: string;
  blog_listing: any;
  blog(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public loadingCtrl:LoadingController,
    public shared: SharedProvider,
    private http:Http,
    public Cmn:CommonProvider,
    public variable:VariableProvider,
  ) {
    this.blog_image_path=this.variable.BLOG_PAGES_IMAge
    //this.blog_pages()
  }

  blog_pages(){
    var url:string = this.variable.baseUrl + this.variable.STATIC_PAGES_API;
    var static_page={
      action:"blog",
      type:"blog",
    }
      var serialized_data = this.Cmn.serializeObj(static_page);
      console.log(serialized_data);
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
            this.blog_listing=resolve.data;
            console.log(this.blog_listing);
          }else{
  
          }
        })
      })
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
     this.blog_pages()
  }

 blogdescPage(id){
   console.log(id);
    this.navCtrl.push(BlogdescPage,{
      deta_id:id
    });
  }

}
