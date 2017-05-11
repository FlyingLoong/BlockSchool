webpackJsonp([1,5],{

/***/ 210:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 210;


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(229);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(299),
        styles: [__webpack_require__(285)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_schedule_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_fullcalendar_src_calendar_calendar__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_curriculum_curriculum_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_signup_registration_1_registration_1_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_signup_registration_2_registration_2_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_signup_registration_3_registration_3_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_signup_signup_signup_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7_angular2_fullcalendar_src_calendar_calendar__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_curriculum_curriculum_component__["a" /* CurriculumComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_signup_registration_1_registration_1_component__["a" /* Registration1Component */],
            __WEBPACK_IMPORTED_MODULE_14__components_signup_registration_2_registration_2_component__["a" /* Registration2Component */],
            __WEBPACK_IMPORTED_MODULE_15__components_signup_registration_3_registration_3_component__["a" /* Registration3Component */],
            __WEBPACK_IMPORTED_MODULE_16__components_signup_signup_signup_component__["a" /* SignupComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routes */]
        ],
        providers: [
            {
                provide: 'auth',
                useClass: __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]
            },
            {
                provide: 'schedule',
                useClass: __WEBPACK_IMPORTED_MODULE_6__services_schedule_service__["a" /* ScheduleService */]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_signup_signup_signup_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_signup_registration_1_registration_1_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_signup_registration_2_registration_2_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_signup_registration_3_registration_3_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });






var SIGN_UP_ROUTES = [
    {
        path: 'registration-1',
        component: __WEBPACK_IMPORTED_MODULE_1__components_signup_registration_1_registration_1_component__["a" /* Registration1Component */]
    },
    {
        path: 'registration-2',
        component: __WEBPACK_IMPORTED_MODULE_2__components_signup_registration_2_registration_2_component__["a" /* Registration2Component */]
    },
    {
        path: 'registration-3',
        component: __WEBPACK_IMPORTED_MODULE_3__components_signup_registration_3_registration_3_component__["a" /* Registration3Component */]
    },
    {
        path: '**',
        redirectTo: 'registration-1'
    }
];
var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'signUp',
        component: __WEBPACK_IMPORTED_MODULE_0__components_signup_signup_signup_component__["a" /* SignupComponent */],
        children: SIGN_UP_ROUTES
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var routes = __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurriculumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurriculumComponent = (function () {
    function CurriculumComponent() {
    }
    CurriculumComponent.prototype.ngOnInit = function () {
    };
    return CurriculumComponent;
}());
CurriculumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-curriculum',
        template: __webpack_require__(300),
        styles: [__webpack_require__(286)]
    }),
    __metadata("design:paramtypes", [])
], CurriculumComponent);

//# sourceMappingURL=curriculum.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(302),
        styles: [__webpack_require__(288)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(303),
        styles: [__webpack_require__(289)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DEFAULT_USER = Object.freeze({
    email: "",
    password: "",
    parentName: "",
    relationship: "",
    childName: "",
    childAge: 5,
    childGender: "",
    childBirthday: "",
    childInterest: ""
});
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.user = Object.assign({}, DEFAULT_USER);
    }
    AuthService.prototype.addNewUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post('/api/v1/users', this.user, headers).toPromise()
            .then(function (res) { return res.json(); })
            .catch();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
    }
    //getScheduleEvents(): Promise<> {}
    ScheduleService.prototype.addScheduleEvent = function (event) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post('/api/v1/event', event, headers).toPromise()
            .then(function (res) { return res.json(); })
            .catch();
    };
    ScheduleService.prototype.deleteScheduleEvents = function (events) { };
    return ScheduleService;
}());
ScheduleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ScheduleService);

