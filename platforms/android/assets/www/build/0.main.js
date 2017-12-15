webpackJsonp([0],{

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(489);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
        ]
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_shared__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_variable_variable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, events, Cmn, variable, shared, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.Cmn = Cmn;
        this.variable = variable;
        this.shared = shared;
        this.http = http;
        this.tab1Root = 'Tab1Page';
        this.tab2Root = 'Tab2Page';
        this.tab3Root = 'Tab3Page';
        this.tab4Root = 'Tab4Page';
        this.tab5Root = 'Tab5Page';
        this.interval = setInterval(function () {
            _this.Message_module();
            // alert("md")
        }, 5000);
    }
    TabsPage.prototype.Message_module = function () {
        var _this = this;
        var url = this.variable.baseUrl + this.variable.MESSAGE_CHATING;
        var postdata = {
            userid: localStorage.getItem('userid'),
            action: 'unreadmessage'
        };
        var serialized_data = this.Cmn.serializeObj(postdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_data, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            _this.message_count = response;
            // this.events.publish('unreadmsg',this.message_count);
            console.log(_this.message_count);
            console.log("bhumika_grover");
        });
    };
    TabsPage.prototype.tabIs = function (tab) {
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
        }
        else {
        }
        // if (br[2] == '5') {
        //   this.events.publish('tab-t0-5', 'honey');
        // }
    };
    return TabsPage;
}());
TabsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="myIndex"  (ionChange)=\'tabIs($event)\'>\n    <ion-tab [root]="tab1Root" tabTitle="Jobs" tabIcon="home" preloadTabs="true"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Message"  [tabBadge]="message_count>0 ? message_count: null" tabIcon="list-box" preloadTabs="true"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="News Feed" tabIcon="notifications" preloadTabs="true"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Explore" tabIcon="people" preloadTabs="true"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="MyProfile" tabIcon="contact" preloadTabs="true"></ion-tab>\n  </ion-tabs>\n\n\n  <!-- (ionChange)=\'tabIs($event)\' -->'/*ion-inline-end:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tabs/tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_variable_variable__["a" /* VariableProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map