webpackJsonp([1,5],{

/***/ 211:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 211;


/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(231);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
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
        template: __webpack_require__(301),
        styles: [__webpack_require__(287)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_schedule_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_signup_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_fullcalendar_src_calendar_calendar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_curriculum_curriculum_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_signup_registration_1_registration_1_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_signup_registration_2_registration_2_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_signup_registration_3_registration_3_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_signup_signup_signup_component__ = __webpack_require__(66);
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
            __WEBPACK_IMPORTED_MODULE_8_angular2_fullcalendar_src_calendar_calendar__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_curriculum_curriculum_component__["a" /* CurriculumComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_signup_registration_1_registration_1_component__["a" /* Registration1Component */],
            __WEBPACK_IMPORTED_MODULE_15__components_signup_registration_2_registration_2_component__["a" /* Registration2Component */],
            __WEBPACK_IMPORTED_MODULE_16__components_signup_registration_3_registration_3_component__["a" /* Registration3Component */],
            __WEBPACK_IMPORTED_MODULE_17__components_signup_signup_signup_component__["a" /* SignupComponent */]
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
            },
            {
                provide: 'signUp',
                useClass: __WEBPACK_IMPORTED_MODULE_7__services_signup_service__["a" /* SignupService */]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_signup_signup_signup_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_signup_registration_1_registration_1_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_signup_registration_2_registration_2_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_signup_registration_3_registration_3_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__(62);
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

/***/ 225:
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
        template: __webpack_require__(302),
        styles: [__webpack_require__(288)]
    }),
    __metadata("design:paramtypes", [])
], CurriculumComponent);

//# sourceMappingURL=curriculum.component.js.map

/***/ }),

/***/ 226:
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
        template: __webpack_require__(304),
        styles: [__webpack_require__(290)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 227:
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
        template: __webpack_require__(305),
        styles: [__webpack_require__(291)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(196);
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

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
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
        this.scheduleSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    ScheduleService.prototype.getScheduleEvents = function (teacherEmail) {
        var _this = this;
        this.http.get("api/v1/events/" + teacherEmail).toPromise()
            .then(function (res) { _this.scheduleSource.next(res.json()); })
            .catch();
        return this.scheduleSource.asObservable();
    };
    ScheduleService.prototype.addScheduleEvent = function (event) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post('/api/v1/events', event, headers).toPromise()
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

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupService = (function () {
    function SignupService() {
        this.step = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]("step1");
    }
    SignupService.prototype.setProcessStatus = function (step) {
        this.step.next(step);
    };
    SignupService.prototype.getProcessStatus = function () {
        return this.step.asObservable();
    };
    return SignupService;
}());
SignupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SignupService);

//# sourceMappingURL=signup.service.js.map

/***/ }),

/***/ 231:
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".navbar-default {\n  background-color: transparent;\n}\n\n.navbar-brand {\n  padding: 20px 100px 50px 15px;\n}\n\n.navbar-nav {\n  margin-top: 10px;\n}\n\n.navbar-nav .navbar-spacer {\n  width: 2px;\n  height: 25px;\n  margin-top: 12px;\n  background-color: #ddd;\n}\n\n.brand-image {\n  width: 150px;\n  height: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".auth-input {\n    width: 80%;\n    height: 40px;\n}", ""]);

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

