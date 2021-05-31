(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_all_news_all_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/all-news/all-news.component */ "./src/app/components/all-news/all-news.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_singlepage_singlepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/singlepage/singlepage.component */ "./src/app/components/singlepage/singlepage.component.ts");






var routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'allnews', component: _components_all_news_all_news_component__WEBPACK_IMPORTED_MODULE_3__["AllNewsComponent"], data: {
            title: 'allnews',
            breadcrumb: [
                {
                    label: 'Home',
                    url: '/homepage'
                },
                {
                    label: 'News',
                    url: ''
                }
            ]
        },
    },
    { path: 'homepage/:id', component: _components_singlepage_singlepage_component__WEBPACK_IMPORTED_MODULE_5__["SinglepageComponent"], data: {
            title: 'News Details',
            breadcrumb: [
                {
                    label: 'Home',
                    url: '/homepage'
                },
                {
                    label: 'News Details',
                    url: ''
                }
            ]
        },
    },
    { path: 'homepage/allnews/:id', component: _components_singlepage_singlepage_component__WEBPACK_IMPORTED_MODULE_5__["SinglepageComponent"], data: {
            title: 'News Details',
            breadcrumb: [
                {
                    label: 'Home',
                    url: '/homepage'
                },
                {
                    label: 'News',
                    url: '/allnews'
                },
                {
                    label: 'News Details',
                    url: ''
                }
            ]
        },
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar>\n  \n</app-nav-bar>\n\n<router-outlet></router-outlet>\n\n\n<app-footer>\n  \n</app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#slider .carousel-item {\n  height: 500px; }\n\n.carousel-caption {\n  font-size: 18px; }\n\n.carousel-item > img {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXG1vYXRhelxcYW5ndWxhciBQcm9qZWN0c1xcbGluay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuI3NsaWRlciAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJvdXNlbC1pdGVtPmltZyB7XHJcbiAgICB3aWR0aDogMTAwJVxyXG4gIH1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'link';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/components/slider/slider.component.ts");
/* harmony import */ var _components_home_news_home_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home-news/home-news.component */ "./src/app/components/home-news/home-news.component.ts");
/* harmony import */ var _components_all_news_all_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/all-news/all-news.component */ "./src/app/components/all-news/all-news.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_helped_helped_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/helped/helped.component */ "./src/app/components/helped/helped.component.ts");
/* harmony import */ var ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-dynamic-breadcrumb */ "./node_modules/ng-dynamic-breadcrumb/fesm5/ng-dynamic-breadcrumb.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _components_singlepage_singlepage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/singlepage/singlepage.component */ "./src/app/components/singlepage/singlepage.component.ts");



















 // <-- import the module
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["fas"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fab"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_11__["SliderComponent"],
                _components_home_news_home_news_component__WEBPACK_IMPORTED_MODULE_12__["HomeNewsComponent"],
                _components_all_news_all_news_component__WEBPACK_IMPORTED_MODULE_13__["AllNewsComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"],
                _components_helped_helped_component__WEBPACK_IMPORTED_MODULE_16__["HelpedComponent"],
                _components_singlepage_singlepage_component__WEBPACK_IMPORTED_MODULE_19__["SinglepageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                ng_dynamic_breadcrumb__WEBPACK_IMPORTED_MODULE_17__["NgDynamicBreadcrumbModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/all-news/all-news.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/all-news/all-news.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\n  <div class=\"container\">\n    <app-ng-dynamic-breadcrumb [symbol]=\"breadcrumbConfig['symbol']\"  [bgColor]=\"breadcrumbConfig['bgColor']\" [fontSize]=\"breadcrumbConfig['fontSize']\" [fontColor]=\"breadcrumbConfig['fontColor']\" [lastLinkColor]=\"breadcrumbConfig['lastLinkColor']\" ></app-ng-dynamic-breadcrumb>\n   \n  \n  </div>\n\n  <div class=\"container\">\n    <h4>\n      News\n    </h4>\n\n\n   <div class=\"row\">\n     <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <label >From</label>\n        <input type=\"date\" placeholder=\"Select\" class=\"textbox-n\" type=\"text\" onfocus=\"(this.type='date')\" id=\"date\" class=\"form-control\"  id=\"datefrom\" \n         [(ngModel)]=\"myDateValue\" >\n\n       \n      \n      </div>\n      \n\n     </div>\n\n     <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <label >To</label>\n        <input type=\"date\" placeholder=\"Select\" class=\"textbox-n\" type=\"text\" onfocus=\"(this.type='date')\" id=\"date\" class=\"form-control\"  id=\"dateto\"  class=\"form-control\"\n        \n         [(ngModel)]=\"toDate\" >\n      \n      </div>\n\n     </div>\n     <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <label for=\"exampleSelect1\"> Category</label>\n        <select class=\"form-control\" [(ngModel)]=\"categoryselect\" name=\"Category\" #category=\"ngModel\">\n          <option  [ngValue]=\"undefined\" disabled selected>Select</option> \n          <option *ngFor=\"let cat of categories\" value=\"{{cat.id}}\">{{cat.name}}</option>\n        \n        </select>\n          \n      </div>\n\n     </div>\n\n     <div class=\"col-md-5\">\n        <div class=\"input-group\">\n            <div class=\"form-outline\">\n            \n              <label class=\"form-label\" for=\"form1\"></label>\n              <input type=\"text\" class=\"form-control input\" [(ngModel)]=\"title\" placeholder=\"Search Services\"/>\n            </div>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"filterDate()\">\n              \n              <fa-icon [icon]=\"['fas', 'search']\" size=\"\" style=\"color: #ffffff;\"></fa-icon>\n          \n            </button>\n        </div>\n     \n     \n     </div>\n     <div class=\"col-md-1\">\n       \n      <div class=\"sortby\" >\n        <span (click)=\"showmenu()\">\n          Sortby \n          <fa-icon [icon]=\"['fas', 'sort']\" size=\"\" style=\"\"></fa-icon>\n        </span>\n        <ul class=\"list-unstyled\" id=\"sortdata\">\n          <li (click)=\"sortdata()\">\n            A-Z\n          </li>\n          <li (click)=\"sortdata2()\">\n            Z-A\n          </li>\n        </ul>\n\n      \n      </div>\n     </div>\n\n\n   </div>\n<!-- ======== start news row  -->\n\n\n<div class=\"row news\">\n  <ng-container  *ngFor=\"let item of duplicateArray | paginate: { itemsPerPage: 10, currentPage: p }\">\n\n  \n  <div class=\"col-md-4 col-12\" >\n    <div class=\"card\"  >\n      <img src=\"{{item.urlToImage}}\" class=\"card-img-top\" alt=\"...\" (click)=\"goto([item.id])\">\n      <div class=\"card-body\">\n        <div style=\"text-align: right;\">\n          <span  (click)=\"addtowishlist([item.id])\">\n\n         \n          <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"nameval==true || allwish.indexOf(item.id | json) == -1\" width=\"16\" \n          height=\"16\" fill=\"#8DC043\" class=\"bi bi-heart-fill\" viewBox=\"0 0 16 16\"  style=\"margin-right: 20px\">\n            <path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/>\n          </svg>\n       \n          <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"nameval==false && allwish.indexOf(item.id | json) !== -1\"  width=\"16\" height=\"16\" fill=\"#8DC043\"  style=\"margin-right: 20px\" class=\"bi bi-heart-fill\" viewBox=\"0 0 16 16\">\n            <path fill-rule=\"evenodd\" d=\"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"/>\n          </svg>\n        </span>\n\n\n          <fa-icon [icon]=\"['fas', 'share-alt']\" size=\"\"  style=\"margin-right: 20px;color: #8DC043;\"></fa-icon>\n       \n        </div>\n        <h5 class=\"card-title\">{{item.title}}</h5>\n        <ul class=\"list-unstyled\" *ngFor=\"let cat of categories\">\n          <li *ngIf=\"item.sourceID ==cat.id\">\n            <a>\n              {{cat.name}}\n            </a>\n          </li>\n        \n        </ul>\n        <p class=\"card-text\">\n          {{item.description}}\n        </p>\n        <div class=\"date\">\n          \n          <fa-icon [icon]=\"['fas', 'calendar']\" size=\"\" style=\"margin-right: 10px;\"></fa-icon>\n          <span>\n            {{item.publishedAt}}\n          </span>\n        \n        </div>\n      </div>\n    </div>\n\n  </div>\n</ng-container>\n</div>\n\n\n<div class=\"pag\">\n  \n<pagination-controls (pageChange)=\"p = $event\"  previousLabel=\"\"\nnextLabel=\"\"></pagination-controls>\n\n</div>\n   <!-- ====end of all page  -->\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/all-news/all-news.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/all-news/all-news.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all {\n  background-color: #EFEFEF !important;\n  padding-bottom: 1%; }\n  .all .form-outline {\n    width: 83%; }\n  .all h4 {\n    font-size: 39px;\n    margin-bottom: 2%;\n    font-weight: 400; }\n  .all label {\n    display: inline-block;\n    margin-bottom: 8px; }\n  .all button {\n    margin-top: 33px;\n    height: 37px;\n    background-color: #8dc043;\n    border: none; }\n  .all .input {\n    margin-top: 8px; }\n  .all .sortby {\n    margin-top: 41%;\n    color: #8dc043;\n    cursor: pointer; }\n  .all .sortby ul {\n      background-color: white;\n      text-align: center;\n      padding: 8px;\n      display: none;\n      margin-top: 10px;\n      position: absolute;\n      z-index: 9;\n      width: 100px; }\n  .all .sortby ul li {\n        margin-bottom: 5px; }\n  .all .danger {\n    color: red; }\n  .news {\n  margin-top: 1%; }\n  .news .card {\n    margin-bottom: 20px;\n    min-height: 620px;\n    position: relative;\n    box-shadow: 0px 0px 10px 0px #ccc7c7; }\n  .news .card img {\n      height: 220px; }\n  .news .card-title {\n    font-size: 28px; }\n  .news .card-text {\n    color: #565960;\n    font-size: 16px;\n    text-align: justify; }\n  .news ul {\n    display: inline-flex; }\n  .news ul li {\n      margin-right: 10px; }\n  .news ul li a {\n        background-color: #E3E3E3;\n        border-radius: 7px;\n        font-size: 12px;\n        padding: 3px 9px;\n        text-decoration: none; }\n  .news .date {\n    position: absolute;\n    bottom: 11px; }\n  .news .date fa-icon {\n      color: #8DC043 !important; }\n  .news .date span {\n      font-size: 12px;\n      font-weight: 600; }\n  .pag {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwtbmV3cy9GOlxcbW9hdGF6XFxhbmd1bGFyIFByb2plY3RzXFxsaW5rL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhbGwtbmV3c1xcYWxsLW5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJSSxvQ0FBb0M7RUFDcEMsa0JBQWtCLEVBQUE7RUFMdEI7SUFFTSxVQUFVLEVBQUE7RUFGaEI7SUFTUSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBWHhCO0lBZ0JRLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtFQWpCMUI7SUFvQlEsZ0JBQWdCO0lBQ3BCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWSxFQUFBO0VBdkJoQjtJQTBCUSxlQUFlLEVBQUE7RUExQnZCO0lBNkJRLGVBQWU7SUFDbkIsY0FBYztJQUNkLGVBQWUsRUFBQTtFQS9CbkI7TUFpQ1EsdUJBQXVCO01BQzNCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFlBQVksRUFBQTtFQXhDaEI7UUEwQ1Esa0JBQWtCLEVBQUE7RUExQzFCO0lBK0NRLFVBQVMsRUFBQTtFQUtiO0VBQ0ksY0FBYyxFQUFBO0VBRGxCO0lBR1EsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0NBQW9DLEVBQUE7RUFONUM7TUFRWSxhQUFhLEVBQUE7RUFSekI7SUFZUSxlQUFlLEVBQUE7RUFadkI7SUFlUSxjQUFjO0lBQ2QsZUFBZTtJQUVmLG1CQUFtQixFQUFBO0VBbEIzQjtJQXFCUSxvQkFBb0IsRUFBQTtFQXJCNUI7TUF1Qlksa0JBQWtCLEVBQUE7RUF2QjlCO1FBeUJnQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIscUJBQXFCLEVBQUE7RUE3QnJDO0lBa0NRLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7RUFuQ3BCO01BcUNZLHlCQUF5QixFQUFBO0VBckNyQztNQXdDWSxlQUFlO01BQ2xCLGdCQUFnQixFQUFBO0VBSzdCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsbC1uZXdzL2FsbC1uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbHtcclxuICAuZm9ybS1vdXRsaW5le1xyXG4gICAgICB3aWR0aDogODMlO1xyXG4gIH1cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUYgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICAgXHJcblxyXG4gICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAzOXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAzM3B4O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhkYzA0MztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgIC5pbnB1dHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuc29ydGJ5e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQxJTtcclxuICAgIGNvbG9yOiAjOGRjMDQzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdWx7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBsaXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAuZGFuZ2Vye1xyXG4gICAgICAgIGNvbG9yOnJlZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgICAubmV3c3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgICAuY2FyZHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNjIwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCAjY2NjN2M3O1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLXRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTY1OTYwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGF0ZXtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDExcHg7XHJcbiAgICAgICAgICAgIGZhLWljb257XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzhEQzA0MyAhaW1wb3J0YW50OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbi5wYWd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/all-news/all-news.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/all-news/all-news.component.ts ***!
  \***********************************************************/
/*! exports provided: AllNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllNewsComponent", function() { return AllNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/api/newsapi.json */ "./src/assets/api/newsapi.json");
var _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/api/newsapi.json */ "./src/assets/api/newsapi.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AllNewsComponent = /** @class */ (function () {
    function AllNewsComponent(router) {
        this.router = router;
        this.breadcrumbConfig = {
            fontSize: '14px',
            fontColor: '#038896',
            lastLinkColor: '#AFAFAF',
            symbol: ' > ',
        };
        this.nameval = true;
        this.allwish = [];
        this.duplicateArray = [];
        this.showalert = false;
    }
    AllNewsComponent.prototype.ngOnInit = function () {
        this.news = _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_2__["articles"];
        this.duplicateArray = this.news;
        this.categories = _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_2__["sourceCategory"];
        console.log(_assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_2__["articles"]);
        console.log(_assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_2__["sourceCategory"]);
    };
    AllNewsComponent.prototype.addtowishlist = function (item_id) {
        this.id = item_id;
        this.allwish.push(String(item_id));
        this.nameval = false;
    };
    AllNewsComponent.prototype.reverseAndTimeStamp = function (dateString) {
        // console.log(dateString);
        var reverse = dateString.split("T")[0];
        console.log(reverse);
        return reverse;
    };
    AllNewsComponent.prototype.filterDate = function () {
        var _this = this;
        var fromdate = this.myDateValue;
        console.log(this.title);
        var todate = this.toDate;
        console.log(this.categoryselect);
        if (this.myDateValue && this.toDate && this.categoryselect == undefined && this.title == undefined) {
            var selectedMembers = this.news.filter(function (m) {
                return _this.reverseAndTimeStamp(m.publishedAt) >= _this.reverseAndTimeStamp(fromdate)
                    &&
                        _this.reverseAndTimeStamp(m.publishedAt) <= _this.reverseAndTimeStamp(todate);
            });
            this.duplicateArray = selectedMembers;
        }
        else if (this.categoryselect != undefined && !this.myDateValue && !this.toDate && this.title == undefined) {
            var selectedMembers = this.news.filter(function (m) {
                return m.sourceID == _this.categoryselect;
            });
            this.duplicateArray = selectedMembers;
        }
        else if (this.title != undefined && this.categoryselect == undefined && !this.myDateValue && !this.toDate) {
            var selectedMembers = this.news.filter(function (m) {
                return m.title.includes(_this.title);
            });
            this.duplicateArray = selectedMembers;
        }
        else if (this.title != undefined && this.categoryselect != undefined && !this.myDateValue && !this.toDate) {
            var selectedMembers = this.news.filter(function (m) {
                return m.title.includes(_this.title) && m.sourceID == _this.categoryselect;
            });
            this.duplicateArray = selectedMembers;
        }
        else if (this.title == undefined && this.categoryselect != undefined && this.myDateValue && this.toDate) {
            var selectedMembers = this.news.filter(function (m) {
                return _this.reverseAndTimeStamp(m.publishedAt) >= _this.reverseAndTimeStamp(fromdate)
                    &&
                        _this.reverseAndTimeStamp(m.publishedAt) <= _this.reverseAndTimeStamp(todate)
                    && m.sourceID == _this.categoryselect;
            });
            this.duplicateArray = selectedMembers;
        }
        else {
            var selectedMembers = this.news.filter(function (m) {
                return _this.reverseAndTimeStamp(m.publishedAt) >= _this.reverseAndTimeStamp(fromdate)
                    &&
                        _this.reverseAndTimeStamp(m.publishedAt) <= _this.reverseAndTimeStamp(todate)
                    && m.sourceID == _this.categoryselect && m.title.includes(_this.title);
            });
            this.duplicateArray = selectedMembers;
        }
        console.log(this.duplicateArray); // the result objects
    };
    AllNewsComponent.prototype.showmenu = function () {
        var x = document.getElementById("sortdata");
        if (x.style.display === "block") {
            x.style.display = "none";
        }
        else {
            x.style.display = "block";
        }
    };
    AllNewsComponent.prototype.sortdata = function () {
        this.duplicateArray.sort(function (a, b) { return a.title > b.title ? 1 : -1; });
        var x = document.getElementById("sortdata");
        x.style.display = "none";
        // return this.duplicateArray.sort((a, b) => {
        //   return <any>new Date(b.publishedAt) - <any>new Date(a.publishedAt);
        // });
    };
    AllNewsComponent.prototype.sortdata2 = function () {
        this.duplicateArray.sort(function (a, b) { return a.title < b.title ? 1 : -1; });
        var x = document.getElementById("sortdata");
        x.style.display = "none";
        // return this.duplicateArray.sort((a, b) => {
        //   return <any>new Date(b.publishedAt) - <any>new Date(a.publishedAt);
        // });
    };
    AllNewsComponent.prototype.goto = function (post_id) {
        console.log(post_id);
        console.log(post_id);
        this.router.navigate(['homepage/allnews/' + post_id]);
    };
    AllNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-news',
            template: __webpack_require__(/*! ./all-news.component.html */ "./src/app/components/all-news/all-news.component.html"),
            styles: [__webpack_require__(/*! ./all-news.component.scss */ "./src/app/components/all-news/all-news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AllNewsComponent);
    return AllNewsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2 col-12\">\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"\">\n              News\n            </a>\n          </li>\n          <li>\n            <a href=\"\">\n              Events\n            </a>\n          </li>\n          <li>\n            <a href=\"\">\n              About\n            </a>\n          </li>\n          <li>\n            <a href=\"\">\n              FAQs\n            </a>\n          </li>\n\n        </ul>\n\n      </div>\n\n      <div class=\"col-md-3 col-12\">\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"\">\n              Privacy Policy\n            </a>\n          </li>\n          <li>\n            <a href=\"\">\n              Contact Us\n            </a>\n          </li>\n          <li>\n            <a href=\"\">\n              Complains\n            </a>\n          </li>\n         \n\n        </ul>\n\n      </div>\n      <div class=\"col-md-4 col-12\">\n        <div class=\"subscribe\">\n          <h5>\n            Subscribe to Newsletter\n          </h5>\n          <form (ngSubmit)=\"f.form.valid && onSubmit(f)\" #f=\"ngForm\" novalidate>\n            <input required type=\"text\" class=\"\" ngModel #email=\"ngModel\" id=\"email\" name=\"email\" placeholder=\"Email Address\" required>\n         \n            <button type=\"submit\" class=\"\" expand=\"block\">\n              Subscribe\n          </button>\n          <div *ngIf=\"f.submitted && email.invalid\">\n            <div *ngIf=\"email.errors.required\" class=\"danger\">Email is required</div>\n        </div>\n\n          </form>\n\n        </div>\n\n      </div>\n      <div class=\"col-md-3 col-12\">\n        <h5>\n          Follow us on\n        </h5>\n        <ul class=\"list-unstyled social\">\n          <li>\n           \n              \n              <fa-icon [icon]=\"['fab', 'instagram']\" size=\"\" (click)=\"openurl('https://www.instagram.com')\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n          \n          </li>\n          <li>\n           \n              <fa-icon [icon]=\"['fab', 'youtube']\" size=\"\" (click)=\"openurl('https://www.youtube.com')\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n           \n          </li>\n          <li>\n           \n              \n              <fa-icon [icon]=\"['fab', 'linkedin']\" size=\"\" (click)=\"openurl('https://www.linkedin.com')\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n          \n          </li>\n          <li>\n          \n              <fa-icon [icon]=\"['fab', 'facebook-f']\" size=\"\" (click)=\"openurl('https://www.facebook.com')\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n           \n          </li>\n          <li>\n           \n              <fa-icon [icon]=\"['fab', 'twitter']\" size=\"\" (click)=\"openurl('https://www.twitter.com')\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n           \n          </li>\n\n        </ul>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"copyright\">\n  <p>\n    All rights reserved - Link Development Company © 2020\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #D9D9D9;\n  padding: 49px 0 28px; }\n  .footer ul li a {\n    color: #565960;\n    text-decoration: none;\n    font-size: 16px; }\n  .footer h5 {\n    font-size: 16px;\n    color: #565960;\n    font-weight: 400; }\n  .footer form input {\n    height: 38px;\n    border-radius: 5px;\n    border: none;\n    padding: 11px 11px;\n    width: 66%; }\n  .footer form button {\n    height: 40px;\n    border: none;\n    background-color: #8DC043;\n    color: white;\n    padding: 0px 10px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px; }\n  .footer .social {\n    display: inline-flex; }\n  .footer .social li fa-icon {\n      color: #565960 !important; }\n  .footer .danger {\n    color: red; }\n  .copyright {\n  text-align: center;\n  color: white;\n  background-color: #038896;\n  font-size: 16px;\n  padding: 14px 0px 1px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRjpcXG1vYXRhelxcYW5ndWxhciBQcm9qZWN0c1xcbGluay9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUE7RUFGeEI7SUFNZ0IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlLEVBQUE7RUFSL0I7SUFjUSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQixFQUFBO0VBaEJ4QjtJQW9CWSxZQUFZO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQXhCZDtJQTJCWSxZQUFZO0lBQ3BCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsK0JBQStCLEVBQUE7RUFqQ25DO0lBdUNZLG9CQUFvQixFQUFBO0VBdkNoQztNQTJDb0IseUJBQXlCLEVBQUE7RUEzQzdDO0lBa0RRLFVBQVUsRUFBQTtFQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xyXG4gICAgcGFkZGluZzogNDlweCAwIDI4cHg7XHJcbiAgICB1bHtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTY1OTYwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNTY1OTYwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMXB4IDExcHg7XHJcbiAgICB3aWR0aDogNjYlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4REMwNDM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFse1xyXG4gICAgICBcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZmEtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU2NTk2MCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZGFuZ2Vye1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbn1cclxuLmNvcHlyaWdodHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzg4OTY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDBweCAxcHggMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.model = {};
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.onSubmit = function (form) {
        this.attributes = form.value.email;
        console.log(this.attributes);
    };
    FooterComponent.prototype.openurl = function (url) {
        window.open(url, '_system');
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/helped/helped.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/helped/helped.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"last_banner\">\n<div class=\"container\">\n\n\n  <div class=\"text\">\n    <h4>\n      How we have helped\n    </h4>\n    <p>\n      See how Al Foundation have promoted change locally and to the world \n    </p>\n  </div>\n<ul class=\"list-unstyled\">\n  <li class=\"diamond\">\n  \n    <div class=\"inner-diamond\">\n      <img src=\"../../../assets/images/5.png\" alt=\"\">\n     <p style=\"right: -70px;\n     top: 24px;\">\n       Find place\n     </p>\n     <fa-icon [icon]=\"['fas', 'plus']\" size=\"\" (click)=\"openurl('https://www.instagram.com')\"></fa-icon>\n    </div>\n \n  </li>\n  <li class=\"diamond\">\n  \n    <div class=\"inner-diamond\">\n      <img src=\"../../../assets/images/6.png\" style=\"right: -63px;top: 8px;\" alt=\"\">\n     <p style=\"top: 51px;right: -57px;\">\n      A’awen\n     </p>\n     <fa-icon [icon]=\"['fas', 'plus']\" style=\"top: 69px;\" (click)=\"openurl('https://www.instagram.com')\"></fa-icon>\n    </div>\n \n  </li>\n  <li class=\"diamond\">\n  \n    <div class=\"inner-diamond\">\n      <img src=\"../../../assets/images/2.png\" alt=\"\">\n     <p style=\"right: -45px;\">\n      Omniyat\n     </p>\n     <fa-icon [icon]=\"['fas', 'plus']\" style=\"top: 33px;\n     right: -21px;\" (click)=\"openurl('https://www.instagram.com')\"></fa-icon>\n    </div>\n \n  </li>\n  <li class=\"diamond\">\n  \n    <div class=\"inner-diamond\">\n      <img src=\"../../../assets/images/7.png\" alt=\"\">\n     <p style=\"top: 27px;\n     right: -58px;\">\n      Give Time\n     </p>\n     <fa-icon [icon]=\"['fas', 'plus']\" size=\"\" (click)=\"openurl('https://www.instagram.com')\"></fa-icon>\n    </div>\n \n  </li>\n</ul>\n\n<ul class=\"list-unstyled list_two\">\n  <li class=\"diamond\">\n  \n    <div class=\"inner-diamond\">\n      <img src=\"../../../assets/images/1.png\" alt=\"\">\n     <p>\n      Tofoula\n     </p>\n     <fa-icon [icon]=\"['fas', 'plus']\" style=\"right: -57px;\n     top: 30px;\" (click)=\"openurl('https://www.instagram.com')\"></fa-icon>\n    </div>\n \n  </li>\n  <li class=\"diamond\">\n  \n    <div class=\"inner-diamond\">\n      <img src=\"../../../assets/images/4.png\" alt=\"\">\n     <p style=\"top: 30px;\">\n      Fundraising\n     </p>\n     <fa-icon [icon]=\"['fas', 'plus']\" style=\"right: -57px;\n     top: 45px;\" (click)=\"openurl('https://www.instagram.com')\"></fa-icon>\n    </div>\n \n  </li>\n\n  <li class=\"diamond\">\n  \n    <div class=\"inner-diamond\">\n      <img src=\"../../../assets/images/3.png\" alt=\"\">\n     <p>\n      Zakat\n     </p>\n     <fa-icon [icon]=\"['fas', 'plus']\" style=\"right: -49px;\n     top: 34px;\" (click)=\"openurl('https://www.instagram.com')\"></fa-icon>\n          \n\n    </div>\n \n  </li>\n</ul>\n \n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/helped/helped.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/helped/helped.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".last_banner {\n  background: url('last_back.png');\n  padding: 5% 0;\n  background-position: center;\n  background-repeat: repeat;\n  background-size: auto; }\n  .last_banner ul {\n    text-align: right;\n    margin-top: 85px; }\n  .last_banner .list_two {\n    text-align: center;\n    margin-left: 58px;\n    margin-top: -0px;\n    margin-bottom: 38px; }\n  .last_banner .text {\n    color: white;\n    text-align: center; }\n  .last_banner .text h4 {\n      font-size: 60px; }\n  .last_banner .text p {\n      font-size: 30px; }\n  .last_banner .diamond {\n    width: 200px;\n    height: 200px;\n    position: relative;\n    margin-right: 97px;\n    margin-top: 102px;\n    display: inline-block;\n    transition: all 0.3s; }\n  .last_banner .diamond .inner-diamond {\n      position: absolute;\n      color: white;\n      top: 19px; }\n  .last_banner .diamond .inner-diamond p {\n        right: -56px;\n        top: 14px;\n        position: relative; }\n  .last_banner .diamond .inner-diamond img {\n        position: relative;\n        right: -55px; }\n  .last_banner .diamond .inner-diamond fa-icon {\n        position: relative;\n        top: 46px;\n        right: -34px; }\n  .last_banner .diamond::before {\n      position: absolute;\n      display: block;\n      content: \"\";\n      width: 200px;\n      height: 200px;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      -webkit-transform: rotate(45deg);\n      -webkit-transition: border-color 0.3s;\n      -moz-transform: rotate(45deg);\n      -moz-transition: border-color 0.3s;\n      transform: rotate(45deg);\n      box-shadow: 0px 0px 0px 2px white;\n      transition: all 0.3s; }\n  .last_banner .diamond:hover:before {\n      background-color: #8DC043; }\n  @media (min-width: 768px) {\n  .last_banner {\n    background-size: cover;\n    background-repeat: no-repeat; }\n    .last_banner .list_two {\n      margin-left: 113px;\n      margin-top: -77px; }\n    .last_banner .diamond {\n      margin-top: 25px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWxwZWQvRjpcXG1vYXRhelxcYW5ndWxhciBQcm9qZWN0c1xcbGluay9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVscGVkXFxoZWxwZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFXSSxnQ0FBcUQ7RUFDckQsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7RUFmekI7SUFFUSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFIeEI7SUFNUSxrQkFBa0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtFQVR2QjtJQWlCUSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUFsQjFCO01Bb0JZLGVBQWUsRUFBQTtFQXBCM0I7TUF1QlksZUFBZSxFQUFBO0VBdkIzQjtJQTRCUSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQTRDckIsb0JBQW9CLEVBQUE7RUE3RTVCO01BbUNZLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osU0FBUyxFQUFBO0VBckNyQjtRQXVDWSxZQUFZO1FBQ1osU0FBUztRQUNULGtCQUFrQixFQUFBO0VBekM5QjtRQTRDZ0Isa0JBQWtCO1FBQ2xCLFlBQVksRUFBQTtFQTdDNUI7UUFnRGdCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsWUFBWSxFQUFBO0VBbEQ1QjtNQXVEWSxrQkFBa0I7TUFDdEIsY0FBYztNQUNkLFdBQVc7TUFDWCxZQUFZO01BQ1osYUFBYTtNQUNiLE9BQU87TUFDUCxNQUFNO01BQ04sUUFBUTtNQUNSLFNBQVM7TUFDVCxnQ0FBZ0M7TUFDaEMscUNBQXFDO01BQ3JDLDZCQUE2QjtNQUM3QixrQ0FBa0M7TUFDbEMsd0JBQXdCO01BQ3hCLGlDQUFpQztNQUNqQyxvQkFBb0IsRUFBQTtFQXRFNUI7TUEwRVkseUJBQXdCLEVBQUE7RUFZcEM7RUFDSTtJQUNJLHNCQUFzQjtJQUN0Qiw0QkFBNEIsRUFBQTtJQUZoQztNQUlRLGtCQUFrQjtNQUNsQixpQkFBaUIsRUFBQTtJQUx6QjtNQVFRLGdCQUFnQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWxwZWQvaGVscGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhc3RfYmFubmVye1xyXG4gICAgdWx7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODVweDtcclxuICAgIH1cclxuICAgIC5saXN0X3R3b3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNThweDtcclxuICAgIG1hcmdpbi10b3A6IC0wcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xyXG4gICAgfVxyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFzdF9iYWNrLnBuZyk7XHJcbiAgICBwYWRkaW5nOiA1JSAwO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGlhbW9uZCB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOTdweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDJweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgLmlubmVyLWRpYW1vbmR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0b3A6IDE5cHg7XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICByaWdodDogLTU2cHg7XHJcbiAgICAgICAgICAgIHRvcDogMTRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTU1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmEtaWNvbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNDZweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXI6YmVmb3Jle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4REMwNDM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgIFxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5sYXN0X2Jhbm5lcntcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgLmxpc3RfdHdve1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTEzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC03N3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlhbW9uZHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/helped/helped.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/helped/helped.component.ts ***!
  \*******************************************************/
/*! exports provided: HelpedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpedComponent", function() { return HelpedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpedComponent = /** @class */ (function () {
    function HelpedComponent() {
    }
    HelpedComponent.prototype.ngOnInit = function () {
    };
    HelpedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-helped',
            template: __webpack_require__(/*! ./helped.component.html */ "./src/app/components/helped/helped.component.html"),
            styles: [__webpack_require__(/*! ./helped.component.scss */ "./src/app/components/helped/helped.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpedComponent);
    return HelpedComponent;
}());



/***/ }),

/***/ "./src/app/components/home-news/home-news.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/home-news/home-news.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container section\">\n  <div class=\"row\">\n   <div class=\"col-md-6\">\n    <h4>\n      Latest News\n    </h4>\n   </div>\n\n   <div class=\"col-md-6 view\">\n    <span routerLink=\"/allnews\">\n      View All\n      <fa-icon [icon]=\"['fas', 'arrow-right']\" size=\"\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n          \n    </span>\n   </div>\n  </div>\n\n\n  <div class=\"row news\">\n    <ng-container  *ngFor=\"let item of news\">\n\n    \n    <div class=\"col-md-4 col-12\" *ngIf=\"item.showOnHomepage==true\">\n      <div class=\"card\"  >\n        <img src=\"{{item.urlToImage}}\" class=\"card-img-top\" alt=\"...\"  (click)=\"goto([item.id])\">\n        <div class=\"card-body\">\n          <div style=\"text-align: right;\">\n            <span  (click)=\"addtowishlist([item.id])\">\n\n           \n            <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"nameval==true || allwish.indexOf(item.id | json) == -1\" width=\"16\" \n            height=\"16\" fill=\"#8DC043\" class=\"bi bi-heart-fill\" viewBox=\"0 0 16 16\"  style=\"margin-right: 20px\">\n              <path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/>\n            </svg>\n         \n            <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"nameval==false && allwish.indexOf(item.id | json) !== -1\"  width=\"16\" height=\"16\" fill=\"#8DC043\"  style=\"margin-right: 20px\" class=\"bi bi-heart-fill\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\" d=\"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"/>\n            </svg>\n          </span>\n\n\n            <fa-icon [icon]=\"['fas', 'share-alt']\" size=\"\"  style=\"margin-right: 20px;color: #8DC043;\"></fa-icon>\n         \n          </div>\n          <h5 class=\"card-title\">{{item.title}}</h5>\n          <ul class=\"list-unstyled\" *ngFor=\"let cat of categories\">\n            <li *ngIf=\"item.sourceID ==cat.id\">\n              <a>\n                {{cat.name}}\n              </a>\n            </li>\n          \n          </ul>\n          <p class=\"card-text\">\n            {{item.description}}\n          </p>\n          <div class=\"date\">\n            \n            <fa-icon [icon]=\"['fas', 'calendar']\" size=\"\" style=\"margin-right: 10px;\"></fa-icon>\n            <span>\n              {{item.publishedAt}}\n            </span>\n          \n          </div>\n        </div>\n      </div>\n\n    </div>\n  </ng-container>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home-news/home-news.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/home-news/home-news.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  padding: 2% 0; }\n  .section .view {\n    text-align: right; }\n  .section .view span {\n      color: #8DC043 !important;\n      cursor: pointer; }\n  .section .view span fa-icon {\n        color: #8DC043 !important; }\n  .section .news {\n    margin-top: 1%; }\n  .section .news .card {\n      margin-bottom: 20px;\n      min-height: 580px;\n      position: relative;\n      box-shadow: 0px 0px 10px 0px #ccc7c7; }\n  .section .news .card img {\n        height: 220px; }\n  .section .news .card-title {\n      font-size: 28px; }\n  .section .news .card-text {\n      color: #565960;\n      font-size: 16px;\n      text-align: justify; }\n  .section .news ul {\n      display: inline-flex; }\n  .section .news ul li {\n        margin-right: 10px; }\n  .section .news ul li a {\n          background-color: #E3E3E3;\n          border-radius: 7px;\n          font-size: 12px;\n          padding: 3px 9px;\n          text-decoration: none; }\n  .section .news .date {\n      position: absolute;\n      bottom: 11px; }\n  .section .news .date fa-icon {\n        color: #8DC043 !important; }\n  .section .news .date span {\n        font-size: 12px;\n        font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLW5ld3MvRjpcXG1vYXRhelxcYW5ndWxhciBQcm9qZWN0c1xcbGluay9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZS1uZXdzXFxob21lLW5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7RUFEakI7SUFHUSxpQkFBaUIsRUFBQTtFQUh6QjtNQUtZLHlCQUF5QjtNQUN6QixlQUFlLEVBQUE7RUFOM0I7UUFRZ0IseUJBQXlCLEVBQUE7RUFSekM7SUFhUSxjQUFjLEVBQUE7RUFidEI7TUFlWSxtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixvQ0FBb0MsRUFBQTtFQWxCaEQ7UUFvQmdCLGFBQWEsRUFBQTtFQXBCN0I7TUF3QlksZUFBZSxFQUFBO0VBeEIzQjtNQTJCWSxjQUFjO01BQ2QsZUFBZTtNQUVmLG1CQUFtQixFQUFBO0VBOUIvQjtNQWlDWSxvQkFBb0IsRUFBQTtFQWpDaEM7UUFtQ2dCLGtCQUFrQixFQUFBO0VBbkNsQztVQXFDb0IseUJBQXlCO1VBQ3pCLGtCQUFrQjtVQUNsQixlQUFlO1VBQ2YsZ0JBQWdCO1VBQ2hCLHFCQUFxQixFQUFBO0VBekN6QztNQThDWSxrQkFBa0I7TUFDbEIsWUFBWSxFQUFBO0VBL0N4QjtRQWlEZ0IseUJBQXlCLEVBQUE7RUFqRHpDO1FBb0RnQixlQUFlO1FBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLW5ld3MvaG9tZS1uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XHJcbiAgICBwYWRkaW5nOiAyJSAwO1xyXG4gICAgLnZpZXd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6ICM4REMwNDMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmYS1pY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4REMwNDMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZXdze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgICAgIC5jYXJke1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1ODBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4ICNjY2M3Yzc7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtdGV4dHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NjU5NjA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRTNFMztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYXRle1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTFweDtcclxuICAgICAgICAgICAgZmEtaWNvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOERDMDQzICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home-news/home-news.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-news/home-news.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNewsComponent", function() { return HomeNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/api/newsapi.json */ "./src/assets/api/newsapi.json");
var _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/api/newsapi.json */ "./src/assets/api/newsapi.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeNewsComponent = /** @class */ (function () {
    function HomeNewsComponent(router) {
        this.router = router;
        this.nameval = true;
        this.allwish = [];
    }
    HomeNewsComponent.prototype.ngOnInit = function () {
        this.news = _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_2__["articles"];
        this.categories = _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_2__["sourceCategory"];
        console.log(_assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_2__["sourceCategory"]);
    };
    HomeNewsComponent.prototype.goto = function (post_id) {
        console.log(post_id);
        this.router.navigate(['homepage/' + post_id]);
    };
    HomeNewsComponent.prototype.addtowishlist = function (item_id) {
        this.id = item_id;
        this.allwish.push(String(item_id));
        this.nameval = false;
    };
    HomeNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-news',
            template: __webpack_require__(/*! ./home-news.component.html */ "./src/app/components/home-news/home-news.component.html"),
            styles: [__webpack_require__(/*! ./home-news.component.scss */ "./src/app/components/home-news/home-news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeNewsComponent);
    return HomeNewsComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider></app-slider>\n\n\n<app-home-news>\n\n</app-home-news>\n<app-helped>\n    \n</app-helped>"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/components/homepage/homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n<div class=\"container\" style=\"padding-left: 10%;\">\n  <div class=\"row\">\n    <div class=\"col-md-2 col-12\">\n      <ul class=\"list-unstyled social\">\n        <li>\n         \n          <fa-icon [icon]=\"['fab', 'twitter']\" size=\"\" (click)=\"openurl('https://www.twitter.com')\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n       \n      </li>\n      <li>\n        \n        <fa-icon [icon]=\"['fab', 'facebook-f']\" size=\"\" (click)=\"openurl('https://www.facebook.com')\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n     \n    </li>\n    <li>\n         \n            \n      <fa-icon [icon]=\"['fab', 'linkedin']\" size=\"\" (click)=\"openurl('https://www.linkedin.com')\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n  \n  </li>\n  <li>\n         \n    <fa-icon [icon]=\"['fab', 'youtube']\" size=\"\" (click)=\"openurl('https://www.youtube.com')\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n \n</li>\n\n  \n        <li>\n         \n            \n            <fa-icon [icon]=\"['fab', 'instagram']\" size=\"\" (click)=\"openurl('https://www.instagram.com')\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n        \n        </li>\n    \n      \n\n      </ul>\n    </div>\n    <div class=\"col-md-10 col-12\">\n      <ul class=\"list-unstyled last_menu\">\n        <li routerLink=\"/homepage\">\n          Home\n        </li>\n        <li>\n          About us\n          <ul class=\"sub list-unstyled\">\n            <li>Who are us</li>\n            <li>Why us</li>\n          </ul>\n        </li>\n        <li routerLink=\"/allnews\">\n          News\n          <ul class=\"sub list-unstyled\">\n            <li routerLink=\"/allnews\"> News</li>\n            <li> Events</li>\n          </ul>\n        </li>\n        <li>\n          Careers\n          <ul class=\"sub list-unstyled\">\n            \n            <li>Opportunities</li>\n          </ul>\n        </li>\n        <li>\n          Contact Us\n        </li>\n        <li>\n          Site Map\n        </li>\n     \n      </ul>\n    </div>\n  </div>\n\n</div>\n</div>\n\n<nav class=\"navbar-dark First\" aria-label=\"First navbar example\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"top-bar\">\n          <button class=\"navbar-toggler collapsed\" (click)=\"openNav()\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarsExample01\" aria-controls=\"navbarsExample01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <a class=\"navbar-brand\"  routerLink=\"/homepage\">\n            <img src=\"assets/images/Link_logo_vertical_color_Light_RGB.png\" alt=\"\">\n          </a>\n        </div>\n     </div>\n     <div class=\"col-md-4\">\n      <ul class=\"nav setting\">\n        <li class=\"nav-item\"><a  class=\"nav-link link-light px-2\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-search\" viewBox=\"0 0 16 16\">\n          <path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\"/>\n        </svg></a></li>\n        <li class=\"nav-item\"><a  class=\"nav-link link-light px-2\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bell\" viewBox=\"0 0 16 16\">\n          <path d=\"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z\"/>\n        </svg>\n       <span>\n         \n       </span>\n      </a></li>\n        <li class=\"nav-item\"><a  class=\"nav-link link-light px-2\">\n         \n            <img src=\"assets/images/98681.jpg\" alt=\"mdo\" width=\"32\" height=\"32\" class=\"rounded-circle\">\n            USER NAME\n        \n        </a></li>\n        <li class=\"nav-item\" style=\"position: relative;\"><a  class=\"nav-link link-light px-2\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-gear\" viewBox=\"0 0 16 16\">\n          <path d=\"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z\"/>\n          <path d=\"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z\"/>\n        </svg></a>\n      \n      </li>\n      </ul>\n     \n      \n      \n  \n     </div>\n  \n     \n\n    </div>\n  \n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The side navigation menu */\n.sidenav {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  z-index: 999;\n  /* Stay on top */\n  top: 0;\n  /* Stay at the top */\n  left: 0;\n  background-color: #038896;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  transition: 0.2s;\n  /* 0.5 second transition effect to slide in the sidenav */ }\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #ffffff;\n    display: block;\n    transition: 0.3s; }\n.sidenav a:hover {\n      color: #f1f1f1; }\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    left: -26px;\n    font-size: 36px;\n    margin-left: 50px; }\n.sidenav .last_menu li {\n    color: white;\n    font-size: 23px;\n    margin-bottom: 15px;\n    margin-top: 14px;\n    cursor: pointer;\n    transition: all 0.3s; }\n.sidenav .last_menu li:hover {\n      color: #8DC043; }\n.sidenav .last_menu li .sub li {\n      font-size: 15px;\n      margin-bottom: -9px;\n      color: #EFEFEF;\n      cursor: pointer; }\n.sidenav .social {\n    display: inline-flex;\n    position: relative;\n    top: 0px;\n    left: 1px; }\n.sidenav .social li {\n      margin-bottom: 12px; }\n.sidenav .social li fa-icon {\n        color: #ffffff !important; }\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\n#main {\n  transition: margin-left .5s;\n  padding: 20px; }\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px; }\n  .sidenav a {\n    font-size: 18px; } }\n.First {\n  background-color: #038896;\n  padding: 16px 0px; }\n.First .tob-bar {\n    display: inline-flex; }\n.First .navbar-brand {\n    margin-left: 5%; }\n.First .setting li {\n    margin-left: 6%; }\n.First .setting li a {\n      position: relative; }\n.First .setting li a span {\n        position: absolute;\n        width: 9px;\n        height: 9px;\n        background-color: #8DC043;\n        border-radius: 100%;\n        right: 5px;\n        top: 12px; }\n@media (min-width: 768px) {\n  .sidenav .social {\n    display: block;\n    position: relative;\n    top: 256px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL0Y6XFxtb2F0YXpcXGFuZ3VsYXIgUHJvamVjdHNcXGxpbmsvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdi1iYXJcXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQUE7QUFDQTtFQUNJLFlBQVk7RUFBRSxxQkFBQTtFQUNkLFFBQVE7RUFBRSwwQ0FBQTtFQUNWLGVBQWU7RUFBRSxrQkFBQTtFQUNqQixZQUFZO0VBQUUsZ0JBQUE7RUFDZCxNQUFNO0VBQUUsb0JBQUE7RUFDUixPQUFPO0VBQ1AseUJBQXlCO0VBQUUsU0FBQTtFQUMzQixrQkFBa0I7RUFBRSw4QkFBQTtFQUNwQixpQkFBaUI7RUFBRSxvQ0FBQTtFQUNuQixnQkFBZ0I7RUFBRSx5REFBQSxFQUEwRDtBQVZoRjtJQVlRLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7QUFqQnhCO01BbUJZLGNBQWMsRUFBQTtBQW5CMUI7SUF1QlEsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0FBM0J6QjtJQWdDVSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQixFQUFBO0FBckM5QjtNQXVDWSxjQUFjLEVBQUE7QUF2QzFCO01BMkNjLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLGVBQWUsRUFBQTtBQTlDN0I7SUF3RFEsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUyxFQUFBO0FBM0RqQjtNQTZEVSxtQkFBbUIsRUFBQTtBQTdEN0I7UUFnRWdCLHlCQUF5QixFQUFBO0FBUXZDLHNIQUFBO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYSxFQUFBO0FBR2YsZ0lBQUE7QUFDQTtFQUNFO0lBQVUsaUJBQWlCLEVBQUE7RUFDM0I7SUFBWSxlQUFlLEVBQUEsRUFBRztBQUVsQztFQUNJLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTtBQUZyQjtJQUlNLG9CQUFvQixFQUFBO0FBSjFCO0lBUUksZUFBZSxFQUFBO0FBUm5CO0lBWVEsZUFBZSxFQUFBO0FBWnZCO01BY1ksa0JBQWtCLEVBQUE7QUFkOUI7UUFnQmdCLGtCQUFpQjtRQUNqQixVQUFVO1FBQ1YsV0FBVztRQUNYLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLFNBQVMsRUFBQTtBQVF6QjtFQUNFO0lBRUksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVLEVBQUEsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIHNpZGUgbmF2aWdhdGlvbiBtZW51ICovXHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTsgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xyXG4gICAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogOTk5OyAvKiBTdGF5IG9uIHRvcCAqL1xyXG4gICAgdG9wOiAwOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM4ODk2OyAvKiBCbGFjayovXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICAgIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzOyAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXHJcbiAgICBhIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNsb3NlYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IC0yNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxhc3RfbWVudXtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzhEQzA0MztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWJ7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtOXB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjRUZFRkVGO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICAuc29jaWFse1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDFweDtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZmEtaWNvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG59XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHBhZ2UgY29udGVudCAtIHVzZSB0aGlzIGlmIHlvdSB3YW50IHRvIHB1c2ggdGhlIHBhZ2UgY29udGVudCB0byB0aGUgcmlnaHQgd2hlbiB5b3Ugb3BlbiB0aGUgc2lkZSBuYXZpZ2F0aW9uICovXHJcbiAgI21haW4ge1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogT24gc21hbGxlciBzY3JlZW5zLCB3aGVyZSBoZWlnaHQgaXMgbGVzcyB0aGFuIDQ1MHB4LCBjaGFuZ2UgdGhlIHN0eWxlIG9mIHRoZSBzaWRlbmF2IChsZXNzIHBhZGRpbmcgYW5kIGEgc21hbGxlciBmb250IHNpemUpICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gICAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cclxuICB9XHJcbi5GaXJzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzg4OTY7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDBweDtcclxuICAudG9iLWJhcntcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgfVxyXG4gLm5hdmJhci1icmFuZCB7XHJcbiAgXHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuLnNldHRpbmd7XHJcbiAgICBsaXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOERDMDQzO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxufVxyXG5cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpe1xyXG4gIC5zaWRlbmF2e1xyXG4gICAgLnNvY2lhbHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAyNTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "270px";
    };
    /* Set the width of the side navigation to 0 */
    NavBarComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/components/nav-bar/nav-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/singlepage/singlepage.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/singlepage/singlepage.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\n  <div class=\"container\">\n    <app-ng-dynamic-breadcrumb [symbol]=\"breadcrumbConfig['symbol']\"  [bgColor]=\"breadcrumbConfig['bgColor']\" [fontSize]=\"breadcrumbConfig['fontSize']\" [fontColor]=\"breadcrumbConfig['fontColor']\" [lastLinkColor]=\"breadcrumbConfig['lastLinkColor']\" ></app-ng-dynamic-breadcrumb>\n    \n  </div>\n\n\n  \n  <div class=\"container\">\n    <h4>\n      News Details\n    </h4>\n    <div class=\"row\">\n     \n      <div class=\"card\"   *ngFor=\"let item of filterItemsOfType()\">\n        <img src=\"{{item.urlToImage}}\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <div style=\"text-align: right;\">\n            <span  (click)=\"addtowishlist([item.id])\">\n\n           \n            <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"nameval==true\" width=\"16\" \n            height=\"16\" fill=\"#8DC043\" class=\"bi bi-heart-fill\" viewBox=\"0 0 16 16\"  style=\"margin-right: 20px\">\n              <path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/>\n            </svg>\n         \n            <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"nameval==false \"  width=\"16\" height=\"16\" fill=\"#8DC043\"  style=\"margin-right: 20px\" class=\"bi bi-heart-fill\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\" d=\"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"/>\n            </svg>\n          </span>\n\n\n            <fa-icon [icon]=\"['fas', 'share-alt']\" size=\"\"  style=\"margin-right: 20px;color: #8DC043;\"></fa-icon>\n         \n          </div>\n          <ul class=\"list-unstyled\" *ngFor=\"let cat of categories\">\n            <li *ngIf=\"item.sourceID ==cat.id\">\n              <a>\n                {{cat.name}}\n              </a>\n            </li>\n          \n          </ul>\n          <h5 class=\"card-title\">{{item.title}}</h5>\n       \n          <p class=\"card-text\">\n            {{item.content}}\n          </p>\n         \n        </div>\n      </div>\n    </div>\n  \n  </div>\n\n\n\n  <div class=\"container\">\n    <h4>\n      Related Topics\n    </h4>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-12\" *ngFor=\"let item of news | slice:0:3\">\n         <div class=\"postimg\">\n           <img src=\"{{item.urlToImage}}\" alt=\"\">\n           <div class=\"data\">\n            <ul class=\"list-unstyled\" *ngFor=\"let cat of categories\">\n              <li *ngIf=\"item.sourceID ==cat.id\">\n                <a>\n                  {{cat.name}}\n                </a>\n              </li>\n            \n            </ul>\n             <h4>\n              {{item.title}}\n             </h4>\n             <button (click)=\"goto([item.id])\">\n              View Details\n              <fa-icon [icon]=\"['fas', 'arrow-right']\" size=\"\" style=\"margin-left: 10px\"></fa-icon>\n             </button>\n           </div>\n         </div>\n\n      </div>\n\n      \n   <div class=\" view\">\n    <span routerLink=\"/allnews\">\n      View All\n      <fa-icon [icon]=\"['fas', 'arrow-right']\" size=\"\" style=\"margin-right: 20px;color: #000000;\"></fa-icon>\n          \n    </span>\n   </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/singlepage/singlepage.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/singlepage/singlepage.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all {\n  background-color: #EFEFEF !important;\n  padding-bottom: 1%; }\n  .all .card {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 30px;\n    padding: 0;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    border-radius: 0.25rem; }\n  .all .card img {\n      height: 500px; }\n  .all .card .card-title {\n      margin-bottom: 20px;\n      font-size: 22px;\n      font-weight: 800; }\n  .all .card ul li a {\n      font-size: 13px; }\n  .all h4 {\n    font-size: 39px;\n    margin-bottom: 2%;\n    font-weight: 400; }\n  .all .postimg {\n    position: relative;\n    margin-bottom: 20px; }\n  .all .postimg img {\n      width: 100%;\n      height: 348px;\n      border-radius: 6px; }\n  .all .data {\n    position: absolute;\n    bottom: 7px;\n    left: 7px;\n    width: 97%;\n    background-color: #f5f5f5d9;\n    padding: 10px 22px;\n    border-radius: 4px;\n    min-height: 48%; }\n  .all .data h4 {\n      font-size: 19px;\n      font-weight: 600; }\n  .all .data ul li a {\n      font-size: 13px; }\n  .all .data button {\n      color: #8dc043;\n      border: none;\n      background: no-repeat;\n      font-size: 14px; }\n  .all .data button fa-icon {\n        margin-left: 10px;\n        position: relative;\n        top: 2px;\n        font-size: 14px; }\n  .all .view {\n    text-align: right; }\n  .all .view span {\n      color: #8DC043 !important;\n      cursor: pointer; }\n  .all .view span fa-icon {\n        color: #8DC043 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW5nbGVwYWdlL0Y6XFxtb2F0YXpcXGFuZ3VsYXIgUHJvamVjdHNcXGxpbmsvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpbmdsZXBhZ2VcXHNpbmdsZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSxvQ0FBb0M7RUFDcEMsa0JBQWtCLEVBQUE7RUFIeEI7SUFLSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixzQ0FBc0M7SUFDdEMsc0JBQXNCLEVBQUE7RUFmMUI7TUFpQlEsYUFBYSxFQUFBO0VBakJyQjtNQW9CUSxtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBdEJ4QjtNQTJCZ0IsZUFBZSxFQUFBO0VBM0IvQjtJQWtDUSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBcEN4QjtJQXlDUSxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7RUExQzNCO01BNENZLFdBQVc7TUFDbkIsYUFBYTtNQUNiLGtCQUFrQixFQUFBO0VBOUN0QjtJQWtEUSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0VBekR2QjtNQTJEUSxlQUFlO01BQ25CLGdCQUFnQixFQUFBO0VBNURwQjtNQWlFZ0IsZUFBZSxFQUFBO0VBakUvQjtNQXNFUSxjQUFjO01BQ2xCLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsZUFBZSxFQUFBO0VBekVuQjtRQTJFUSxpQkFBaUI7UUFDckIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixlQUFlLEVBQUE7RUE5RW5CO0lBb0ZRLGlCQUFpQixFQUFBO0VBcEZ6QjtNQXNGWSx5QkFBeUI7TUFDekIsZUFBZSxFQUFBO0VBdkYzQjtRQXlGZ0IseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpbmdsZXBhZ2Uvc2luZ2xlcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGx7XHJcbiAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUYgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4uY2FyZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgICAgIFxyXG4gICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAzOXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAucG9zdGltZ3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGF0YXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA3cHg7XHJcbiAgICAgICAgbGVmdDogN3B4O1xyXG4gICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNWQ5O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDglO1xyXG4gICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGNvbG9yOiAjOGRjMDQzO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZmEtaWNvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC52aWV3e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOERDMDQzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZmEtaWNvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOERDMDQzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/singlepage/singlepage.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/singlepage/singlepage.component.ts ***!
  \***************************************************************/
/*! exports provided: SinglepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglepageComponent", function() { return SinglepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/api/newsapi.json */ "./src/assets/api/newsapi.json");
var _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/api/newsapi.json */ "./src/assets/api/newsapi.json", 1);




var SinglepageComponent = /** @class */ (function () {
    function SinglepageComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbConfig = {
            fontSize: '14px',
            fontColor: '#038896',
            lastLinkColor: '#AFAFAF',
            symbol: ' > ',
        };
        this.nameval = true;
    }
    SinglepageComponent.prototype.ngOnInit = function () {
        this.url = this.activatedRoute.snapshot.url.join('');
        console.log(this.url);
        this.id_post = this.activatedRoute.snapshot.paramMap.get('id');
        this.news = _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_3__["articles"];
        this.categories = _assets_api_newsapi_json__WEBPACK_IMPORTED_MODULE_3__["sourceCategory"];
    };
    SinglepageComponent.prototype.goto = function (post_id) {
        this.id_post = post_id;
        console.log(post_id);
        if (this.url.includes("allnews")) {
            this.router.navigate(['homepage/allnews/' + post_id]);
        }
        else {
            this.router.navigate(['homepage/' + post_id]);
        }
    };
    SinglepageComponent.prototype.filterItemsOfType = function () {
        var _this = this;
        console.log(this.id_post);
        console.log(this.news.filter(function (x) { return x.id == _this.id_post; }));
        return this.news.filter(function (x) { return x.id == _this.id_post; });
    };
    SinglepageComponent.prototype.addtowishlist = function (item_id) {
        this.id = item_id;
        this.nameval = !this.nameval;
    };
    SinglepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-singlepage',
            template: __webpack_require__(/*! ./singlepage.component.html */ "./src/app/components/singlepage/singlepage.component.html"),
            styles: [__webpack_require__(/*! ./singlepage.component.scss */ "./src/app/components/singlepage/singlepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SinglepageComponent);
    return SinglepageComponent;
}());



/***/ }),

/***/ "./src/app/components/slider/slider.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/slider/slider.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n  <div class=\"carousel-indicators\">\n    <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button>\n    <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button>\n    <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"2\" aria-label=\"Slide 3\"></button>\n  </div>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"assets/images/next.png\" class=\"d-block w-100\" alt=\"...\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>Al Foundation</h5>\n        <p>is focused on inspiring the next generation of  kids Healthcare professionals.</p>\n        <button class=\"btn bts\">\n          Donate Now\n\n        </button>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/images/next.png\" class=\"d-block w-100\" alt=\"...\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>Al Foundation</h5>\n        <p>is focused on inspiring the next generation of  kids Healthcare professionals.</p>\n        <button class=\"btn bts\">\n          Donate Now\n\n        </button>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/images/next.png\" class=\"d-block w-100\" alt=\"...\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>Al Foundation</h5>\n        <p>is focused on inspiring the next generation of  kids Healthcare professionals.</p>\n        <button class=\"btn bts\">\n          Donate Now\n\n        </button>\n      </div>\n    </div>\n  </div>\n  <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"visually-hidden\">Previous</span>\n  </button>\n  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"visually-hidden\">Next</span>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/components/slider/slider.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/slider/slider.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-caption {\n  bottom: 7.25rem !important; }\n  .carousel-caption p {\n    font-size: 32px;\n    width: 64%;\n    margin-left: 17%; }\n  .carousel-caption h5 {\n    font-size: 60px; }\n  .carousel-caption .bts {\n    background-color: #8DC043;\n    color: white; }\n  .carousel-indicators button {\n  width: 14px;\n  height: 14px;\n  border-radius: 100%; }\n  .carousel-indicators .active {\n  width: 16px;\n  height: 16px;\n  border-radius: 100%; }\n  .carousel-control-next-icon {\n  background-color: #ffffffba;\n  border-radius: 4px; }\n  .carousel-control-prev-icon {\n  background-color: #ffffffba;\n  border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvRjpcXG1vYXRhelxcYW5ndWxhciBQcm9qZWN0c1xcbGluay9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2xpZGVyXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBMEIsRUFBQTtFQUQ5QjtJQUdRLGVBQWU7SUFDbkIsVUFBVTtJQUNWLGdCQUFnQixFQUFBO0VBTHBCO0lBUVEsZUFBZSxFQUFBO0VBUnZCO0lBV1EseUJBQXlCO0lBQzdCLFlBQVksRUFBQTtFQUdoQjtFQUVRLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7RUFKM0I7RUFPUSxXQUFXO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0ksMkJBQTJCO0VBQzVCLGtCQUFrQixFQUFBO0VBR3JCO0VBQ0ksMkJBQTJCO0VBQzVCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNhcHRpb257XHJcbiAgICBib3R0b206IDcuMjVyZW0gIWltcG9ydGFudDtcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgd2lkdGg6IDY0JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbiAgICB9XHJcbiAgICBoNXtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRze1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4REMwNDM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuLmNhcm91c2VsLWluZGljYXRvcnN7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZle1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZiYTtcclxuICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmJhO1xyXG4gICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/components/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/components/slider/slider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/assets/api/newsapi.json":
/*!*************************************!*\
  !*** ./src/assets/api/newsapi.json ***!
  \*************************************/
/*! exports provided: status, sourceCategory, articles, default */
/***/ (function(module) {

module.exports = {"status":"ok","sourceCategory":[{"id":1,"name":"TechCrunch"},{"id":2,"name":"Yahoo Entertainment"},{"id":3,"name":"autoevolution"},{"id":4,"name":"MarketWatch"},{"id":5,"name":"The Wall Street Journal"}],"articles":[{"sourceID":1,"id":1,"showOnHomepage":true,"title":"Vaccine hopes and M&A action power European stocks and U.S. equity futures - MarketWatch","description":"","urlToImage":"https://images.mktw.net/im-231687/social","publishedAt":"2020-09-14T07:54:00Z","content":"European stocks marched higher on Monday, alongside U.S. equity futures, driven by vaccine hopes, mergers and acquisitions news.The Stoxx Europe 600 index \r\n SXXP, \r\n +0.26%\r\nrose 0.5% after ending l… [+3119 chars]"},{"sourceID":1,"id":2,"showOnHomepage":false,"title":"Neither Microsoft nor Oracle gets to buy TikTok US: Chinese state media - TechCrunch","description":"What a whirlwind of a Monday morning. Shortly after news broke that Microsoft is out of the picture in bidding for TikTok’s U.S. operations, and rumors began circulating that Oracle is the winner, China’s state broadcaster CGTN reported that ByteDance will no…","urlToImage":"https://techcrunch.com/wp-content/uploads/2020/08/GettyImages-1227914650.jpeg?w=654","publishedAt":"2020-09-14T07:45:36Z","content":"What a whirlwind of a Monday morning. Shortly after news broke that Microsoft is out of the picture in bidding for TikTok’s U.S. operations, and rumors began circulating that Oracle is the winner, Ch… [+1807 chars]"},{"sourceID":1,"id":3,"showOnHomepage":true,"title":"Stocks rise as AstraZeneca resumes vaccine trial - Yahoo Finance","description":"The suspension of a leading coronavirus vaccine trial had dashed investors' hopes of economic recovery worldwide, but the trial will now continue.","urlToImage":"https://s.yimg.com/uu/api/res/1.2/oad8t9TYgP.NMeECJjr1tg--~B/aD0zMzczO3c9NDk5MDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-09/519a0930-f364-11ea-bffb-64367f2e833e","publishedAt":"2020-09-14T07:38:00Z","content":"Stocks rose worldwide on Monday as AstraZeneca (AZN.L) and Oxford University confirmed plans to resume a leading coronavirus vaccine trial.\r\nInvestors welcomed the restart of the late-stage study, wh… [+2264 chars]"},{"sourceID":2,"id":4,"showOnHomepage":false,"title":"Tech's Bubble of Calm Is Likely to Prove Brief - Yahoo Finance","description":"(Bloomberg Opinion) -- Don’t Get Too ComfortableIs it safe to put a price on technology again? After great excitement, the solemn date of Sept. 11 proved to be the first trading day of the month when the tech-heavy Nasdaq-100 didn’t move by more than 1%, in o…","urlToImage":"https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png","publishedAt":"2020-09-14T06:34:05Z","content":"(Bloomberg Opinion) --\r\nDont Get Too Comfortable\r\nIs it safe to put a price on technology again? After great excitement, the solemn date of Sept. 11 proved to be the first trading day of the month wh… [+11014 chars]"},{"sourceID":3,"id":5,"showOnHomepage":true,"title":"A Porsche Panamera With Swangas Exists for the Sole Reason of Infuriating You - autoevolution","description":"Slabs are a “love it or hate it” type of thing. They are part of the Slab Culture originating in the ‘80s in Houston and, to this day, they’re still a big thing.","urlToImage":"https://s1.cdn.autoevolution.com/images/news/a-porsche-panamera-with-swangas-exists-for-the-sole-reason-of-infuriating-you-148657-7.jpg","publishedAt":"2020-09-14T04:30:00Z","content":"In fact, Slabs are so popular that more car owners seem to be itching to get in on the game. Usually, the cars used to make Slabs are cheaper, older American models, decked out in candy paint, fitted… [+1485 chars]"},{"sourceID":2,"id":6,"showOnHomepage":false,"title":"Dow futures jump 300 points as tech stocks look to recover - MarketWatch","description":"","urlToImage":"https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg","publishedAt":"2020-09-14T04:02:00Z","content":"U.S. stock index futures rose late Sunday, as a series of deals raised hopes that battered stocks would recover after the tech-heavy Nasdaq ended its worst week since March. As of midnight Eastern, D… [+682 chars]"},{"sourceID":5,"id":7,"showOnHomepage":false,"title":"Zipline and Walmart to launch drone deliveries of health and wellness products - The Verge","description":"Zipline is partnering with Walmart for a new drone delivery operation in the US, the companies announced. Zipline’s launch and release system allows for on-demand delivery in less than an hour, and operating from a Walmart store, can service a 50-mile radius.","urlToImage":"https://cdn.vox-cdn.com/thumbor/A2pSUEQx6OCBpuUoSh6_tm4g9dA=/0x129:1800x1071/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21878290/Drone_Delivery_Shot_1.jpeg","publishedAt":"2020-09-14T04:01:00Z","content":"Plans call for the program to start near Walmart headquarters in Arkansas early next year\r\nZipline\r\nZipline is partnering with Walmart for a new drone delivery operation in the US, the companies anno… [+1881 chars]"},{"sourceID":4,"id":8,"showOnHomepage":false,"title":"It's hard to grow vegetables in this mountain town. Then this farmer had an idea - CNN","description":"Founded in 2016, Vertical Harvest is a vertical farm in that grows fresh produce for local restaurants and employs disabled workers in Jackson, Wyoming.","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/200910220948-vertical-harvest-05-super-tease.jpg","publishedAt":"2020-09-14T02:19:00Z","content":null},{"sourceID":3,"id":9,"showOnHomepage":true,"title":"Nvidia Buying Arm Holdings from SoftBank in Largest Ever Chip Deal - Barron's","description":"","urlToImage":"https://images.barrons.com/im-189533/social","publishedAt":"2020-09-14T00:57:00Z","content":"Nvidia\r\n has agreed to buy the U.K.-based chip design house Arm Holdings from \r\n SoftBank Group\r\n for about $40 billion in cash, stock, and future considerations. Its the biggest acquisition in the h… [+8547 chars]"},{"sourceID":2,"id":10,"showOnHomepage":false,"title":"Passenger removed, Delta flight in Detroit delayed over mask - The Detroit News","description":"L.A.-bound plane returns to gate, departs 47 minutes late","urlToImage":"https://www.gannett-cdn.com/presto/2020/09/14/PDTN/6c6b1149-f97c-41f8-b542-473619b1bcc7-AP20244723182709.jpg?crop=5279,2970,x0,y268&width=3200&height=1680&fit=bounds","publishedAt":"2020-09-14T00:45:02Z","content":"A Delta Air Lines flight from Detroit to Los Angeles had to make a pre-liftoff detour back to the gate when a passenger refused to wear a mask.\r\nDelta Flight 201, scheduled to depart at 8:15 p.m. Sat… [+2444 chars]"},{"sourceID":4,"id":11,"showOnHomepage":true,"title":"Asian shares on firm footing as vaccine trials resume - Reuters","description":"World stocks rallied on Monday on hopes for a coronavirus vaccine after AstraZeneca resumed its phase-3 trial, but caution lingered before a host of central bank meetings this week.","urlToImage":"https://static.reuters.com/resources/r/?m=02&d=20200914&t=2&i=1533325326&r=LYNXMPEG8D0P7&w=800","publishedAt":"2020-09-14T00:36:00Z","content":"LONDON (Reuters) - World stocks rallied on Monday on hopes for a coronavirus vaccine after AstraZeneca resumed its phase-3 trial, but caution lingered before a host of central bank meetings this week… [+3577 chars]"},{"sourceID":4,"id":12,"showOnHomepage":false,"title":"Nikola Is Collapsing Under The Pressure - Seeking Alpha","description":"Recent fraud allegations have placed Nikola under an intense amount of scrutiny. The details behind Nikola's GM deal raises more doubts about Nikola's technology.","urlToImage":"https://static1.seekingalpha.com/uploads/2020/9/12/32586395-15999574394124677.png","publishedAt":"2020-09-14T00:28:00Z","content":"Nikola (NKLA) is establishing itself as one of the most volatile stocks in the market. After surging nearly 40% on news of the Nikola-General Motors (GM) deal, Nikola's stock quickly plunged as a res… [+5625 chars]"},{"sourceID":5,"id":13,"showOnHomepage":false,"title":"How much stimulus check money could you get? Calculate it using this tool - CNET","description":"Use our calculator to estimate how much you, your family and your dependents could expect to receive with a second stimulus check, or with your first payment if you're still waiting for it to arrive.","urlToImage":"https://cnet1.cbsistatic.com/img/F4ZpHvWRMSHICAPdaVMgaXRigDo=/1200x630/2020/08/04/24605e53-49eb-4e96-b84d-94e3800c90b1/calculate-calculator-amount-of-stimulus-check-2020-cash-money-phone-002.jpg","publishedAt":"2020-09-13T23:46:00Z","content":"The CNET stimulus payment calculator can help you estimate how much money you could get from the IRS if a second check comes to be.\r\nSarah Tew/CNET\r\nIf a second stimulus check gets approved in 2020, … [+3336 chars]"},{"sourceID":3,"id":14,"showOnHomepage":true,"title":"Global oil demand may have passed peak, says BP energy report - The Guardian","description":"Oil will be replaced by clean electricity, BP predicts, as demand may never recover from Covid-19 pandemic","urlToImage":"https://i.guim.co.uk/img/media/a5d7127d69b12b5bf7adb02c93cbee7a69180d1e/0_180_3585_2153/master/3585.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=805d67edea7339a276948a05c77dfc9b","publishedAt":"2020-09-13T23:01:00Z","content":"BP has called time on the worlds rising demand for fossil fuels after finding that demand for oil may have already reached its peak and faces an unprecedented decades-long decline.\r\nDemand for oil ma… [+4572 chars]"},{"sourceID":1,"id":15,"showOnHomepage":false,"title":"Exxon Used to Be America’s Most Valuable Company. What Happened? - The Wall Street Journal","description":"The oil giant doubled down on oil and gas before the pandemic crushed demand","urlToImage":"https://images.wsj.net/im-230640/social","publishedAt":"2020-09-13T22:50:00Z","content":"It has been a stunning fall from grace for Exxon Mobil Corp.\r\nJust seven years ago, Exxon was the biggest U.S. company by market capitalization. It has since lost roughly 60% of its value, with its m… [+147 chars]"},{"sourceID":2,"id":16,"showOnHomepage":true,"title":"Tesla Model 3 In-Depth 10,000-Mile Cost-Of-Ownership Analysis - InsideEVs ","description":"The Model 3 is Tesla's least-expensive model, but it's still not cheap. However, it is priced better than many less compelling EVs, and it's cheap to own.","urlToImage":"https://cdn.motor1.com/images/mgl/x4Z62/s1/tesla-model-3-10-000-mile-cost.jpg","publishedAt":"2020-09-13T22:12:34Z","content":"This Tesla Model 3 cost-of-ownership followup just premiered today. If you're in the market for a Model 3, another Tesla vehicle, or any EV for that matter, it's worth your time.\r\nThe Model 3 is Tesl… [+1850 chars]"},{"sourceID":5,"id":17,"showOnHomepage":true,"title":"Peeps won't come in Halloween, Christmas shapes this year due to COVID-related production shutdown - USA TODAY","description":"Just Born had to temporarily shut down its factories due to the pandemic. That's why there won't be Christmas Peeps.","urlToImage":"https://www.gannett-cdn.com/presto/2020/09/13/USAT/22a46bbd-618b-49bb-935a-a3db6625f966-Screen_Shot_2020-09-13_at_4.37.57_PM.png?crop=737,415,x0,y0&width=737&height=415&format=pjpg&auto=webp","publishedAt":"2020-09-13T21:54:31Z","content":"Peeps, the popular colored marshmallows shaped like baby chicks, won't come in Halloween or Christmas shapes this year due to the COVID-19 pandemic, the company said in a statement to USA TODAY. \r\nPe… [+1313 chars]"},{"sourceID":3,"id":18,"showOnHomepage":false,"title":"Price of Gold Fundamental Weekly Forecast - Fed May Not Deliver What Gold Bulls Want to Hear - FX Empire","description":"It seems wherever we look we see reasons for higher prices and reasons for lower prices. This is creating a rangebound trade.","urlToImage":"https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2020/09/GoldDollar-1.jpg","publishedAt":"2020-09-13T21:32:49Z","content":"Late in the week, gold jumped as the dollar weakened after the European Central Bank kept its policy unchanged and U.S. jobless claims held at high levels, dimming hopes of a quick economic recovery … [+2257 chars]"},{"sourceID":5,"id":19,"showOnHomepage":false,"title":"The Chart of the Week: EUR/USD in distribution, bears waiting for breakout confirmations - FXStreet","description":"EUR/USD is decelerating in a phase of distribution and the following offers a top-down analysis for swing traders. There are a number of steps that th","urlToImage":"https://editorial.fxstreet.com/images/Markets/Currencies/Majors/EURUSD/MoneyEURUSD_2_Large.jpg","publishedAt":"2020-09-13T21:02:00Z","content":"Note: All information on this page is subject to change. The use of this website constitutes acceptance of our user agreement. Please read our privacy policy and legal disclaimer.\r\nTrading foreign ex… [+1338 chars]"},{"sourceID":2,"id":20,"showOnHomepage":false,"title":"Pfizer says their vaccine will likely be approved by end of year - One America News Network","description":"Breaking News, Latest News and Current News from OANN.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.","urlToImage":null,"publishedAt":"2020-09-13T20:45:01Z","content":"FILE – In this July 27, 2020, file photo, a nurse prepares a shot as a study of a possible COVID-19 vaccine in Binghamton, N.Y. (AP Photo/Hans Pennink, File)\r\nOAN NewsroomUPDATED 1:45 PM PT Sunday, S… [+1124 chars]"}]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\moataz\angular Projects\link\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map