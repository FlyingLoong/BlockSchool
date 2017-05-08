webpackJsonp([1,5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(176),
        styles: [__webpack_require__(163)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_curriculum_curriculum_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_signup_registration_1_registration_1_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_signup_registration_2_registration_2_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_signup_registration_3_registration_3_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_signup_signup_signup_component__ = __webpack_require__(63);
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
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_curriculum_curriculum_component__["a" /* CurriculumComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_signup_registration_1_registration_1_component__["a" /* Registration1Component */],
            __WEBPACK_IMPORTED_MODULE_12__components_signup_registration_2_registration_2_component__["a" /* Registration2Component */],
            __WEBPACK_IMPORTED_MODULE_13__components_signup_registration_3_registration_3_component__["a" /* Registration3Component */],
            __WEBPACK_IMPORTED_MODULE_14__components_signup_signup_signup_component__["a" /* SignupComponent */]
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
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_signup_signup_signup_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_signup_registration_1_registration_1_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_signup_registration_2_registration_2_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_signup_registration_3_registration_3_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(33);
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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(177),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [])
], CurriculumComponent);

//# sourceMappingURL=curriculum.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(179),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(180),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(189);
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

/***/ 108:
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

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".navbar-default {\n  background-color: transparent;\n}\n\n.navbar-brand {\n  padding: 20px 100px 50px 15px;\n}\n\n.navbar-nav {\n  margin-top: 10px;\n}\n\n.navbar-nav .navbar-spacer {\n  width: 2px;\n  height: 25px;\n  margin-top: 12px;\n  background-color: #ddd;\n}\n\n.brand-image {\n  width: 150px;\n  height: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".auth-input {\n    width: 80%;\n    height: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<p>\n  curriculum works!\n</p>\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../assets/images/homepic.png\">\n<hr style=\"background-color: black; height: 3px;\">\n<p style=\" color: black; font-size: 60px;\">Where kids ages 4-14 learn to code, creatively. </p>\n<p>BlockSchool is the first live online school to teach kids how to code. Choose a teacher, schedule a time, and your child will start learning how to code in magical block world.</p>\n<p>We believe coding is the language of 21st century.</p>\n<div>\n  <a class=\"btn btn-info\">Sign up</a>\n</div>\n"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/home\">\n        <img class=\"brand-image\" alt=\"BlockSchool\" src=\"../../../assets/images/BlockSchool-Logo-NonStack.png\">\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"active\"><a href=\"#\">Mission <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"#\">Curriculum</a></li>\n        <li><a href=\"#\">Teachers</a></li>\n        <li><a href=\"#\">Pricing</a></li>\n        <li><a href=\"#\">FAQ</a></li>\n        <li><a href=\"#\">Contact Us</a></li>\n\n        <li class=\"navbar-spacer\"></li>\n\n        <li><a routerLink=\"signIn\">Sign in</a></li>\n        <li>\n          <form class=\"navbar-form\">\n            <a class=\"btn btn-info\" routerLink=\"signUp\">Sign up</a>\n          </form>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" required placeholder=\"Enter your email here!\" [(ngModel)]=\"userInfo.email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" required placeholder=\"Enter your password here!\" [(ngModel)]=\"userInfo.password\">\n    </div><div class=\"form-group\">\n      <label for=\"confirm_password\">Confirm Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"confirm_password\" name=\"confirm_password\" required placeholder=\"Confirm your password here!\">\n    </div>\n    <!--\n    <a routerLink=\"../registration-2\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</a>\n    -->\n    <br/>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <input type=\"checkbox\" id=\"readPrivacyPolicy\" name=\"readPrivacyPolicy\" value=\"readPrivacyPolicyChecked\"><span style=\"color: gray\">By clicking this, you agree that you have read our</span> <span>Pirvacy policy</span>. <br/>\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"parentName\">Parent Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"parentName\" name=\"parentName\" required placeholder=\"Enter parent name here!\" [(ngModel)]=\"userInfo.parentName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"relationship\">Relationship</label>\n      <input type=\"text\" class=\"form-control\" id=\"relationship\" name=\"relationship\" required placeholder=\"Enter parent relationship here!\" [(ngModel)]=\"userInfo.relationship\">\n    </div><div class=\"form-group\">\n      <label for=\"childName\">Child Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"childName\" name=\"childName\" required placeholder=\"Enter the child name here!\" [(ngModel)]=\"userInfo.childName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childAge\">Child Age</label>\n      <input type=\"text\" class=\"form-control\" id=\"childAge\" name=\"childAge\" required placeholder=\"Enter the child age here!\" [(ngModel)]=\"userInfo.childAge\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childGender\">Child Gender</label>\n      <select id=\"childGender\" name=\"childGender\" [(ngModel)]=\"userInfo.childGender\">\n        <option value=\"M\">Male</option>\n        <option value=\"F\">Female</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childBirthday\">Child Birthday</label>\n      <input type=\"datetime\" class=\"form-control\" id=\"childBirthday\" name=\"childBirthday\" required [(ngModel)]=\"userInfo.childBirthday\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childIntest\">Child Interest</label>\n      <textarea class=\"form-control\" id=\"childInterest\" name=\"childInterest\" required [(ngModel)]=\"userInfo.childInterest\"></textarea>\n    </div>\n    <!--\n    <a routerLink=\"../registration-2\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</a>\n    -->\n    <button type=\"submit\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</button>\n  </form>\n</div>\n\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<p>\n  registration-3 works!\n</p>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 list-group\">\n    <a class=\"list-group-item\" routerLink=\"registration-1\">Create an Account</a>\n    <a class=\"list-group-item\"routerLink=\"registration-2\">Parent & Child Info</a>\n    <a class=\"list-group-item\" routerLink=\"registration-3\">Schedule Free Trial Class</a>\n  </div>\n\n  <div class = \"col-md-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(178),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
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
        template: __webpack_require__(181),
        styles: [__webpack_require__(168)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('auth')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration1Component);

var _a;
//# sourceMappingURL=registration-1.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
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
        template: __webpack_require__(182),
        styles: [__webpack_require__(169)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])("auth")),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration2Component);

var _a;
//# sourceMappingURL=registration-2.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

var Registration3Component = (function () {
    function Registration3Component() {
    }
    Registration3Component.prototype.ngOnInit = function () {
    };
    return Registration3Component;
}());
Registration3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-registration-3',
        template: __webpack_require__(183),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], Registration3Component);

//# sourceMappingURL=registration-3.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(184),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 91;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(108);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.bundle.js.map