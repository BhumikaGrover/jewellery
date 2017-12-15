webpackJsonp([4],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab2__ = __webpack_require__(485);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab2PageModule = (function () {
    function Tab2PageModule() {
    }
    return Tab2PageModule;
}());
Tab2PageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */]
        ]
    })
], Tab2PageModule);

//# sourceMappingURL=tab2.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_variable_variable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2Page; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the Tab2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tab2Page = (function () {
    function Tab2Page(navCtrl, navParams, Cmn, variable, shared, loadingCtrl, http, alertCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Cmn = Cmn;
        this.variable = variable;
        this.shared = shared;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.events = events;
        // this.interval= setInterval(()=>{
        //   this.Message_module()
        //  // alert("md")
        // },5000)
        this.user_id = localStorage.getItem('userid');
        // this.events.subscribe('tab-t0-1', (data)=>{
        //   this.All_message();
        //    alert('working')
        //  })
        this.events.subscribe('6', function (data) {
            _this.All_message();
        });
    }
    Tab2Page.prototype.All_message = function () {
        var _this = this;
        var url = this.variable.baseUrl + this.variable.MESSAGE_CHATING;
        var postdata = {
            userid: this.user_id,
            action: 'allchat'
        };
        var serialized_data = this.Cmn.serializeObj(postdata);
        console.log(serialized_data);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.http.post(url, serialized_data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.chatting_length = response.error;
                console.log(_this.chatting_length);
                if (response.error == 0) {
                    Loading.dismiss();
                    _this.chatting_listing = response.data;
                    console.log(_this.chatting_listing);
                    _this.image_path = response.profilefolder;
                    _this.no_found = response.defaultimage;
                }
                else {
                    Loading.dismiss();
                }
            });
        });
    };
    Tab2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Tab2Page');
        this.events.subscribe('tab-t0-1', function (data) {
            console.log(_this.navCtrl.canGoBack());
            if (_this.navCtrl.canGoBack() == true) {
                _this.navCtrl.popToRoot();
            }
            _this.All_message();
            //alert('working')
        });
    };
    Tab2Page.prototype.chatPage = function (id, name) {
        console.log(id, name);
        console.log(name);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], {
            other_user_id: id,
            username: name
        });
    };
    return Tab2Page;
}());
Tab2Page = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tab2',template:/*ion-inline-start:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tab2/tab2.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-buttons>\n    <ion-title>Inbox</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding style="background: #fff;">\n<div class="main_market" *ngIf="chatting_length==0">\n\n\n  <ion-list>\n    <ion-item class="lst" (click)="chatPage(User_chatting.USERID,User_chatting.username);"  *ngFor="let User_chatting of chatting_listing">\n      <ion-avatar item-start class="usr"  *ngIf="User_chatting.profilepicture">\n        <img src="{{image_path}}/{{User_chatting?.profilepicture}}">\n      </ion-avatar>\n      <ion-avatar item-start class="usr"  *ngIf="!User_chatting.profilepicture">\n        <img src="{{image_path}}/{{no_found}}">\n      </ion-avatar>\n      <button ion-button clear no-margin no-padding class="titles set_cntnt set_locte">{{User_chatting.username}}</button>\n      <span class="nw_msg" *ngIf="User_chatting.unread==1 && User_chatting.fromid != user_id">New</span>\n      <ion-note item-end="" class="note note-ios snt_not">{{User_chatting.time | date:\'h:mm  MMM d, y\'}}</ion-note>\n      <h3 class="title_b" *ngIf="User_chatting.lastmessage" [innerHTML]="User_chatting.lastmessage"></h3>\n      <h3 class="title_b" *ngIf="!User_chatting.lastmessage" >Attachment</h3>\n    </ion-item>\n\n    <!-- <ion-item class="lst">\n      <ion-avatar item-start class="usr">\n        <img src="assets/images/a.jpg">\n      </ion-avatar>\n      <h2 class="titles">Peter Luck</h2>\n      <h3 class="title_b">Manufacture Enamelling,Mounting</h3>\n    </ion-item>\n\n    <ion-item class="lst">\n      <ion-avatar item-start class="usr">\n        <img src="assets/images/a.jpg">\n      </ion-avatar>\n      <h2 class="titles">Peter Luck</h2>\n      <h3 class="title_b">Manufacture Enamelling,Mounting</h3>\n    </ion-item> -->\n\n  </ion-list>\n\n\n</div>\n<div class="meage_shw" *ngIf="chatting_length==1"> Some internal error. Please try again</div>\n<div  class="meage_shw" *ngIf="chatting_length==2"><img class="no_mess" src="assets/images/mess.jpg">No message Yet !</div>\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tab2/tab2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_variable_variable__["a" /* VariableProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Events */]])
], Tab2Page);

//# sourceMappingURL=tab2.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map