/***/ 294:
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

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "*{padding:0;margin:0;}\n\nbody {\n  background: transparent;\n  font-family: sans-serif;\n  }\n\na {\n  text-decoration: none;\n  color:#666;\n  }\n\n.process-bar {\n  font-size: 16px;\n  position: relative;\n  height: 300px;\n  width: 250px;\n  opacity: 0.5;\n  margin: 5px auto;\n  background: transparent;\n  }\n\n.process-bar .bg-line {\n  height: 250px;\n  width: 0;\n  border-left: 2px solid #0be;\n  position: absolute;\n  top: 25px;\n  left: 9px;\n  z-index: 1;\n  }\n\n.process-bar .process-status {\n  display: block;\n  height: 30px;\n  margin-top: 50px;\n}\n\n.process-bar .dot {\n  font-size: 14px;\n  color: white;\n  text-align: center;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border-radius: 50%;\n  margin-right: 10px;\n  /*vertical-align: middle;*/\n  position: relative;\n  z-index: 2;\n  background: #0be;\n  }\n\n.process-bar .transparent-dot {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border-radius: 50%;\n  margin-right: 10px;\n  position: relative;\n  z-index: 2;\n  background: transparent;\n}\n\n.process-bar .active {\n  font-size: 19px;\n  font-weight: bold;\n  color: black;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 80,
	"./af.js": 80,
	"./ar": 87,
	"./ar-dz": 81,
	"./ar-dz.js": 81,
	"./ar-kw": 82,
	"./ar-kw.js": 82,
	"./ar-ly": 83,
	"./ar-ly.js": 83,
	"./ar-ma": 84,
	"./ar-ma.js": 84,
	"./ar-sa": 85,
	"./ar-sa.js": 85,
	"./ar-tn": 86,
	"./ar-tn.js": 86,
	"./ar.js": 87,
	"./az": 88,
	"./az.js": 88,
	"./be": 89,
	"./be.js": 89,
	"./bg": 90,
	"./bg.js": 90,
	"./bn": 91,
	"./bn.js": 91,
	"./bo": 92,
	"./bo.js": 92,
	"./br": 93,
	"./br.js": 93,
	"./bs": 94,
	"./bs.js": 94,
	"./ca": 95,
	"./ca.js": 95,
	"./cs": 96,
	"./cs.js": 96,
	"./cv": 97,
	"./cv.js": 97,
	"./cy": 98,
	"./cy.js": 98,
	"./da": 99,
	"./da.js": 99,
	"./de": 102,
	"./de-at": 100,
	"./de-at.js": 100,
	"./de-ch": 101,
	"./de-ch.js": 101,
	"./de.js": 102,
	"./dv": 103,
	"./dv.js": 103,
	"./el": 104,
	"./el.js": 104,
	"./en-au": 105,
	"./en-au.js": 105,
	"./en-ca": 106,
	"./en-ca.js": 106,
	"./en-gb": 107,
	"./en-gb.js": 107,
	"./en-ie": 108,
	"./en-ie.js": 108,
	"./en-nz": 109,
	"./en-nz.js": 109,
	"./eo": 110,
	"./eo.js": 110,
	"./es": 112,
	"./es-do": 111,
	"./es-do.js": 111,
	"./es.js": 112,
	"./et": 113,
	"./et.js": 113,
	"./eu": 114,
	"./eu.js": 114,
	"./fa": 115,
	"./fa.js": 115,
	"./fi": 116,
	"./fi.js": 116,
	"./fo": 117,
	"./fo.js": 117,
	"./fr": 120,
	"./fr-ca": 118,
	"./fr-ca.js": 118,
	"./fr-ch": 119,
	"./fr-ch.js": 119,
	"./fr.js": 120,
	"./fy": 121,
	"./fy.js": 121,
	"./gd": 122,
	"./gd.js": 122,
	"./gl": 123,
	"./gl.js": 123,
	"./gom-latn": 124,
	"./gom-latn.js": 124,
	"./he": 125,
	"./he.js": 125,
	"./hi": 126,
	"./hi.js": 126,
	"./hr": 127,
	"./hr.js": 127,
	"./hu": 128,
	"./hu.js": 128,
	"./hy-am": 129,
	"./hy-am.js": 129,
	"./id": 130,
	"./id.js": 130,
	"./is": 131,
	"./is.js": 131,
	"./it": 132,
	"./it.js": 132,
	"./ja": 133,
	"./ja.js": 133,
	"./jv": 134,
	"./jv.js": 134,
	"./ka": 135,
	"./ka.js": 135,
	"./kk": 136,
	"./kk.js": 136,
	"./km": 137,
	"./km.js": 137,
	"./kn": 138,
	"./kn.js": 138,
	"./ko": 139,
	"./ko.js": 139,
	"./ky": 140,
	"./ky.js": 140,
	"./lb": 141,
	"./lb.js": 141,
	"./lo": 142,
	"./lo.js": 142,
	"./lt": 143,
	"./lt.js": 143,
	"./lv": 144,
	"./lv.js": 144,
	"./me": 145,
	"./me.js": 145,
	"./mi": 146,
	"./mi.js": 146,
	"./mk": 147,
	"./mk.js": 147,
	"./ml": 148,
	"./ml.js": 148,
	"./mr": 149,
	"./mr.js": 149,
	"./ms": 151,
	"./ms-my": 150,
	"./ms-my.js": 150,
	"./ms.js": 151,
	"./my": 152,
	"./my.js": 152,
	"./nb": 153,
	"./nb.js": 153,
	"./ne": 154,
	"./ne.js": 154,
	"./nl": 156,
	"./nl-be": 155,
	"./nl-be.js": 155,
	"./nl.js": 156,
	"./nn": 157,
	"./nn.js": 157,
	"./pa-in": 158,
	"./pa-in.js": 158,
	"./pl": 159,
	"./pl.js": 159,
	"./pt": 161,
	"./pt-br": 160,
	"./pt-br.js": 160,
	"./pt.js": 161,
	"./ro": 162,
	"./ro.js": 162,
	"./ru": 163,
	"./ru.js": 163,
	"./sd": 164,
	"./sd.js": 164,
	"./se": 165,
	"./se.js": 165,
	"./si": 166,
	"./si.js": 166,
	"./sk": 167,
	"./sk.js": 167,
	"./sl": 168,
	"./sl.js": 168,
	"./sq": 169,
	"./sq.js": 169,
	"./sr": 171,
	"./sr-cyrl": 170,
	"./sr-cyrl.js": 170,
	"./sr.js": 171,
	"./ss": 172,
	"./ss.js": 172,
	"./sv": 173,
	"./sv.js": 173,
	"./sw": 174,
	"./sw.js": 174,
	"./ta": 175,
	"./ta.js": 175,
	"./te": 176,
	"./te.js": 176,
	"./tet": 177,
	"./tet.js": 177,
	"./th": 178,
	"./th.js": 178,
	"./tl-ph": 179,
	"./tl-ph.js": 179,
	"./tlh": 180,
	"./tlh.js": 180,
	"./tr": 181,
	"./tr.js": 181,
	"./tzl": 182,
	"./tzl.js": 182,
	"./tzm": 184,
	"./tzm-latn": 183,
	"./tzm-latn.js": 183,
	"./tzm.js": 184,
	"./uk": 185,
	"./uk.js": 185,
	"./ur": 186,
	"./ur.js": 186,
	"./uz": 188,
	"./uz-latn": 187,
	"./uz-latn.js": 187,
	"./uz.js": 188,
	"./vi": 189,
	"./vi.js": 189,
	"./x-pseudo": 190,
	"./x-pseudo.js": 190,
	"./yo": 191,
	"./yo.js": 191,
	"./zh-cn": 192,
	"./zh-cn.js": 192,
	"./zh-hk": 193,
	"./zh-hk.js": 193,
	"./zh-tw": 194,
	"./zh-tw.js": 194
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
webpackContext.id = 297;


