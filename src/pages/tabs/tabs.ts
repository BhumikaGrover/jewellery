import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController,AlertController,Content, Platform} from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  message_count: any;
  interval: number;
  tab1Root = 'Tab1Page';
  tab2Root = 'Tab2Page';
  tab3Root = 'Tab3Page';
  tab4Root = 'Tab4Page';
  tab5Root = 'Tab5Page';
  myIndex: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
     public events : Events,
     public Cmn: CommonProvider,
     public variable: VariableProvider,
     public shared: SharedProvider,
     private http: Http,) {
      this.interval= setInterval(()=>{
        this.Message_module();
       // alert("md")
      },5000)
}
public Message_module(){
  var url: string = this.variable.baseUrl + this.variable.MESSAGE_CHATING;
  var postdata = {
    userid: localStorage.getItem('userid'),
    action: 'unreadmessage'
  }
  var serialized_data = this.Cmn.serializeObj(postdata);
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
  let options = new RequestOptions({ headers: headers });
  this.http.post(url, serialized_data, options)
    .map(res => res.json())
    .subscribe((response) => {
      console.log(response)
      this.message_count=response;
     // this.events.publish('unreadmsg',this.message_count);
      console.log(this.message_count);
      console.log("bhumika_grover");
    })
  }

  tabIs(tab) {
    var br = tab._btnId.split('-');
  //  alert("br")
  //  alert(br)
  //  alert(br[2])

    if (br[2] == '1') {
      this.events.publish('tab-t0-1', 'honey');
    }
    else if (br[2] == '3') {
      this.events.publish('tab-t0-3', 'honey');
    }
    else if (br[2] == '0') {
     
      this.events.publish('tab-t0-0', 'honey');
    }
    else if (br[2] == '4') {
      this.events.publish('tab-t0-4', 'honey');
    }else{

    }
    // if (br[2] == '5') {
    //   this.events.publish('tab-t0-5', 'honey');
    // }
  }
}
