import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController} from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { SharedProvider } from '../../providers/shared/shared';
import {Http,Headers,RequestOptions} from '@angular/http';
import { FormsModule , FormGroup, FormBuilder, Validators, FormControl}  from '@angular/forms';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  items;
  country_list: string[];
  
  public myInput:string = '';
  public value:string = '';
  public errorValue = '2';
  public searchArray :any = '';
  searchControl: FormControl;
  //country_list;
    constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public variable: VariableProvider,
    public Cmn: CommonProvider,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public shared: SharedProvider,
    private http:Http,
  ) {
    this.countrylist();
    this.searchControl = new FormControl();
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

  countrylist() {
    var url: string = this.variable.baseUrl + this.variable.SIGNIN_API;
    var countryaction = {
      action: 'country_list'
    }
    var serialized_data = this.Cmn.serializeObj(countryaction);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_data, options)
      .map(resp => resp.json())
      .subscribe((countries) => {
        console.log(countries)
        this.country_list=countries.list
      })
  }
  
  onChange(data){
    console.log(data);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  selectedcountry(c_name){
    this.myInput=c_name;
    console.log(this.myInput);
    localStorage.setItem('country', this.myInput);
    this.dismiss() 
  }
    
  budget(value){
    //alert("fygyf");
    console.log(this.value);
    this.dismiss() 
  }
 dismiss() {
    this.viewCtrl.dismiss({
      gg:this.value,
      myval:this.myInput
    });
  }

}
