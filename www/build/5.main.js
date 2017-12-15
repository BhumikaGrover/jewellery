webpackJsonp([5],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab1__ = __webpack_require__(484);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab1PageModule = (function () {
    function Tab1PageModule() {
    }
    return Tab1PageModule;
}());
Tab1PageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */]
        ]
    })
], Tab1PageModule);

//# sourceMappingURL=tab1.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editjob_editjob__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hsdescription_hsdescription__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wrkdescription_wrkdescription__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_modal__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_shared_shared__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_variable_variable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__submitproposal_submitproposal__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__viewoffers_viewoffers__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chat_chat__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Acdescription_Acdescription__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Explore_profile_Explore_profile__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams, Events, LoadingController,AlertController,ToastController,MenuController} from 'ionic-angular';



















// import { MenuPage } from '../menu/menu';
// import { MenuPageModule } from '../menu/menu.module';
/**
 * Generated class for the Tab1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tab1Page = (function () {
    // public loading = this.loadingCtrl.create({
    //   spinner: 'bubbles',
    //   showBackdrop: false,
    //   cssClass: 'loader'
    //   //content: '<div class="circles"></div>'
    // });
    function Tab1Page(navCtrl, navParams, modalCtrl, events, socialSharing, Cmn, variable, shared, loadingCtrl, http, alertCtrl, toastCtrl, datepipe, menuCtrl, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.socialSharing = socialSharing;
        this.Cmn = Cmn;
        this.variable = variable;
        this.shared = shared;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.datepipe = datepipe;
        this.menuCtrl = menuCtrl;
        this.app = app;
        // history_details;
        this.findWork = 0;
        this.pageno = 0;
        this.history_page = 0;
        this.budget_price = "";
        this.hasMoreData = true;
        this.items = [];
        this.history_details = [];
        this.icons = 'findwork';
        //alert("grover");
        this.show_tabs = this.navParams.get('id');
        // events.publish('user:login');
        this.user_id = localStorage.getItem('userid');
        this.image_path = this.variable.IMAGE_URL;
        // if(this.show_tabs=="3"){
        //   alert(this.findWork);
        //   this.findWork=2;
        //  this.history(1)
        // }else{
        //   alert("bhunmika")
        // this.find_work_listing('','',1);
        // }
        this.events.subscribe('3', function (data) {
            _this.icons = 'history';
            // alert(this.findWork);
            // this.findWork=2;
            _this.history(1);
        });
        this.currentTime = new Date();
        this.format = __WEBPACK_IMPORTED_MODULE_17_moment___default()(this.currentTime).format('DD-MM-YYYY');
        console.log(this.format);
        //   alert(this.format);
        //  alert("bhumi");
    }
    Tab1Page.prototype.regularShare = function (id) {
        this.request_id = id;
        // alert(this.request_id);
        // share(message, subject, file, url)
        this.socialSharing.share("https://bowdaa.com/viewjob?REQID=" + this.request_id);
    };
    Tab1Page.prototype.find_work_listing = function (buget, cna, id) {
        var _this = this;
        this.currentTime = new Date();
        this.format = __WEBPACK_IMPORTED_MODULE_17_moment___default()(this.currentTime).format('DD-MM-YYYY');
        console.log(this.format);
        if (id == 1) {
            this.hasMoreData = true;
            this.items = [];
            this.pageno = 1;
        }
        else {
            this.pageno++;
        }
        this.findWork = 0;
        console.log(buget + "//" + cna);
        var url = this.variable.baseUrl + this.variable.JOB_api;
        this.show_in = 0;
        var history = {};
        //if(this.budget_price==""){
        console.log(url);
        history = {
            action: "find_work",
            page: this.pageno,
            budget: buget,
            jobSearch: cna,
            myid: this.user_id,
        };
        console.log(history);
        var serialized_data = this.Cmn.serializeObj(history);
        console.log(serialized_data);
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
                _this.findwork_lenght = resolve.error;
                console.log(_this.findwork_lenght);
                if (resolve.error == 0) {
                    _this.find_work_lenght = resolve.pagecount;
                    console.log(_this.find_work_lenght);
                    console.log(resolve.data);
                    for (var _i = 0, _a = resolve.data; _i < _a.length; _i++) {
                        var find_work_details = _a[_i];
                        //find_work_details.creatededs=moment(this.find_work_time).format('DD-MM-YYYY');
                        //console.log(find_work_details.creatededs);
                        //  alert("bhumika");
                        _this.items.push(find_work_details);
                        console.log(find_work_details.created);
                        _this.find_work_time = new Date(find_work_details.created);
                        console.log(_this.find_work_time);
                        _this.find_work_time = new Date(find_work_details.created);
                        console.log(_this.find_work_time.getMonth() + 1);
                        find_work_details.creatededs = _this.find_work_time.getDate() + "-" + (_this.find_work_time.getMonth() + 1) + "-" + _this.find_work_time.getFullYear();
                        //  console.log(find_work_details.creatededs);
                        //   this.items.push(find_work_details);
                        //   console.log(find_work_details.created);
                    }
                    if (_this.pageno == _this.find_work_lenght) {
                        _this.hasMoreData = false;
                    }
                }
                else {
                }
            }
            // ,Error=>{
            //   alert("internet issue")
            // }
            );
        });
    };
    Tab1Page.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log("bhumika");
        console.log(infiniteScroll);
        console.log('hasMoreData ', this.hasMoreData);
        //alert(this.budget_price);
        if (this.c_name == undefined) {
            this.c_name = "";
        }
        this.find_work_listing(this.budget_price, this.c_name, 0);
        this.show_in = 0;
        setTimeout(function () {
            infiniteScroll.complete();
            console.log(typeof (_this.pageno) + "///" + typeof (_this.find_work_lenght));
            if (_this.pageno == _this.find_work_lenght) {
                _this.hasMoreData = false;
            }
            else {
                _this.hasMoreData = true;
            }
        }, 500);
    };
    ;
    ///////////////history////////////////////
    Tab1Page.prototype.history = function (id) {
        var _this = this;
        console.log(id);
        this.findWork = 2; //////use for show history div////////////
        this.show_in = 1; //////use for history pagination////////////
        // alert(this.findWork);
        if (id == 1) {
            this.hasMoreData = true;
            this.history_page = 1;
            this.history_details = [];
        }
        else {
            this.history_page++;
        }
        var url = this.variable.baseUrl + this.variable.JOB_api;
        console.log(url);
        var history = {
            action: "my_job_request",
            current_userid: this.user_id,
            page_number: this.history_page,
        };
        //this.loading.present();
        var serialized_data = this.Cmn.serializeObj(history);
        console.log(serialized_data);
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
                    _this.page_ct = resolve.page_count;
                    // this.history_details=resolve.job_req_data;
                    //console.log(this.history_details);
                    console.log(resolve.job_req_data);
                    _this.history_lenght = resolve.job_req_data.length;
                    console.log(_this.history_lenght);
                    for (var _i = 0, _a = resolve.job_req_data; _i < _a.length; _i++) {
                        var data_history = _a[_i];
                        // data_history.creatededs=moment(this.History_time).format('DD-MM-YYYY');
                        _this.history_details.push(data_history);
                        _this.History_time = new Date(data_history.created);
                        data_history.creatededs = _this.History_time.getDate() + "-" + (_this.find_work_time.getMonth() + 1) + "-" + _this.find_work_time.getFullYear();
                        // console.log(data_history.created);
                        // this.History_time=new Date(parseInt(data_history.created));
                        // console.log(this.History_time);
                        // console.log("huhududygfe");
                        if (_this.history_page == _this.page_ct) {
                            _this.hasMoreData = false;
                        }
                    }
                }
                else {
                }
            });
        });
    };
    Tab1Page.prototype.presentConfirm = function (id) {
        var _this = this;
        this.job_id = id;
        var alert = this.alertCtrl.create({
            //title: 'Confirm purchase',
            message: 'Are you sure you want to delete?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.Delete_history_post();
                    }
                }
            ]
        });
        alert.present();
    };
    Tab1Page.prototype.Delete_history_post = function () {
        var _this = this;
        this.history_page = 1;
        this.show_in = 1;
        //alert(id);
        var url = this.variable.baseUrl + this.variable.JOB_api;
        ;
        console.log(url);
        var history = {
            action: "delete_job",
            jobid: this.job_id,
            userid: this.user_id,
        };
        //this.loading.present();
        var serialized_data = this.Cmn.serializeObj(history);
        console.log(serialized_data);
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
                    _this.history_details = [];
                    var toast = _this.toastCtrl.create({
                        message: "Job successfully deleted!",
                        duration: 2000,
                        cssClass: 'toastCss',
                        position: 'middle',
                    });
                    toast.present();
                    var history = {
                        action: "my_job_request",
                        current_userid: _this.user_id,
                        page_number: _this.history_page,
                    };
                    //this.loading.present();
                    var serialized_data = _this.Cmn.serializeObj(history);
                    console.log(serialized_data);
                    var headers_1 = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                    var options_1 = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers_1 });
                    _this.http.post(url, serialized_data, options_1)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (resolve) {
                        console.log(resolve);
                        //Loading.dismiss();
                        if (resolve.error == 0) {
                            _this.hasMoreData = true;
                            _this.page_ct = resolve.page_count;
                            // this.history_details=resolve.job_req_data;
                            //console.log(this.history_details);
                            for (var _i = 0, _a = resolve.job_req_data; _i < _a.length; _i++) {
                                var data_history = _a[_i];
                                _this.history_details.push(data_history);
                                // console.log();
                                console.log("huhududygfe");
                                console.log(_this.history_page);
                                if (_this.history_page == _this.page_ct) {
                                    _this.hasMoreData = false;
                                }
                            }
                        }
                        else {
                        }
                    });
                }
                else {
                }
            });
        });
    };
    /////////////////////////////////////////////////
    // public History_api() {
    //   this.history_page++
    //   var url: string = this.variable.baseUrl + this.variable.JOB_api;
    //   console.log(url);
    //   var history = {
    //     action: "my_job_request",
    //     current_userid: this.user_id,
    //     page_number: this.history_page,
    //   }
    //   //this.loading.present();
    //   var serialized_data = this.Cmn.serializeObj(history);
    //   console.log(serialized_data)
    //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    //   let options = new RequestOptions({ headers: headers });
    //   var Loading = this.loadingCtrl.create({
    //     spinner: 'bubbles',
    //     showBackdrop: false,
    //     cssClass: 'loader'
    //       });
    //       Loading.present().then(() => {
    //   this.http.post(url, serialized_data, options)
    //     .map(res => res.json())
    //     .subscribe(resolve => {
    //       console.log(resolve);
    //       Loading.dismiss();
    //       if (resolve.error == 0) {
    //         this.page_ct = resolve.page_count
    //         // this.history_details=resolve.job_req_data;
    //         //console.log(this.history_details);
    //         for (let data_history of resolve.job_req_data) {
    //           this.history_details.push(data_history);
    //           // console.log();
    //           console.log("huhududygfe");
    //           if (this.history_page == this.page_ct) {
    //             this.hasMoreData = false;
    //           }
    //         }
    //       }else{
    //       }
    //     })
    //   })
    // }
    Tab1Page.prototype.history_pagination = function (infiniteScroll) {
        var _this = this;
        this.show_in = 1;
        // alert("hudhsud")
        this.history(0);
        setTimeout(function () {
            infiniteScroll.complete();
            if (_this.history_page == _this.page_ct) {
                // alert("udygyudgy");
                _this.hasMoreData = false;
            }
            else {
                _this.hasMoreData = true;
            }
        }, 500);
    };
    Tab1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Tab1Page');
        this.events.subscribe('tab-t0-0', function (data) {
            //alert("grover")
            // alert(this.navCtrl.canGoBack())
            // alert('honey');
            //  console.log(this.navCtrl.canGoBack())
            // if(this.navCtrl.canGoBack()){
            //   if(this.navCtrl.canGoBack() == true){
            //    // alert("grover1")
            //     this.navCtrl.popToRoot()
            //   } else {
            //    // alert("grover2")
            //   }
            // }else {
            //  // alert("grover3")
            // }
            var activeNav = _this.app.getActiveNav();
            if (activeNav.canGoBack()) {
                _this.navCtrl.popToRoot();
            }
            else {
                // is Root
            }
            _this.icons = 'findwork';
            _this.find_work_listing('', '', 1);
        });
    };
    Tab1Page.prototype.editjobPage = function (history_view) {
        console.log(history_view.REQUESTID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editjob_editjob__["a" /* EditjobPage */], { jobId: history_view.REQUESTID });
    };
    Tab1Page.prototype.hsdescriptionPage = function (req_id) {
        localStorage.setItem('his_id', req_id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hsdescription_hsdescription__["a" /* HsdescriptionPage */]);
    };
    Tab1Page.prototype.wrkdescriptionPage = function (id) {
        console.log(id);
        localStorage.setItem('iddd', id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wrkdescription_wrkdescription__["a" /* WrkdescriptionPage */], {
            request_id: id,
        });
    };
    Tab1Page.prototype.presentModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_modal__["a" /* ModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            console.log(data.myval);
            _this.c_name = data.myval;
            _this.budget_price = data.gg;
            _this.pageno = 0;
            _this.items = [];
            //alert(this.budget_price);
            _this.find_work_listing(_this.budget_price, _this.c_name, 0);
            _this.hasMoreData = true;
        });
    };
    Tab1Page.prototype.submit_purposal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__submitproposal_submitproposal__["a" /* SubmitproposalPage */]);
    };
    Tab1Page.prototype.contract = function () {
        var _this = this;
        this.findWork = 1;
        var url = this.variable.baseUrl + this.variable.ACTIVE_CONTRACTS;
        var postdata = {
            action: "active_contratcs",
            current_userid: this.user_id,
        };
        var serialized_data = this.Cmn.serializeObj(postdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.http.post(url, serialized_data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (resolve) {
                Loading.dismiss();
                console.log(resolve);
                if (resolve.error == 0) {
                    _this.active_contracts = resolve.data;
                    _this.lenght_active = _this.active_contracts.length;
                    console.log(_this.lenght_active);
                    console.log(_this.active_contracts);
                    // let total = 0;
                    // for (let i = 0; i < this.earne_payments.length; i++) {
                    //   total = total + parseInt(this.earne_payments[i].totalamount);
                    //   this.earm_amount=total;
                    // }
                    // console.log(total);
                }
            });
        });
    };
    // views_offer(id){
    // // this.navCtrl.push(Viewoffers_historyPage,{
    // //   request_id:id,
    // // });
    // }
    Tab1Page.prototype.views_offer = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__viewoffers_viewoffers__["a" /* ViewoffersPage */], {
            request_id: id,
        });
    };
    Tab1Page.prototype.Chatting = function (id, name) {
        console.log(id, name);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__chat_chat__["a" /* ChatPage */], {
            other_user_id: id,
            username: name
        });
    };
    Tab1Page.prototype.activePage = function (id) {
        localStorage.setItem('act_id', id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__Acdescription_Acdescription__["a" /* AcdescriptionPage */]);
    };
    Tab1Page.prototype.newFunction = function () {
        return this.today;
    };
    Tab1Page.prototype.Explore_user_details = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__Explore_profile_Explore_profile__["a" /* Explore_profilePage */], {
            user_details: id
        });
    };
    return Tab1Page;
}());
Tab1Page = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tab1',template:/*ion-inline-start:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tab1/tab1.html"*/'<ion-header>\n    \n      <ion-navbar>\n         \n          <ion-buttons end   *ngIf = "this.findWork == 0" >\n        \n          <button ion-button (click)="presentModal();">\n          <ion-icon name="options"></ion-icon>\n        </button>\n        </ion-buttons>\n        <ion-title>Menu</ion-title>\n        <ion-buttons start style="display:block !important;">\n        <button ion-button menuToggle style="display:block !important;">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n\n<ion-content>\n  <div class="find_work">\n    <ion-segment [(ngModel)]="icons">\n        <!-- <ion-segment> -->\n      <!-- <ion-segment-button value="findwork"  style="border-color: #c4013e;\n    background: #ffc300">\n      Find Work\n    </ion-segment-button> -->\n\n      <ion-segment-button value="findwork"  (click)="find_work_listing(\'\',\'\',1)" >\n        Find Work\n      </ion-segment-button>\n\n      <!-- <ion-segment-button value="findwork" style="border-color: #c4013e;\n      background: #ffc300;" (click)="find_work_listing(\'\',\'\',1)" *ngIf = "this.findWork == 0"  >\n          Find Workfff\n        </ion-segment-button>\n      [hidden]= "this.findWork == 0"  -->\n\n\n      <ion-segment-button value="contracts" (click) = "contract()">\n        Contracts\n      </ion-segment-button>\n   \n      <!-- <ion-segment-button value="history" style="border-color: #c4013e;\n      background: #ffc300;" (click)="history(1)" *ngIf = "this.findWork == 2">\n          Historyss\n        </ion-segment-button> -->\n        <ion-segment-button value="history" (click)="history(1)" >\n            History (Jobs)\n          </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <!-- <div [ngSwitch]="pet" *ngIf="findWork == 0"> -->\n\n    <!-- <ion-list *ngIf="findWork == 0" style="padding:8px;"> -->\n     \n    <!-- <ion-list style="padding:8px;" *ngSwitchCase="\'findwork\'"> -->\n\n          <div class="listsec" *ngIf = "this.findWork == 0">\n            <div *ngIf="findwork_lenght!=2">\n              <ion-card *ngFor="let work_details of items">\n                    <ion-card-content class="cntry_full">\n      \n        <ion-grid no-padding class="country">\n          <ion-row>\n            <ion-col col-12>\n              <button ion-button clear no-margin no-padding class="title ttle_small" (click)="wrkdescriptionPage(work_details.REQUESTID)">{{work_details.title}}</button></ion-col>\n            \n          \n          </ion-row>\n          <p no-margin>{{work_details.scriptolutiondesc}}</p>\n        </ion-grid>\n        <ion-grid no-padding class="country_b">\n          <ion-row>\n            <ion-col col-6><span class="pst_bi">Posted By:</span> <span no-margin style="color:#757575;"  >\n      <ion-avatar item-start class="pic_pture" *ngIf="work_details.profilepicture">\n      <img src="{{image_path}}{{work_details.profilepicture}}">\n    </ion-avatar>\n    <ion-avatar item-start class="pic_pture" *ngIf="!work_details.profilepicture">\n        <img src="{{image_path}}noprofilepicture.gif">\n      </ion-avatar>\n      <h4 class="pst_nme" *ngIf="user_id!=work_details.USERID"(click)="Explore_user_details(work_details.USERID);">{{work_details.username}}</h4>\n      <h4 class="pst_nme" *ngIf="user_id==work_details.USERID">{{work_details.username}}</h4>\n  </span></ion-col>\n            <ion-col col-6>Proposal: <span no-margin style="color:#757575;">{{work_details.totaloffers}} OFFERS</span></ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid no-padding class="country_b">\n          <ion-row>\n            <ion-col col-6 *ngIf="work_details.creatededs == format">Time Posted: <span no-margin style="color:#757575;" *ngIf="work_details.creatededs == format">{{work_details.created | date:\'h:mm a\'}}</span>\n           </ion-col>\n            <ion-col col-6 *ngIf="work_details.creatededs != format">Date Posted: \n              <span no-margin style="color:#757575;" *ngIf="work_details.creatededs != format">{{work_details.created | date:\'d/MM/yyyy\'}}</span>\n            </ion-col>\n            <ion-col col-6>Delivery Time: <span no-margin style="color:#757575;">{{work_details.scriptolutiondays}} DAYS</span></ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid no-padding class="country_b rate">\n          <ion-row >\n            <ion-col col-5>USD {{work_details.scriptolutionprice}}</ion-col>\n            <ion-col col-2 text-center>\n                <button ion-button clear icon-only no-margin style="height: 1.5rem;" (click)="regularShare(work_details.REQUESTID);">\n            <ion-icon class="icon_shre" name="md-share" item-end ></ion-icon>\n        </button>\n              </ion-col>\n            <ion-col col-5 text-right [hidden]="user_id==work_details.USERID"><button ion-button small color="yellow" class="submit" *ngIf="work_details.myoffer==0" (click)="wrkdescriptionPage(work_details.REQUESTID)">Submit Proposal</button>\n              <button ion-button small color="yellow" class="submit" *ngIf="work_details.myoffer!=0" (click)="wrkdescriptionPage(work_details.REQUESTID)">Proposal submitted</button></ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-12>\n                <div class="cntr_prp">\n                  <ion-icon class="con_prppr" name="globe" item-end></ion-icon><span class="st_prpr">{{work_details.country}}</span>\n                </div>\n                </ion-col>\n          </ion-row>\n        </ion-grid>\n     \n     \n      </ion-card-content>\n    </ion-card>\n    </div>\n    <div class="meage_shw" *ngIf="findwork_lenght==2"><img class="no_mess" src="assets/images/NoDataAvailable-1.png"></div>\n  </div>\n    <div *ngIf="show_in !=1 && this.findWork == 0 && findwork_lenght!=2">\n      <ion-infinite-scroll *ngIf="hasMoreData" (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content  loadingText="Loading more data..."></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n    <!-- <ion-list *ngSwitchCase="\'contracts\'" style="padding:8px;">-->\n        <div style="padding:8px;" *ngIf = "this.findWork == 1">\n          <div class="sub_hst">\n            <h3>Active/Completed Contracts</h3>\n          </div>\n          <div *ngIf="lenght_active!=0">\n              <ion-card *ngFor="let contracts of active_contracts">\n                  <ion-card-content>\n      <!-- <div class="first_tab" style="padding:8px;"  > -->\n        <div class="history_para " (click)="activePage(contracts.REQUESTID)"><span class="nm_dld">{{contracts.title}}</span>\n        \n\n         <div class="act_cmplte">\n          <span  *ngIf="contracts.status==1">Active</span>\n          <span *ngIf="contracts.status==2">Completed</span>\n\n         </div>\n\n\n        <ion-grid no-padding class="country_b">\n          <ion-row>\n            <ion-col col-6>\n              <div class="john">\n                <ion-avatar item-start class="jecob_pic" *ngIf="contracts.profilepicture">\n                  <img src="{{image_path}}{{contracts.profilepicture}}">\n                </ion-avatar>\n                <ion-avatar item-start class="jecob_pic" *ngIf="!contracts.profilepicture">\n                  <img src="{{image_path}}noprofilepicture.gif">\n                </ion-avatar>\n                <p class="usr_stt">Post by {{contracts.username}}</p>\n              </div>\n            </ion-col>\n            <ion-col col-6>\n              <div float-right class="john">\n                <ion-avatar item-start class="jecob_pic" *ngIf="contracts.request_user_pic">\n                  <img src="{{image_path}}{{contracts.request_user_pic}}">\n                </ion-avatar>\n                <ion-avatar item-start class="jecob_pic" *ngIf="!contracts.request_user_pic">\n                  <img src="{{image_path}}noprofilepicture.gif">\n                </ion-avatar>\n               \n                <p class="usr_stt">Hired by {{contracts.request_user}}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n        <ion-grid no-padding class="country_b msg">\n          <ion-row>\n            <ion-col col-6>USD  {{contracts.scriptolutionprice}}</ion-col>\n            <ion-col col-6 text-right><button ion-button small color="yellow" class="submit sub_lk" (click)="Chatting(contracts.offer_userid,contracts.request_user)" *ngIf="contracts.USERID==user_id"><ion-icon name="mail" item-end color="dark"></ion-icon> Send Message</button>\n              <button ion-button small color="yellow" class="submit sub_lk" (click)="Chatting(contracts.USERID,contracts.username)" *ngIf="contracts.USERID!=user_id"><ion-icon name="mail" item-end color="dark"></ion-icon> Send Message</button></ion-col>\n          </ion-row>\n        </ion-grid>\n        <!-- </div> -->\n      </ion-card-content>\n    </ion-card>\n      </div>\n      <div class="meage_shw" *ngIf="lenght_active==0"><img class="no_mess" src="assets/images/contract.png">No Contracts</div>\n\n      <!--div class="first_tab" style="padding:8px;">\n        <div class="history_para">Lorem Ipsum is simply dummy text of the printing and typesetting</div>\n\n        <ion-grid no-padding class="country_b">\n          <ion-row>\n            <ion-col col-6>\n              <div class="john">\n                <ion-avatar item-start class="jecob_pic">\n                  <img src="assets/images/a.jpg">\n                </ion-avatar>\n                <p>Post by John</p>\n              </div>\n            </ion-col>\n            <ion-col col-6>\n              <div float-right class="john">\n                <ion-avatar item-start class="jecob_pic">\n                  <img src="assets/images/a.jpg">\n                </ion-avatar>\n                <p>Post by John</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid no-padding class="country_b msg">\n          <ion-row>\n            <ion-col col-6>USD 125.00</ion-col>\n            <ion-col col-6 text-right><button ion-button small color="yellow" class="submit"><ion-icon name="mail" item-end color="dark"></ion-icon> Send Message</button></ion-col>\n          </ion-row>\n        </ion-grid>\n      </div> -->\n    </div>\n\n\n\n    <!-- <ion-list *ngSwitchCase="\'history\'" style="padding:8px;"> -->\n        <ion-list style="padding:8px;" *ngIf = "this.findWork == 2">\n          <div *ngIf="history_lenght!=0">\n      <div class="first_tab" style="padding:8px;" *ngFor="let history_view of history_details">\n        <!-- <ion-card *ngFor="let contracts of active_contracts">\n                  <ion-card-content> -->\n        <ion-grid no-padding class="country">\n          <ion-row>\n            <ion-col col-7><button ion-button clear no-margin no-padding class="title ttle_small" (click)="hsdescriptionPage(history_view.REQUESTID);">{{history_view.title}}</button></ion-col>\n            <ion-col col-3 text-right>\n              <ion-icon item-end><span *ngIf="format==history_view.creatededs">{{history_view.created | date:\'h:mm a\'}}</span>\n                <span *ngIf="format!=history_view.creatededs">{{history_view.created | date:\'MMM d, yyyy\'}}</span></ion-icon>\n            </ion-col>\n            <ion-col col-1 text-right>\n              <button ion-button clear icon-only no-margin style="height: 1.5rem;" (click)="editjobPage(history_view);"  [hidden]="history_view.status!=\'0\'">\n          <ion-icon name="create" item-end></ion-icon>\n      </button>\n            </ion-col>\n            <ion-col col-1 text-right>\n              <button ion-button clear icon-only no-margin style="height: 1.5rem;" (click)="presentConfirm(history_view.REQUESTID)" [hidden]="history_view.totaloffers!=0" >\n      <ion-icon name="trash" item-end></ion-icon>\n    </button\n    ></ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid no-padding class="country_b">\n  <ion-row>\n    <ion-col col-4>\n      <h3>Delivery Days</h3>\n      <p>{{history_view.scriptolutiondays}}</p>\n    </ion-col>\n    <ion-col col-4>\n      <h3>Budget</h3>\n      <p>USD {{history_view.scriptolutionprice}}</p>\n    </ion-col>\n    <ion-col col-4>\n      <h3>Job Status</h3>\n      <p style="color:#c4013e;" *ngIf="history_view.status==\'0\'">New</p>\n      <p style="color:#c4013e;" *ngIf="history_view.status==\'1\'">Active</p>\n      <p style="color:#c4013e;" *ngIf="history_view.status!=\'0\' && history_view.status!=\'1\'">Closed</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n\n<button ion-button small color="yellow" class="submit align_st" [hidden]="history_view.totaloffers==0" (click)="views_offer(history_view.REQUESTID)">{{history_view.totaloffers}} Offers</button>\n\n      </div>\n      <!-- <button ion-button small color="yellow" class="submit" *ngFor="let i of i_lenght">{{i_lenght}}</button> -->\n      <!-- <div class="first_tab" style="padding:8px;">\n  <ion-grid no-padding class="country">\n  <ion-row>\n    <ion-col col-7><button ion-button clear no-margin no-padding class="title">Job Title here</button></ion-col>\n    <ion-col col-3 text-right><ion-icon item-end><span>july,16 2017</span></ion-icon></ion-col>\n    <ion-col col-1 text-right>\n      <button ion-button clear icon-only no-margin style="height: 1.5rem;">\n          <ion-icon name="create" item-end></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-1 text-right>\n      <button ion-button clear icon-only no-margin style="height: 1.5rem;">\n      <ion-icon name="trash" item-end></ion-icon>\n    </button\n    ></ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid no-padding class="country_b">\n  <ion-row>\n    <ion-col col-4>\n      <h3>Delivery Days</h3>\n      <p>10 Days</p>\n    </ion-col>\n    <ion-col col-4>\n      <h3>Budget</h3>\n      <p>USD 2000</p>\n    </ion-col>\n    <ion-col col-4>\n      <h3>Job Status</h3>\n      <p style="color:#c4013e;">New</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n\n<button ion-button small color="yellow" class="submit">3 Offers</button>\n\n  </div> -->\n  </div>\n  <div class="meage_shw" *ngIf="history_lenght==0"><img class="no_mess" src="assets/images/history.png"> No history yet !</div>\n    </ion-list>\n    <div *ngIf="show_in !=0 && this.findWork == 2 && history_lenght!=0">\n      <ion-infinite-scroll *ngIf="hasMoreData" (ionInfinite)="history_pagination($event)">\n        <ion-infinite-scroll-content  loadingText="Loading more data..."></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n    <!-- <div class="pagi">\n    <ul>\n      <li>1</li>\n      <li>2</li>\n    </ul>\n    </div> -->\n  <!-- </div> -->\n</ion-content>'/*ion-inline-end:"/Volumes/D/Bhumika_Grover/jewellery_new/bowdaa_ios1/src/pages/tab1/tab1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Events */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_8__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_variable_variable__["a" /* VariableProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_16__angular_common__["a" /* DatePipe */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* App */]])
], Tab1Page);

//# sourceMappingURL=tab1.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map