var _a;
//# sourceMappingURL=schedule.service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".navbar-default {\n  background-color: transparent;\n}\n\n.navbar-brand {\n  padding: 20px 100px 50px 15px;\n}\n\n.navbar-nav {\n  margin-top: 10px;\n}\n\n.navbar-nav .navbar-spacer {\n  width: 2px;\n  height: 25px;\n  margin-top: 12px;\n  background-color: #ddd;\n}\n\n.brand-image {\n  width: 150px;\n  height: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".auth-input {\n    width: 80%;\n    height: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 79,
	"./af.js": 79,
	"./ar": 86,
	"./ar-dz": 80,
	"./ar-dz.js": 80,
	"./ar-kw": 81,
	"./ar-kw.js": 81,
	"./ar-ly": 82,
	"./ar-ly.js": 82,
	"./ar-ma": 83,
	"./ar-ma.js": 83,
	"./ar-sa": 84,
	"./ar-sa.js": 84,
	"./ar-tn": 85,
	"./ar-tn.js": 85,
	"./ar.js": 86,
	"./az": 87,
	"./az.js": 87,
	"./be": 88,
	"./be.js": 88,
	"./bg": 89,
	"./bg.js": 89,
	"./bn": 90,
	"./bn.js": 90,
	"./bo": 91,
	"./bo.js": 91,
	"./br": 92,
	"./br.js": 92,
	"./bs": 93,
	"./bs.js": 93,
	"./ca": 94,
	"./ca.js": 94,
	"./cs": 95,
	"./cs.js": 95,
	"./cv": 96,
	"./cv.js": 96,
	"./cy": 97,
	"./cy.js": 97,
	"./da": 98,
	"./da.js": 98,
	"./de": 101,
	"./de-at": 99,
	"./de-at.js": 99,
	"./de-ch": 100,
	"./de-ch.js": 100,
	"./de.js": 101,
	"./dv": 102,
	"./dv.js": 102,
	"./el": 103,
	"./el.js": 103,
	"./en-au": 104,
	"./en-au.js": 104,
	"./en-ca": 105,
	"./en-ca.js": 105,
	"./en-gb": 106,
	"./en-gb.js": 106,
	"./en-ie": 107,
	"./en-ie.js": 107,
	"./en-nz": 108,
	"./en-nz.js": 108,
	"./eo": 109,
	"./eo.js": 109,
	"./es": 111,
	"./es-do": 110,
	"./es-do.js": 110,
	"./es.js": 111,
	"./et": 112,
	"./et.js": 112,
	"./eu": 113,
	"./eu.js": 113,
	"./fa": 114,
	"./fa.js": 114,
	"./fi": 115,
	"./fi.js": 115,
	"./fo": 116,
	"./fo.js": 116,
	"./fr": 119,
	"./fr-ca": 117,
	"./fr-ca.js": 117,
	"./fr-ch": 118,
	"./fr-ch.js": 118,
	"./fr.js": 119,
	"./fy": 120,
	"./fy.js": 120,
	"./gd": 121,
	"./gd.js": 121,
	"./gl": 122,
	"./gl.js": 122,
	"./gom-latn": 123,
	"./gom-latn.js": 123,
	"./he": 124,
	"./he.js": 124,
	"./hi": 125,
	"./hi.js": 125,
	"./hr": 126,
	"./hr.js": 126,
	"./hu": 127,
	"./hu.js": 127,
	"./hy-am": 128,
	"./hy-am.js": 128,
	"./id": 129,
	"./id.js": 129,
	"./is": 130,
	"./is.js": 130,
	"./it": 131,
	"./it.js": 131,
	"./ja": 132,
	"./ja.js": 132,
	"./jv": 133,
	"./jv.js": 133,
	"./ka": 134,
	"./ka.js": 134,
	"./kk": 135,
	"./kk.js": 135,
	"./km": 136,
	"./km.js": 136,
	"./kn": 137,
	"./kn.js": 137,
	"./ko": 138,
	"./ko.js": 138,
	"./ky": 139,
	"./ky.js": 139,
	"./lb": 140,
	"./lb.js": 140,
	"./lo": 141,
	"./lo.js": 141,
	"./lt": 142,
	"./lt.js": 142,
	"./lv": 143,
	"./lv.js": 143,
	"./me": 144,
	"./me.js": 144,
	"./mi": 145,
	"./mi.js": 145,
	"./mk": 146,
	"./mk.js": 146,
	"./ml": 147,
	"./ml.js": 147,
	"./mr": 148,
	"./mr.js": 148,
	"./ms": 150,
	"./ms-my": 149,
	"./ms-my.js": 149,
	"./ms.js": 150,
	"./my": 151,
	"./my.js": 151,
	"./nb": 152,
	"./nb.js": 152,
	"./ne": 153,
	"./ne.js": 153,
	"./nl": 155,
	"./nl-be": 154,
	"./nl-be.js": 154,
	"./nl.js": 155,
	"./nn": 156,
	"./nn.js": 156,
	"./pa-in": 157,
	"./pa-in.js": 157,
	"./pl": 158,
	"./pl.js": 158,
	"./pt": 160,
	"./pt-br": 159,
	"./pt-br.js": 159,
	"./pt.js": 160,
	"./ro": 161,
	"./ro.js": 161,
	"./ru": 162,
	"./ru.js": 162,
	"./sd": 163,
	"./sd.js": 163,
	"./se": 164,
	"./se.js": 164,
	"./si": 165,
	"./si.js": 165,
	"./sk": 166,
	"./sk.js": 166,
	"./sl": 167,
	"./sl.js": 167,
	"./sq": 168,
	"./sq.js": 168,
	"./sr": 170,
	"./sr-cyrl": 169,
	"./sr-cyrl.js": 169,
	"./sr.js": 170,
	"./ss": 171,
	"./ss.js": 171,
	"./sv": 172,
	"./sv.js": 172,
	"./sw": 173,
	"./sw.js": 173,
	"./ta": 174,
	"./ta.js": 174,
	"./te": 175,
	"./te.js": 175,
	"./tet": 176,
	"./tet.js": 176,
	"./th": 177,
	"./th.js": 177,
	"./tl-ph": 178,
	"./tl-ph.js": 178,
	"./tlh": 179,
	"./tlh.js": 179,
	"./tr": 180,
	"./tr.js": 180,
	"./tzl": 181,
	"./tzl.js": 181,
	"./tzm": 183,
	"./tzm-latn": 182,
	"./tzm-latn.js": 182,
	"./tzm.js": 183,
	"./uk": 184,
	"./uk.js": 184,
	"./ur": 185,
	"./ur.js": 185,
	"./uz": 187,
	"./uz-latn": 186,
	"./uz-latn.js": 186,
	"./uz.js": 187,
	"./vi": 188,
	"./vi.js": 188,
	"./x-pseudo": 189,
	"./x-pseudo.js": 189,
	"./yo": 190,
	"./yo.js": 190,
	"./zh-cn": 191,
	"./zh-cn.js": 191,
	"./zh-hk": 192,
	"./zh-hk.js": 192,
	"./zh-tw": 193,
	"./zh-tw.js": 193
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 295;


