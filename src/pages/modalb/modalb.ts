import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController,AlertController,ViewController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormsModule , FormGroup, FormBuilder, Validators, FormControl}  from '@angular/forms';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modalb',
  templateUrl: 'modalb.html',
})
export class ModalbPage {
  role_explore: string;
  public myInput: string = '';

  public errorValue = '2';
  public searchArray :any = '';
  searchControl: FormControl;
  user_list: any;
  country_list: any;
  all_user_list: any;
  value(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams, 
     public viewCtrl: ViewController,
     public Cmn: CommonProvider,
     public variable: VariableProvider,
     public shared: SharedProvider,
     public loadingCtrl: LoadingController,
     private http: Http,
     private alertCtrl: AlertController,
     public formBuilder: FormBuilder,
    ) {
      this.role_explore= localStorage.getItem('explore_role');
      console.log(this.role_explore);
      this.Explore_manufcature();
      this.searchControl = new FormControl();
  }

  Explore_manufcature() {
    var url: string = this.variable.baseUrl + this.variable.STATIC_PAGES_API;
    var Manufacturer = {
      action: "userallbyrole",
      type:this.role_explore,
      rating: "",
      name: ""
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
          if (resolve.error == 0) {
            this.user_list = resolve.alluserseacrh;
            this.country_list = resolve.alluserseacrh;
            console.log(this.country_list);
          } else {

          }
        })
    })
  }

	setFilteredItems(){
		
		console.log(this.myInput);
		var keyword = this.myInput.replace(/^\s\s*/, '').replace(/\s\s*$/, '');;
		console.log(keyword);
		console.log(keyword.length);
		  
		if(keyword.length == 0) {
			 //this.ListScheduledPatients();
			 console.log('plz write something');
			 this.errorValue = '2'; 
			 console.log(this.errorValue);
		} else {
			this.searchArray = this.getItems(keyword);
			console.log('Filtering');
			this.errorValue = '0';
			console.log(this.errorValue);
		}	
  }
  getItems(ev) {
    return this.country_list.filter((item: any) => {

      return item.country_name.toLowerCase().indexOf(ev.toLowerCase()) > -1;
    }); 
}
budget(value){
  //alert("fygyf");
  console.log(this.value);
  this.dismiss() 
}

selectedcountry(c_name){
  this.myInput=c_name;
  console.log(this.myInput);
  this.dismiss() 
}
dismiss() {
  this.viewCtrl.dismiss({
    gg:this.value,
    myval:this.myInput
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