/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "<p>\n  curriculum works!\n</p>\n"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../assets/images/homepic.png\">\n<hr style=\"background-color: black; height: 3px;\">\n<p style=\" color: black; font-size: 60px;\">Where kids ages 4-14 learn to code, creatively. </p>\n<p>BlockSchool is the first live online school to teach kids how to code. Choose a teacher, schedule a time, and your child will start learning how to code in magical block world.</p>\n<p>We believe coding is the language of 21st century.</p>\n<div>\n  <a class=\"btn btn-info\">Sign up</a>\n</div>\n"

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/home\">\n        <img class=\"brand-image\" alt=\"BlockSchool\" src=\"../../../assets/images/BlockSchool-Logo-NonStack.png\">\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"active\"><a href=\"#\">Mission <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"#\">Curriculum</a></li>\n        <li><a href=\"#\">Teachers</a></li>\n        <li><a href=\"#\">Pricing</a></li>\n        <li><a href=\"#\">FAQ</a></li>\n        <li><a href=\"#\">Contact Us</a></li>\n\n        <li class=\"navbar-spacer\"></li>\n\n        <li><a routerLink=\"signIn\">Sign in</a></li>\n        <li>\n          <form class=\"navbar-form\">\n            <a class=\"btn btn-info\" routerLink=\"signUp\">Sign up</a>\n          </form>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "<form #formRef=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" required placeholder=\"Enter your email here!\" [(ngModel)]=\"userInfo.email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" required placeholder=\"Enter your password here!\" [(ngModel)]=\"userInfo.password\">\n  </div><div class=\"form-group\">\n    <label for=\"confirm_password\">Confirm Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"confirm_password\" name=\"confirm_password\" required placeholder=\"Confirm your password here!\">\n  </div>\n\n  <br/>\n  <input type=\"checkbox\" id=\"readPrivacyPolicy\" name=\"readPrivacyPolicy\" value=\"readPrivacyPolicyChecked\"><span style=\"color: gray\">By clicking this, you agree that you have read our</span> <span>Pirvacy policy</span>. <br/>\n  <button type=\"submit\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</button>\n</form>\n"

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "<form #formRef=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"parentName\">Parent Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"parentName\" name=\"parentName\" required placeholder=\"Enter parent name here!\" [(ngModel)]=\"userInfo.parentName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"relationship\">Relationship</label>\n    <input type=\"text\" class=\"form-control\" id=\"relationship\" name=\"relationship\" required placeholder=\"Enter parent relationship here!\" [(ngModel)]=\"userInfo.relationship\">\n  </div><div class=\"form-group\">\n    <label for=\"childName\">Child Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"childName\" name=\"childName\" required placeholder=\"Enter the child name here!\" [(ngModel)]=\"userInfo.childName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"childAge\">Child Age</label>\n    <input type=\"text\" class=\"form-control\" id=\"childAge\" name=\"childAge\" required placeholder=\"Enter the child age here!\" [(ngModel)]=\"userInfo.childAge\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"childGender\">Child Gender</label>\n    <select id=\"childGender\" name=\"childGender\" [(ngModel)]=\"userInfo.childGender\">\n      <option value=\"M\">Male</option>\n      <option value=\"F\">Female</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"childBirthday\">Child Birthday</label>\n    <input type=\"datetime\" class=\"form-control\" id=\"childBirthday\" name=\"childBirthday\" required [(ngModel)]=\"userInfo.childBirthday\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"childIntest\">Child Interest</label>\n    <textarea class=\"form-control\" id=\"childInterest\" name=\"childInterest\" required [(ngModel)]=\"userInfo.childInterest\"></textarea>\n  </div>\n  <button type=\"submit\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</button>\n</form>\n\n"

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Pick Date & Time</h3>\n  <!--\n  <p>Planning Meeting with {{teacher.name}}</p>\n  -->\n  <hr>\n  <p>All times are in <select id=\"timezone-selector\"></select></p>\n  <div>\n    <angular2-fullcalendar id=\"freeTrailScheduler\" [options]=\"calendarOptions\"></angular2-fullcalendar>\n  </div>\n</div>\n"