/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "<p>\n  curriculum works!\n</p>\n"

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../assets/images/homepic.png\">\n<hr style=\"background-color: black; height: 3px;\">\n<p style=\" color: black; font-size: 60px;\">Where kids ages 4-14 learn to code, creatively. </p>\n<p>BlockSchool is the first live online school to teach kids how to code. Choose a teacher, schedule a time, and your child will start learning how to code in magical block world.</p>\n<p>We believe coding is the language of 21st century.</p>\n<div>\n  <a class=\"btn btn-info\">Sign up</a>\n</div>\n"

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/home\">\n        <img class=\"brand-image\" alt=\"BlockSchool\" src=\"../../../assets/images/BlockSchool-Logo-NonStack.png\">\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"active\"><a href=\"#\">Mission <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"#\">Curriculum</a></li>\n        <li><a href=\"#\">Teachers</a></li>\n        <li><a href=\"#\">Pricing</a></li>\n        <li><a href=\"#\">FAQ</a></li>\n        <li><a href=\"#\">Contact Us</a></li>\n\n        <li class=\"navbar-spacer\"></li>\n\n        <li><a routerLink=\"signIn\">Sign in</a></li>\n        <li>\n          <form class=\"navbar-form\">\n            <a class=\"btn btn-info\" routerLink=\"signUp\">Sign up</a>\n          </form>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" required placeholder=\"Enter your email here!\" [(ngModel)]=\"userInfo.email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" required placeholder=\"Enter your password here!\" [(ngModel)]=\"userInfo.password\">\n    </div><div class=\"form-group\">\n      <label for=\"confirm_password\">Confirm Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"confirm_password\" name=\"confirm_password\" required placeholder=\"Confirm your password here!\">\n    </div>\n    <!--\n    <a routerLink=\"../registration-2\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</a>\n    -->\n    <br/>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <input type=\"checkbox\" id=\"readPrivacyPolicy\" name=\"readPrivacyPolicy\" value=\"readPrivacyPolicyChecked\"><span style=\"color: gray\">By clicking this, you agree that you have read our</span> <span>Pirvacy policy</span>. <br/>\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"parentName\">Parent Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"parentName\" name=\"parentName\" required placeholder=\"Enter parent name here!\" [(ngModel)]=\"userInfo.parentName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"relationship\">Relationship</label>\n      <input type=\"text\" class=\"form-control\" id=\"relationship\" name=\"relationship\" required placeholder=\"Enter parent relationship here!\" [(ngModel)]=\"userInfo.relationship\">\n    </div><div class=\"form-group\">\n      <label for=\"childName\">Child Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"childName\" name=\"childName\" required placeholder=\"Enter the child name here!\" [(ngModel)]=\"userInfo.childName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childAge\">Child Age</label>\n      <input type=\"text\" class=\"form-control\" id=\"childAge\" name=\"childAge\" required placeholder=\"Enter the child age here!\" [(ngModel)]=\"userInfo.childAge\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childGender\">Child Gender</label>\n      <select id=\"childGender\" name=\"childGender\" [(ngModel)]=\"userInfo.childGender\">\n        <option value=\"M\">Male</option>\n        <option value=\"F\">Female</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childBirthday\">Child Birthday</label>\n      <input type=\"datetime\" class=\"form-control\" id=\"childBirthday\" name=\"childBirthday\" required [(ngModel)]=\"userInfo.childBirthday\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childIntest\">Child Interest</label>\n      <textarea class=\"form-control\" id=\"childInterest\" name=\"childInterest\" required [(ngModel)]=\"userInfo.childInterest\"></textarea>\n    </div>\n    <!--\n    <a routerLink=\"../registration-2\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</a>\n    -->\n    <button type=\"submit\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</button>\n  </form>\n</div>\n\n"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Pick Date & Time</h3>\n  <!--\n  <p>Planning Meeting with {{teacher.name}}</p>\n  -->\n  <hr>\n  <p>All times are in <select id=\"timezone-selector\"></select></p>\n  <div>\n    <angular2-fullcalendar id=\"freeTrailScheduler\" [options]=\"calendarOptions\"></angular2-fullcalendar>\n  </div>\n</div>\n"

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 list-group\">\n    <a class=\"list-group-item\" routerLink=\"registration-1\">Create an Account</a>\n    <a class=\"list-group-item\"routerLink=\"registration-2\">Parent & Child Info</a>\n    <a class=\"list-group-item\" routerLink=\"registration-3\">Schedule Free Trial Class</a>\n  </div>\n\n  <div class = \"col-md-9\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(211);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(301),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registration1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DEFAULT_USER = Object.freeze({
    email: "",
    password: "",
    parentName: "",
    relationship: "",
    childName: "",
    childAge: 5,
    childGender: "",
    childBirthday: "",
    childInterest: ""
});
var Registration1Component = (function () {
    function Registration1Component(auth, _router) {
        this.auth = auth;
        this._router = _router;
        this.userInfo = Object.assign({}, DEFAULT_USER);
    }
    Registration1Component.prototype.ngOnInit = function () {
        this.userInfo.email = this.auth.user.email;
        this.userInfo.password = this.auth.user.password;
    };
    Registration1Component.prototype.nextStep = function () {
        console.log(this.userInfo.email);
        this.auth.user.email = this.userInfo.email;
        this.auth.user.password = this.userInfo.password;
        this._router.navigate(['signUp/registration-2']);
    };
    return Registration1Component;
}());
Registration1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-registration-1',
        template: __webpack_require__(304),
        styles: [__webpack_require__(290)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('auth')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration1Component);

