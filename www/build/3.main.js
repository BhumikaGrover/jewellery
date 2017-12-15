webpackJsonp([3],{

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab3__ = __webpack_require__(486);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab3PageModule = (function () {
    function Tab3PageModule() {
    }
    return Tab3PageModule;
}());
Tab3PageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab3__["a" /* Tab3Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab3__["a" /* Tab3Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tab3__["a" /* Tab3Page */]
        ]
    })
], Tab3PageModule);

//# sourceMappingURL=tab3.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blogdesc_blogdesc__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_variable_variable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab3Page; });
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
 * Generated class for the Tab3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tab3Page = (function () {
    function Tab3Page(navCtrl, navParams, alertCtrl, loadingCtrl, shared, http, Cmn, variable) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.shared = shared;
        this.http = http;
        this.Cmn = Cmn;
        this.variable = variable;
        this.blog_image_path = this.variable.BLOG_PAGES_IMAge;
        //this.blog_pages()
    }
    Tab3Page.prototype.blog = function (arg0) {
        throw new Error("Method not implemented.");
    };
    Tab3Page.prototype.blog_pages = function () {
        var _this = this;
        var url = this.variable.baseUrl + this.variable.STATIC_PAGES_API;
        var static_page = {
            action: "blog",
            type: "blog",
        };
        var serialized_data = this.Cmn.serializeObj(static_page);
        console.log(serialized_data);
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.http.post(url, serialized_data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (resolve) {
                console.log(resolve);
                Loading.dismiss();
                if (resolve.error == 0) {
                    _this.blog_listing = resolve.data;
                    console.log(_this.blog_listing);
                }
                else {
                }
            });
        });
    };
    Tab3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab3Page');
        this.blog_pages();
    };
    Tab3Page.prototype.blogdescPage = function (id) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__blogdesc_blogdesc__["a" /* BlogdescPage */], {
            deta_id: id
        });
    };
    return Tab3Page;
}());
Tab3Page = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tab3',template:/*ion-inline-start:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tab3/tab3.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-buttons>\n    <ion-title>Blog</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding style="background: #f2f2f2;">\n<div class="main_market">\n\n  <ion-card class="crd">\n\n      <div class="blog" *ngFor="let b of blog_listing">\n          <div class="wade" >\n            <span>{{b.created  | date:\'MMMM d, yyyy\'}}</span>\n            <h3 class="fname">{{b.title}}</h3>\n            <!-- <span><ion-icon name="person"></ion-icon> Wade</span> -->\n          </div>\n         <div class="blog_fed">\n        <img src="{{blog_image_path}}{{b.image}}"/>\n      </div>\n        <ion-card-content>\n          <p class="descrb" [innerHTML]="b.description">\n            \n          </p>\n          <button ion-button clear no-margin no-padding class="titles" (click)="blogdescPage(b.id);">Continue Reading <ion-icon name="arrow-round-forward" color="red"></ion-icon></button>\n\n        </ion-card-content>\n      </div>\n\n       <!-- <div class="blog">\n          <div class="wade">\n            <span>May 29,2017</span>\n            <h3>Lorem Ipsum is simply dummy</h3>\n            <span><ion-icon name="person"></ion-icon> Wade</span>\n          </div>\n\n        <img src="assets/images/blog2.jpg"/>\n        <ion-card-content>\n          <p class="descrb">\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n          Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, \n          when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n          It has survived not only five centuries, but also the leap into electronic typesetting, \n          remaining essentially unchanged.\n          </p>\n          <button ion-button clear no-margin no-padding class="titles">Continue Reading <ion-icon name="arrow-round-forward" color="red"></ion-icon></button>\n\n        </ion-card-content>\n      </div> -->\n\n  </ion-card>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tab3/tab3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_variable_variable__["a" /* VariableProvider */]])
], Tab3Page);

//# sourceMappingURL=tab3.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map