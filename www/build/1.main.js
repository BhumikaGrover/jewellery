webpackJsonp([1],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab5__ = __webpack_require__(488);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab5PageModule = (function () {
    function Tab5PageModule() {
    }
    return Tab5PageModule;
}());
Tab5PageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab5__["a" /* Tab5Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab5__["a" /* Tab5Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tab5__["a" /* Tab5Page */]
        ]
    })
], Tab5PageModule);

//# sourceMappingURL=tab5.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_variable_variable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gallery_gallery__ = __webpack_require__(140);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab5Page; });
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
 * Generated class for the Tab5Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tab5Page = (function () {
    function Tab5Page(navCtrl, navParams, formBuilder, shared, http, actionSheetCtrl, camera, variable, Cmn, loadingCtrl, modalCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.shared = shared;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.variable = variable;
        this.Cmn = Cmn;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
            //content: '<div class="circles"></div>'
        });
        //this.getuserdetail();
    }
    Tab5Page.prototype.getuserdetail = function () {
        var _this = this;
        var url = this.variable.baseUrl + this.variable.SIGNIN_API;
        return new Promise(function (resolve) {
            var postdata = {
                userid: localStorage.getItem('userid'),
                action: 'user_detail'
            };
            var serialized_data = _this.Cmn.serializeObj(postdata);
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            Loading.present().then(function () {
                _this.http.post(url, serialized_data, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    console.log(response);
                    _this.userinfo = response.detail;
                    console.log(_this.userinfo + "bhumika");
                    // var countryaction = {
                    //   action: 'country_list'
                    // }
                    // var serialized_data = this.Cmn.serializeObj(countryaction);
                    // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                    // let options = new RequestOptions({ headers: headers });
                    // this.http.post(url, serialized_data, options)
                    //   .map(resp => resp.json())
                    //   .subscribe((countries) => {
                    //     console.log(countries)
                    // this.countrylist = countries.list;
                    var usergallery = {
                        action: 'my_gallery',
                        userid: localStorage.getItem('userid'),
                    };
                    var serialized_data = _this.Cmn.serializeObj(usergallery);
                    var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                    var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                    _this.http.post(url, serialized_data, options)
                        .map(function (resp) { return resp.json(); })
                        .subscribe(function (gallery) {
                        console.log(gallery);
                        Loading.dismiss();
                        if (gallery.error == 0) {
                            _this.picgallery = gallery.data;
                        }
                        else {
                            _this.gallery_hide = 0;
                        }
                    });
                });
                //   })
            });
        });
    };
    Tab5Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Tab5Page');
        this.events.subscribe('tab-t0-4', function (data) {
            // console.log(this.navCtrl.canGoBack())
            // if(this.navCtrl.canGoBack() == true){
            //   this.navCtrl.popToRoot()
            // } 
            _this.getuserdetail();
            //alert('working')
        });
    };
    Tab5Page.prototype.presentModal = function (gallery) {
        console.log('modal---');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__gallery_gallery__["a" /* GalleryPage */], { photogallery: this.picgallery, index: gallery });
        console.log('index is ' + gallery);
        modal.present();
    };
    return Tab5Page;
}());
Tab5Page = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tab5',template:/*ion-inline-start:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tab5/tab5.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-buttons>\n    <ion-title>View Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: #f1f1f1;">\n\n   <ion-card class="crd" no-margin>\n    <img src="assets/images/back.jpg"/>\n    <div class="main_crd"><div class="crd_user"><img [src]="userinfo?.profilepicture"/></div></div>\n    <div class="crd_cnt">\n      <div class="card-title" class="fname">{{userinfo?.fullname}}</div>\n      <!-- <ul class="social">\n        <li><a><img src="assets/images/fb1.png" /></a></li>\n        <li><a><img src="assets/images/insta2.png" /></a></li>\n        <li><a><img src="assets/images/twitter3.png" /></a></li>\n        <li><a><img src="assets/images/youtube4.png" /></a></li>\n        <li><a><img src="assets/images/pinit5.png" /></a></li>\n        <li><a><img src="assets/images/linkedin6.png" /></a></li>\n      </ul> -->\n    </div>\n  </ion-card>\n\n  <div style="padding:8px;">\n  <ion-grid class="profile">\n  <ion-row *ngIf="userinfo?.fullname">\n    <ion-col col-4>First Name:</ion-col>\n    <ion-col col-8 class="fname">{{userinfo?.fullname}}</ion-col>\n  </ion-row>\n  <ion-row *ngIf="userinfo?.lastname">\n    <ion-col col-4>Last Name:</ion-col>\n    <ion-col col-8 class="fname">{{userinfo?.lastname}}</ion-col>\n  </ion-row>\n  <ion-row *ngIf="userinfo?.pemail">\n    <ion-col col-4>E-Paypal:</ion-col>\n    <ion-col col-8>{{userinfo?.pemail}}</ion-col>\n  </ion-row>\n  <ion-row *ngIf="userinfo?.address">\n    <ion-col col-4>Address:</ion-col>\n    <ion-col col-8>{{userinfo?.address}}</ion-col>\n  </ion-row>\n  <ion-row *ngIf="userinfo?.country">\n    <ion-col col-4>Country:</ion-col>\n    <ion-col col-8>{{userinfo?.country_name}}</ion-col>\n  </ion-row>\n  <ion-row *ngIf="userinfo?.skills">\n    <ion-col col-4>Skills:</ion-col>\n    <ion-col col-8>{{userinfo?.skills}}</ion-col>\n  </ion-row>\n  <ion-row *ngIf="userinfo?.description">\n    <ion-col col-4  >Background Info:</ion-col>\n    <ion-col col-8>{{userinfo?.description}}</ion-col>\n  </ion-row>\n  <ion-row *ngIf="userinfo?.gender">\n    <ion-col col-4>Gender:</ion-col>\n    <ion-col col-8>{{userinfo?.gender}}</ion-col>\n  </ion-row>\n   <ion-row *ngIf="userinfo?.mobile">\n    <ion-col col-4>Contact:</ion-col>\n    <ion-col col-8>{{userinfo?.mobile}}</ion-col>\n  </ion-row>\n  <ion-row *ngIf="userinfo?.email">\n    <ion-col col-4>Email:</ion-col>\n    <ion-col col-8>{{userinfo?.email}}</ion-col>\n  </ion-row>\n  <ion-row *ngIf="userinfo?.experience">\n    <ion-col col-4>Years Of  Experience:</ion-col>\n    <ion-col col-8>{{userinfo?.experience}}</ion-col>\n  </ion-row>\n  <ion-row *ngIf="userinfo?.role">\n    <ion-col col-4>Role:</ion-col>\n    <ion-col col-8>{{userinfo?.role}}</ion-col>\n  </ion-row>\n  </ion-grid>\n  <h3 class="titles"style="padding:3px 10px;" *ngIf="userinfo?.bank_name" >Account Detail</h3>\n  <ion-grid class="profile">\n    <ion-row *ngIf="userinfo?.bank_name">\n    <ion-col col-4>Name:</ion-col>\n    <ion-col col-8>{{userinfo?.bank_name}}</ion-col>\n  </ion-row>\n    <ion-row *ngIf="userinfo?.bank_nickname">\n    <ion-col col-4>Nick Name:</ion-col>\n    <ion-col col-8>{{userinfo?.bank_nickname}}</ion-col>\n  </ion-row>\n    <ion-row *ngIf="userinfo?.bank_countryname">\n    <ion-col col-4>Country:</ion-col>\n    <ion-col col-8>{{userinfo?.bank_countryname}}</ion-col>\n  </ion-row>\n    <ion-row *ngIf="userinfo?.bank_bane">\n    <ion-col col-4>Beneficiary Bank:</ion-col>\n    <ion-col col-8>{{userinfo?.bank_bane}}</ion-col>\n  </ion-row>\n    <ion-row *ngIf="userinfo?.bank_bane">\n    <ion-col col-4>Branch:</ion-col>\n    <ion-col col-8>{{userinfo?.bank_bane}}</ion-col>\n  </ion-row>\n    <ion-row *ngIf="userinfo?.bank_city">\n    <ion-col col-4>City:</ion-col>\n    <ion-col col-8>{{userinfo?.bank_city}}</ion-col>\n  </ion-row>\n    <ion-row *ngIf="userinfo?.bank_code">\n    <ion-col col-4>Bank Code:</ion-col>\n    <ion-col col-8>{{userinfo?.bank_code}}</ion-col>\n  </ion-row>\n    <ion-row *ngIf="userinfo?.bank_swiftcode">\n    <ion-col col-4>Swift Code:</ion-col>\n    <ion-col col-8>{{userinfo?.bank_swiftcode}}</ion-col>\n  </ion-row>\n    <ion-row *ngIf="userinfo?.bank_intermediary">\n    <ion-col col-4>Intermediary Bank:</ion-col>\n    <ion-col col-8>{{userinfo?.bank_intermediary}}</ion-col>\n  </ion-row>\n    <ion-row *ngIf="userinfo?.account_type">\n    <ion-col col-4>Account No./IBAN</ion-col>\n    <ion-col col-8 *ngIf="userinfo?.account_type==1">Account No</ion-col>\n    <ion-col col-8 *ngIf="userinfo?.account_type==2">IBAN</ion-col>\n  </ion-row>\n       <ion-row *ngIf="userinfo?.account_number">\n    <ion-col col-4>Account Number:</ion-col>\n    <ion-col col-8>{{userinfo?.account_number}}</ion-col>\n  </ion-row>\n</ion-grid>\n<div *ngIf="gallery_hide !=0">\n<h3 class="titles" style="padding:10px 10px 0px 10px;">Gallery</h3>\n<ion-scroll scrollX="true">\n  <div class="box_outer">\n  <div class="img_box" *ngFor="let gallery of picgallery ; let i = index " (click)="presentModal(i)">\n 	  <div class="card">\n      <img [src]="gallery?.imgurl" />\n      <div class="overlay"></div> </div>\n  </div>\n  \n  <!-- <div class="img_box">\n 	  <div class="card">\n      <img src="assets/images/a.jpg"/>\n      <div class="overlay"></div> </div>\n  </div>\n  <div class="img_box">\n 	  <div class="card">\n      <img src="assets/images/a.jpg"/>\n      <div class="overlay"></div> </div>\n  </div>\n  <div class="img_box">\n 	  <div class="card">\n      <img src="assets/images/a.jpg"/>\n      <div class="overlay"></div> </div>\n  </div>\n  <div class="img_box">\n 	  <div class="card">\n      <img src="assets/images/a.jpg"/>\n      <div class="overlay"></div> </div>\n  </div>\n  <div class="img_box">\n 	  <div class="card">\n      <img src="assets/images/a.jpg"/>\n      <div class="overlay"></div> </div>\n  </div> -->\n  </div>\n   </ion-scroll>\n</div>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tab5/tab5.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_8__providers_variable_variable__["a" /* VariableProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Events */]])
], Tab5Page);

//# sourceMappingURL=tab5.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map