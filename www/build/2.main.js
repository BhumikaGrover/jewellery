webpackJsonp([2],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab4__ = __webpack_require__(487);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab4PageModule = (function () {
    function Tab4PageModule() {
    }
    return Tab4PageModule;
}());
Tab4PageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab4__["a" /* Tab4Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab4__["a" /* Tab4Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tab4__["a" /* Tab4Page */]
        ]
    })
], Tab4PageModule);

//# sourceMappingURL=tab4.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explorelist_explorelist__ = __webpack_require__(384);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab4Page; });
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
 * Generated class for the Tab4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tab4Page = (function () {
    function Tab4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Tab4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab4Page');
    };
    Tab4Page.prototype.explorelistPage = function (role) {
        console.log(role);
        localStorage.setItem('explore_role', role);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__explorelist_explorelist__["a" /* ExplorelistPage */]);
    };
    return Tab4Page;
}());
Tab4Page = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tab4',template:/*ion-inline-start:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tab4/tab4.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-buttons>\n    <ion-title>Explore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding style="background: #f2f2f2;">\n<div class="main_market">\n  <div class="market">\n    <h3 class="titles">The Pillars Of Our Marketplace</h3>\n    <div class="cardz">\n      <ion-card>\n        <img src="assets/images/a.png"/>\n        <ion-card-content>\n          <p color="red">Manufacturers</p>\n          <!-- <button ion-button clear class="fnd">Find out more ></button> -->\n         <button ion-button small color="yellow" class="submit" (click)="explorelistPage(\'Manufacturer\')">Search Now</button>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img src="assets/images/b.png"/>\n        <ion-card-content>\n          <p color="red">Suppliers</p>\n          <!-- <button ion-button clear class="fnd">Find out more ></button> -->\n         <button ion-button small color="yellow" class="submit"  (click)="explorelistPage(\'Supplier\')" >Search Now</button>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img src="assets/images/c.png"/>\n        <ion-card-content>\n          <p color="red">Retailers</p>\n          <!-- <button ion-button clear class="fnd">Find out more ></button> -->\n         <button ion-button small color="yellow" class="submit" (click)="explorelistPage(\'Retailer\')">Search Now</button>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img src="assets/images/d.png"/>\n        <ion-card-content>\n          <p color="red">Designers</p>\n          <!-- <button ion-button clear class="fnd">Find out more ></button> -->\n         <button ion-button small color="yellow" class="submit"  (click)="explorelistPage(\'Designer\')">Search Now</button>\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tab4/tab4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Tab4Page);

//# sourceMappingURL=tab4.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map