/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"process-bar col-md-4 col-lg-4\">\n    <div class=\"bg-line\"></div>\n    <!--Create an account-->\n    <div class=\"process-status\" *ngIf=\"step1\">\n      <div class=\"dot\">1</div>\n      <a class=\"active\" routerLink=\"registeration-1\">Create an Account</a>\n    </div>\n    <div class=\"process-status\" *ngIf=\"!step1\">\n      <div class=\"transparent-dot\"></div>\n      <a>Create an Account</a>\n    </div>\n\n    <!--Register Parent and Child information-->\n    <div class=\"process-status\" *ngIf=\"step2\">\n      <div class=\"dot\">2</div>\n      <a class=\"active\" routerLink=\"registration-2\">Parent & Child Info</a>\n    </div>\n    <div class=\"process-status\" *ngIf=\"!step2\">\n      <div class=\"transparent-dot\"></div>\n      <a>Parent & Child Info</a>\n    </div>\n\n    <!--Schedule Free Trial Class-->\n    <div class=\"process-status\" *ngIf=\"step3\">\n      <div class=\"dot\">3</div>\n      <a class=\"active\" routerLink=\"registration-3\">Schedule Free Trial Class</a>\n    </div>\n    <div class=\"process-status\" *ngIf=\"!step3\">\n      <div class=\"transparent-dot\"></div>\n      <a>Schedule Free Trial Class</a>\n    </div>\n    <!--\n    <div class=\"process-content\">\n        <ul>\n            <li class=\"active\">\n                <div class=\"dot\"></div>\n                <a class=\"link\" href=\"#itme-1\">Create an Accoung</a>\n            </li>\n            <li>\n                <span class=\"dot\"><span class=\"inner\"></span></span>\n                <a class=\"link\" href=\"#itme-2\">Parent & Child Info</a>\n            </li>\n            <li>\n                <span class=\"dot\"><span class=\"inner\"></span></span>\n                <a class=\"link\" href=\"#itme-1\">Schedule Free Trial Class</a>\n            </li>\n        </ul>\n    </div>\n    -->\n   </div>\n\n  <div class=\"col-md-8 col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(212);