var _a;
//# sourceMappingURL=registration-1.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registration2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DEFAULT_USER = Object.freeze({
    email: "",
    password: "",
    parentName: "",
    relationship: "",
    childName: "",
    childAge: 5,
    childGender: "",
    childBirthday: "",
    childInterest: ""
});
var Registration2Component = (function () {
    function Registration2Component(auth, _router) {
        this.auth = auth;
        this._router = _router;
        this.userInfo = Object.assign({}, DEFAULT_USER);
    }
    Registration2Component.prototype.ngOnInit = function () {
    };
    Registration2Component.prototype.nextStep = function () {
        var _this = this;
        console.log("user.email is " + this.auth.user.email);
        this.auth.user.parentName = this.userInfo.parentName;
        this.auth.user.relationship = this.userInfo.relationship;
        this.auth.user.childName = this.userInfo.childName;
        this.auth.user.childAge = this.userInfo.childAge;
        this.auth.user.childGender = this.userInfo.childGender;
        this.auth.user.childBirthday = this.userInfo.childBirthday;
        this.auth.user.childInterest = this.userInfo.childInterest;
        this.auth.addNewUser()
            .then(function (user) {
            console.log(user); // Debug
            _this._router.navigate(['signUp/registration-3']);
        })
            .catch(console.log("Add user fail!") // Debug
        );
    };
    return Registration2Component;
}());
Registration2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-registration-2',
        template: __webpack_require__(305),
        styles: [__webpack_require__(291)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])("auth")),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration2Component);