/***/ }),

/***/ 62:
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
        template: __webpack_require__(303),
        styles: [__webpack_require__(289)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 63:
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
    function Registration1Component(auth, signUp, _router) {
        this.auth = auth;
        this.signUp = signUp;
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
        this.signUp.setProcessStatus("step2");
        this._router.navigate(['signUp/registration-2']);
    };
    return Registration1Component;
}());
Registration1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-registration-1',
        template: __webpack_require__(306),
        styles: [__webpack_require__(292)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('auth')), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('signUp')),
    __metadata("design:paramtypes", [Object, Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration1Component);

var _a;
//# sourceMappingURL=registration-1.component.js.map

/***/ }),

/***/ 64:
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
    function Registration2Component(auth, signUp, _router) {
        this.auth = auth;
        this.signUp = signUp;
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
        this.signUp.setProcessStatus('step3');
    };
    return Registration2Component;
}());
Registration2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-registration-2',
        template: __webpack_require__(307),
        styles: [__webpack_require__(293)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('auth')), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('signUp')),
    __metadata("design:paramtypes", [Object, Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration2Component);

var _a;
//# sourceMappingURL=registration-2.component.js.map

/***/ }),

/***/ 65:
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
        template: __webpack_require__(308),
        styles: [__webpack_require__(294)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('schedule')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration3Component);

var _a;
//# sourceMappingURL=registration-3.component.js.map

/***/ }),

/***/ 66:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var SignupComponent = (function () {
    function SignupComponent(signUp) {
        this.signUp = signUp;
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getProcessStatus();
    };
    SignupComponent.prototype.getProcessStatus = function () {
        var _this = this;
        this.signUp.getProcessStatus().subscribe(function (step) {
            if (step == "step1") {
                _this.step1 = true;
                _this.step2 = false;
                _this.step3 = false;
            }
            else if (step == "step2") {
                _this.step1 = false;
                _this.step2 = true;
                _this.step3 = false;
            }
            else {
                _this.step1 = false;
                _this.step2 = false;
                _this.step3 = true;
            }
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(309),
        styles: [__webpack_require__(295)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('signUp')),
    __metadata("design:paramtypes", [Object])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ })

},[343]);
//# sourceMappingURL=main.bundle.js.map