var _a;
//# sourceMappingURL=registration-2.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registration3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var Registration3Component = (function () {
    function Registration3Component(schedule, _router) {
        this.schedule = schedule;
        this._router = _router;
        this.calendarOptions = {};
        this.calendarEvents = [];
    }
    Registration3Component.prototype.ngOnInit = function () {
    };
    Registration3Component.prototype.ngAfterViewInit = function () {
        this.calendarOptions = {
            header: {
                left: "prev",
                center: "title, today",
                right: "next"
            },
            defaultView: "agendaWeek",
            events: [],
            allDaySlot: false,
            slotDuration: '01:00:00',
            dayClick: this.clickDay.bind(this),
            eventClick: this.clickEvent.bind(this)
        };
    };
    Registration3Component.prototype.clickDay = function (date, jsEvent, view) {
        var _this = this;
        console.log(date.format());
        var start = date.format();
        var event = {
            teacherEmail: "..",
            title: "Scheduled",
            start: date.format()
        };
        this.calendarOptions.events.push(event);
        //this.calendarEvents.push("1");
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#freeTrailScheduler").fullCalendar('renderEvent', event, true);
        this.schedule.addScheduleEvent(event)
            .then(function (event) {
            _this._router.navigate(['home']);
        })
            .catch(function (err) {
            console.log("cant add the schedule!");
        });
    };
    Registration3Component.prototype.clickEvent = function (calEvent, jsEvent, view) {
        console.log("Event is clicked!");
    };
    return Registration3Component;
}());
Registration3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-registration-3',
        template: __webpack_require__(306),
        styles: [__webpack_require__(292)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('schedule')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration3Component);

var _a;
//# sourceMappingURL=registration-3.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(307),
        styles: [__webpack_require__(293)]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.bundle.js.map