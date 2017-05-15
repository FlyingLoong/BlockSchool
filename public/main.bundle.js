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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(221);
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
        template: __webpack_require__(304),
        styles: [__webpack_require__(288)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_schedule_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_curriculum_curriculum_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_signup_registration_1_registration_1_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_signup_registration_2_registration_2_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_signup_registration_3_registration_3_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_signup_registration_4_registration_4_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_signup_signup_signup_component__ = __webpack_require__(69);
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
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_curriculum_curriculum_component__["a" /* CurriculumComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_signup_registration_1_registration_1_component__["a" /* Registration1Component */],
            __WEBPACK_IMPORTED_MODULE_14__components_signup_registration_2_registration_2_component__["a" /* Registration2Component */],
            __WEBPACK_IMPORTED_MODULE_15__components_signup_registration_3_registration_3_component__["a" /* Registration3Component */],
            __WEBPACK_IMPORTED_MODULE_16__components_signup_registration_4_registration_4_component__["a" /* Registration4Component */],
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
            { provide: 'data',
                useClass: __WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_signup_signup_signup_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_signup_registration_1_registration_1_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_signup_registration_2_registration_2_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_signup_registration_3_registration_3_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_signup_registration_4_registration_4_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(18);
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
        path: 'registration-4',
        component: __WEBPACK_IMPORTED_MODULE_4__components_signup_registration_4_registration_4_component__["a" /* Registration4Component */]
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
        component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */]
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
var routes = __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
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
        template: __webpack_require__(305),
        styles: [__webpack_require__(289)]
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
        template: __webpack_require__(307),
        styles: [__webpack_require__(291)]
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
        template: __webpack_require__(308),
        styles: [__webpack_require__(292)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(54);
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
    email: '',
    password: '',
    parentName: '',
    relationship: '',
    childName: '',
    childAge: 5,
    childGender: '',
    childBirthday: '',
    childInterest: ''
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.coursesSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.projectsSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.teachersSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    DataService.prototype.getProjectsByPerson = function (person_id, role) {
        var _this = this;
        this.http.get("api/v1/search/projects/" + role + "/" + person_id)
            .toPromise()
            .then(function (res) {
            _this.projectsSource.next(res.json());
        })
            .catch(this.handleError);
        return this.projectsSource.asObservable();
    };
    DataService.prototype.getTeachersByProject = function (project_id) {
        var _this = this;
        this.http.get("api/v1/search/teachers/project/" + project_id)
            .toPromise()
            .then(function (res) {
            _this.teachersSource.next(res.json());
        })
            .catch(this.handleError);
        return this.teachersSource.asObservable();
    };
    DataService.prototype.getCoursesByPerson = function (person_id, role) {
        var _this = this;
        this.http.get("api/v1/search/courses/" + role + "/" + person_id)
            .toPromise()
            .then(function (res) {
            _this.coursesSource.next(res.json());
        })
            .catch(this.handleError);
        return this.coursesSource.asObservable();
    };
    DataService.prototype.checkTimeNotTaken = function (start_unix, end_unix, courses) {
        var isTaken = false;
        for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
            var course = courses_1[_i];
            if ((course.start_unix < start_unix && course.end_unix > start_unix)
                ||
                    (course.start_unix < end_unix && course.end_unix > end_unix)
                ||
                    (start_unix < course.start_unix && end_unix > course.start_unix)
                ||
                    (start_unix < course.end_unix && end_unix > course.end_unix)) {
                isTaken = true;
            }
        }
        if (isTaken) {
            return false;
        }
        return true;
    };
    ;
    DataService.prototype.bookCourseForPerson = function (course, role, person_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post("api/v1/booking/course/" + role + "/" + person_id, course, headers)
            .toPromise()
            .then(function (res) {
            _this.getCoursesByPerson(course.teacher_id, role);
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.removeCourseForPerson = function (course, role, person_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post("api/v1/removing/course/" + role + "/" + person_id, course, headers)
            .toPromise()
            .then(function (res) {
            _this.getCoursesByPerson(course.teacher_id, 'teacher');
            return res.json();
        })
            .catch(this.handleError);
    };
    // error handler
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.body || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(54);
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

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".navbar-default {\n  background-color: transparent;\n}\n\n.navbar-brand {\n  padding: 20px 100px 50px 15px;\n}\n\n.navbar-nav {\n  margin-top: 10px;\n}\n\n.navbar-nav .navbar-spacer {\n  width: 2px;\n  height: 25px;\n  margin-top: 12px;\n  background-color: #ddd;\n}\n\n.brand-image {\n  width: 150px;\n  height: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".auth-input {\n    width: 80%;\n    height: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 82,
	"./af.js": 82,
	"./ar": 89,
	"./ar-dz": 83,
	"./ar-dz.js": 83,
	"./ar-kw": 84,
	"./ar-kw.js": 84,
	"./ar-ly": 85,
	"./ar-ly.js": 85,
	"./ar-ma": 86,
	"./ar-ma.js": 86,
	"./ar-sa": 87,
	"./ar-sa.js": 87,
	"./ar-tn": 88,
	"./ar-tn.js": 88,
	"./ar.js": 89,
	"./az": 90,
	"./az.js": 90,
	"./be": 91,
	"./be.js": 91,
	"./bg": 92,
	"./bg.js": 92,
	"./bn": 93,
	"./bn.js": 93,
	"./bo": 94,
	"./bo.js": 94,
	"./br": 95,
	"./br.js": 95,
	"./bs": 96,
	"./bs.js": 96,
	"./ca": 97,
	"./ca.js": 97,
	"./cs": 98,
	"./cs.js": 98,
	"./cv": 99,
	"./cv.js": 99,
	"./cy": 100,
	"./cy.js": 100,
	"./da": 101,
	"./da.js": 101,
	"./de": 104,
	"./de-at": 102,
	"./de-at.js": 102,
	"./de-ch": 103,
	"./de-ch.js": 103,
	"./de.js": 104,
	"./dv": 105,
	"./dv.js": 105,
	"./el": 106,
	"./el.js": 106,
	"./en-au": 107,
	"./en-au.js": 107,
	"./en-ca": 108,
	"./en-ca.js": 108,
	"./en-gb": 109,
	"./en-gb.js": 109,
	"./en-ie": 110,
	"./en-ie.js": 110,
	"./en-nz": 111,
	"./en-nz.js": 111,
	"./eo": 112,
	"./eo.js": 112,
	"./es": 114,
	"./es-do": 113,
	"./es-do.js": 113,
	"./es.js": 114,
	"./et": 115,
	"./et.js": 115,
	"./eu": 116,
	"./eu.js": 116,
	"./fa": 117,
	"./fa.js": 117,
	"./fi": 118,
	"./fi.js": 118,
	"./fo": 119,
	"./fo.js": 119,
	"./fr": 122,
	"./fr-ca": 120,
	"./fr-ca.js": 120,
	"./fr-ch": 121,
	"./fr-ch.js": 121,
	"./fr.js": 122,
	"./fy": 123,
	"./fy.js": 123,
	"./gd": 124,
	"./gd.js": 124,
	"./gl": 125,
	"./gl.js": 125,
	"./gom-latn": 126,
	"./gom-latn.js": 126,
	"./he": 127,
	"./he.js": 127,
	"./hi": 128,
	"./hi.js": 128,
	"./hr": 129,
	"./hr.js": 129,
	"./hu": 130,
	"./hu.js": 130,
	"./hy-am": 131,
	"./hy-am.js": 131,
	"./id": 132,
	"./id.js": 132,
	"./is": 133,
	"./is.js": 133,
	"./it": 134,
	"./it.js": 134,
	"./ja": 135,
	"./ja.js": 135,
	"./jv": 136,
	"./jv.js": 136,
	"./ka": 137,
	"./ka.js": 137,
	"./kk": 138,
	"./kk.js": 138,
	"./km": 139,
	"./km.js": 139,
	"./kn": 140,
	"./kn.js": 140,
	"./ko": 141,
	"./ko.js": 141,
	"./ky": 142,
	"./ky.js": 142,
	"./lb": 143,
	"./lb.js": 143,
	"./lo": 144,
	"./lo.js": 144,
	"./lt": 145,
	"./lt.js": 145,
	"./lv": 146,
	"./lv.js": 146,
	"./me": 147,
	"./me.js": 147,
	"./mi": 148,
	"./mi.js": 148,
	"./mk": 149,
	"./mk.js": 149,
	"./ml": 150,
	"./ml.js": 150,
	"./mr": 151,
	"./mr.js": 151,
	"./ms": 153,
	"./ms-my": 152,
	"./ms-my.js": 152,
	"./ms.js": 153,
	"./my": 154,
	"./my.js": 154,
	"./nb": 155,
	"./nb.js": 155,
	"./ne": 156,
	"./ne.js": 156,
	"./nl": 158,
	"./nl-be": 157,
	"./nl-be.js": 157,
	"./nl.js": 158,
	"./nn": 159,
	"./nn.js": 159,
	"./pa-in": 160,
	"./pa-in.js": 160,
	"./pl": 161,
	"./pl.js": 161,
	"./pt": 163,
	"./pt-br": 162,
	"./pt-br.js": 162,
	"./pt.js": 163,
	"./ro": 164,
	"./ro.js": 164,
	"./ru": 165,
	"./ru.js": 165,
	"./sd": 166,
	"./sd.js": 166,
	"./se": 167,
	"./se.js": 167,
	"./si": 168,
	"./si.js": 168,
	"./sk": 169,
	"./sk.js": 169,
	"./sl": 170,
	"./sl.js": 170,
	"./sq": 171,
	"./sq.js": 171,
	"./sr": 173,
	"./sr-cyrl": 172,
	"./sr-cyrl.js": 172,
	"./sr.js": 173,
	"./ss": 174,
	"./ss.js": 174,
	"./sv": 175,
	"./sv.js": 175,
	"./sw": 176,
	"./sw.js": 176,
	"./ta": 177,
	"./ta.js": 177,
	"./te": 178,
	"./te.js": 178,
	"./tet": 179,
	"./tet.js": 179,
	"./th": 180,
	"./th.js": 180,
	"./tl-ph": 181,
	"./tl-ph.js": 181,
	"./tlh": 182,
	"./tlh.js": 182,
	"./tr": 183,
	"./tr.js": 183,
	"./tzl": 184,
	"./tzl.js": 184,
	"./tzm": 186,
	"./tzm-latn": 185,
	"./tzm-latn.js": 185,
	"./tzm.js": 186,
	"./uk": 187,
	"./uk.js": 187,
	"./ur": 188,
	"./ur.js": 188,
	"./uz": 190,
	"./uz-latn": 189,
	"./uz-latn.js": 189,
	"./uz.js": 190,
	"./vi": 191,
	"./vi.js": 191,
	"./x-pseudo": 192,
	"./x-pseudo.js": 192,
	"./yo": 193,
	"./yo.js": 193,
	"./zh-cn": 194,
	"./zh-cn.js": 194,
	"./zh-hk": 195,
	"./zh-hk.js": 195,
	"./zh-tw": 196,
	"./zh-tw.js": 196
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
webpackContext.id = 300;


/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "<p>\n  curriculum works!\n</p>\n"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../assets/images/homepic.png\">\n<hr style=\"background-color: black; height: 3px;\">\n<p style=\" color: black; font-size: 60px;\">Where kids ages 4-14 learn to code, creatively. </p>\n<p>BlockSchool is the first live online school to teach kids how to code. Choose a teacher, schedule a time, and your child will start learning how to code in magical block world.</p>\n<p>We believe coding is the language of 21st century.</p>\n<div>\n  <a class=\"btn btn-info\">Sign up</a>\n</div>\n"

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/home\">\n        <img class=\"brand-image\" alt=\"BlockSchool\" src=\"../../../assets/images/BlockSchool-Logo-NonStack.png\">\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"active\"><a href=\"#\">Mission <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"#\">Curriculum</a></li>\n        <li><a href=\"#\">Teachers</a></li>\n        <li><a href=\"#\">Pricing</a></li>\n        <li><a href=\"#\">FAQ</a></li>\n        <li><a href=\"#\">Contact Us</a></li>\n\n        <li class=\"navbar-spacer\"></li>\n\n        <li><a routerLink=\"signIn\">Sign in</a></li>\n        <li>\n          <form class=\"navbar-form\">\n            <a class=\"btn btn-info\" routerLink=\"signUp\">Sign up</a>\n          </form>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" required placeholder=\"Enter your email here!\" [(ngModel)]=\"userInfo.email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" required placeholder=\"Enter your password here!\" [(ngModel)]=\"userInfo.password\">\n    </div><div class=\"form-group\">\n      <label for=\"confirm_password\">Confirm Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"confirm_password\" name=\"confirm_password\" required placeholder=\"Confirm your password here!\">\n    </div>\n    <!--\n    <a routerLink=\"../registration-2\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</a>\n    -->\n    <br/>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <input type=\"checkbox\" id=\"readPrivacyPolicy\" name=\"readPrivacyPolicy\" value=\"readPrivacyPolicyChecked\"><span style=\"color: gray\">By clicking this, you agree that you have read our</span> <span>Pirvacy policy</span>. <br/>\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"parentName\">Parent Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"parentName\" name=\"parentName\" required placeholder=\"Enter parent name here!\" [(ngModel)]=\"userInfo.parentName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"relationship\">Relationship</label>\n      <input type=\"text\" class=\"form-control\" id=\"relationship\" name=\"relationship\" required placeholder=\"Enter parent relationship here!\" [(ngModel)]=\"userInfo.relationship\">\n    </div><div class=\"form-group\">\n      <label for=\"childName\">Child Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"childName\" name=\"childName\" required placeholder=\"Enter the child name here!\" [(ngModel)]=\"userInfo.childName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childAge\">Child Age</label>\n      <input type=\"text\" class=\"form-control\" id=\"childAge\" name=\"childAge\" required placeholder=\"Enter the child age here!\" [(ngModel)]=\"userInfo.childAge\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childGender\">Child Gender</label>\n      <select id=\"childGender\" name=\"childGender\" [(ngModel)]=\"userInfo.childGender\">\n        <option value=\"M\">Male</option>\n        <option value=\"F\">Female</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childBirthday\">Child Birthday</label>\n      <input type=\"datetime\" class=\"form-control\" id=\"childBirthday\" name=\"childBirthday\" required [(ngModel)]=\"userInfo.childBirthday\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"childIntest\">Child Interest</label>\n      <textarea class=\"form-control\" id=\"childInterest\" name=\"childInterest\" required [(ngModel)]=\"userInfo.childInterest\"></textarea>\n    </div>\n    <!--\n    <a routerLink=\"../registration-2\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</a>\n    -->\n    <button type=\"submit\" class=\"btn btn-info\" (click)=\"nextStep()\">Next Step</button>\n  </form>\n</div>\n\n"

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Pick Date & Time</h3>\n  <!--\n  <p>Planning Meeting with {{teacher.name}}</p>\n  -->\n  <hr>\n  <p>All times are in <select id=\"timezone-selector\"></select></p>\n  <div>\n    angular2-fullcalendar\n  </div>\n</div>\n"

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Pick Date & Time</h3>\n  <!--\n  <p>Planning Meeting with {{teacher.name}}</p>\n  -->\n  <hr>\n  <p>All times are in <select id=\"timezone-selector\"></select></p>\n  <!-- fullcalendar and corresponding modals -->\n  <div class=\"container-fluid\">\n    <div class=\"btn-group\">\n      <!--\"Search Course\" Button triggers corresponding modal -->\n      <!-- \"Search Course Path: Project -> Teacher -> Course\"-->\n      <span>\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"searchMyBookedCourses()\">\n        <span class =\"glyphicon glyphicon-ok-circle\" arial-hidden=\"true\"></span> My Course\n      </button>\n    </span>\n      <span>\n      <button type=\"button\" class=\"{{'btn btn-'+bookingButtonColor}}\" *ngIf=\"ActiveBookingButton()\" (click)=\"bookingButtonClick()\">\n        <span class =\"glyphicon glyphicon-tag\" arial-hidden=\"true\"></span> Reservation\n      </button>\n    </span>\n      <span>\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"initSearchModal()\" data-toggle=\"modal\" data-target=\"#exampleModalSearchCourse\">\n        <span class =\"glyphicon glyphicon-search\" arial-hidden=\"true\"></span> Search\n      </button>\n    </span>\n      <span class=\"label label-info\">{{projectNameForLabel}}</span>\n      <span class=\"label label-info\">{{teacherNameForLabel}}</span>\n\n      <!-- Search Modal -->\n      <div class=\"modal fade\" id=\"exampleModalSearchCourse\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalSearchCourseTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header bg-info\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n              <h4 class=\"modal-title\" id=\"exampleModalSearchCourseTitle\">\n                <span class =\"glyphicon glyphicon-search\" arial-hidden=\"true\"></span> Select Your Project and Teacher\n              </h4>\n            </div>\n            <div class=\"modal-body\">\n              <form #formRef=\"ngForm\">\n                <!--Select Project-->\n                <div class=\"form-group\">\n                  <label for=\"project\">Project</label>\n                  <select class=\"form-control\" id=\"project\"\n                          name=\"project\" [(ngModel)]=\"searchFilter.project_id\" (change)=\"searchTeachersByProject()\">\n                    <option *ngFor=\"let projectForSearch of projectsForSearch\" [value]=\"projectForSearch.id\">\n                      {{projectForSearch.name}}\n                    </option>\n                  </select>\n                </div>\n                <!--Select Teacher-->\n                <div class=\"form-group\" *ngIf=\"activeTeacherSelectList()\">\n                  <label for=\"teacher\">Teacher</label>\n                  <select class=\"form-control\" id=\"teacher\"\n                          name=\"teacher\" [(ngModel)]=\"searchFilter.teacher_id\">\n                    <option *ngFor=\"let teacherForSearch of teachersForSearch\" [value]=\"teacherForSearch.id\">\n                      {{teacherForSearch.name}}\n                    </option>\n                  </select>\n                </div>\n              </form>\n            </div>\n            <!--Cancel or Search-->\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n              <button type=\"submit\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"searchCoursesByTeacher()\" >Search</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--\"Invalid Search Input\" modal) -->\n    <div class=\"modal fade\" id=\"invalidSearchInputModal\" tabindex=\"-1\" role=\"dialog\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header bg-warning\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\">\n              <span class =\"glyphicon glyphicon-question-sign\" arial-hidden=\"true\"></span> Sorry!\n            </h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>The search information is invalid. Please try again.</p>\n          </div>\n          <!--Cancel-->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" >Cancel</button>\n          </div>\n        </div><!-- /.modal-content -->\n      </div><!-- /.modal-dialog -->\n    </div><!-- /.modal -->\n    <!--\"Book Course\" Button triggers corresponding modal -->\n    <div class=\"modal fade\" id=\"bookCourseModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"bookCourseModal\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header bg-success\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\" id=\"bookCourseModalTitle\">\n              <span class =\"glyphicon glyphicon-tag\" arial-hidden=\"true\"></span> Book Your Course Now\n            </h4>\n          </div>\n          <div class=\"modal-body\">\n            <p><span class =\"glyphicon glyphicon-blackboard\" arial-hidden=\"true\"></span> Project: {{newCourse.project_name}}</p>\n            <p><span class =\"glyphicon glyphicon-user\" arial-hidden=\"true\"></span> Teacher: {{newCourse.teacher_name}}</p>\n            <p><span class =\"glyphicon glyphicon-time\" arial-hidden=\"true\"></span> Time: {{startForBookingModal}} <span class =\"glyphicon glyphicon-arrow-right\" arial-hidden=\"true\"></span> {{endForBookingModal}}</p>\n            <hr>\n            <!--Select moduleUnit-->\n            <div class=\"form-group\">\n              <label for=\"moduleUnit\">Select Your Module</label>\n              <select class=\"form-control\" id=\"moduleUnit\"\n                      name=\"moduleUnit\" [(ngModel)]=\"newCourse.title\">\n                <option *ngFor=\"let moduleUnit of modulesUnits\" [value]=\"moduleUnit.title\">\n                  {{moduleUnit.title}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <!--Cancel or Submit-->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"bookCourse()\">Submit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--\"Invalid Time Selection\" modal) -->\n    <div class=\"modal fade\" id=\"invalidTimeModal\" tabindex=\"-1\" role=\"dialog\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header bg-warning\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\">\n              <span class =\"glyphicon glyphicon-ban-circle\" arial-hidden=\"true\"></span> Sorry!\n            </h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>The time can not be selected. Please try another time.</p>\n          </div>\n          <!--Cancel-->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" >Cancel</button>\n          </div>\n        </div><!-- /.modal-content -->\n      </div><!-- /.modal-dialog -->\n    </div><!-- /.modal -->\n    <!--\"Invalid booking Input\" modal) -->\n    <div class=\"modal fade\" id=\"invalidBookingInputModal\" tabindex=\"-1\" role=\"dialog\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header bg-warning\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\">\n              <span class =\"glyphicon glyphicon-question-sign\" arial-hidden=\"true\"></span> Sorry!\n            </h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>The booking information is invalid. Please try again.</p>\n          </div>\n          <!--Cancel-->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" >Cancel</button>\n          </div>\n        </div><!-- /.modal-content -->\n      </div><!-- /.modal-dialog -->\n    </div><!-- /.modal -->\n    <!--\"Cancel the course you booked\" modal) -->\n    <div class=\"modal fade\" id=\"cancelBookedCourseModal\" tabindex=\"-1\" role=\"dialog\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header bg-danger\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\">\n              <span class =\"glyphicon glyphicon-exclamation-sign\" arial-hidden=\"true\"></span> Cancel Course\n            </h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>Are you sure you want to cancel this course?</p>\n          </div>\n          <!--Cancel-->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"removeCourse()\">Yes</button>\n          </div>\n        </div><!-- /.modal-content -->\n      </div><!-- /.modal-dialog -->\n    </div><!-- /.modal -->\n    <hr>\n    <div id='calendar'></div>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 list-group\">\n    <a class=\"list-group-item\" routerLink=\"registration-1\">Create an Account</a>\n    <a class=\"list-group-item\"routerLink=\"registration-2\">Parent & Child Info</a>\n    <a class=\"list-group-item\" routerLink=\"registration-3\">Schedule Free Trial Class</a>\n  </div>\n\n  <div class = \"col-md-9\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(212);


/***/ }),

/***/ 64:
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
        template: __webpack_require__(306),
        styles: [__webpack_require__(290)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
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
    email: '',
    password: '',
    parentName: '',
    relationship: '',
    childName: '',
    childAge: 5,
    childGender: '',
    childBirthday: '',
    childInterest: ''
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
        template: __webpack_require__(309),
        styles: [__webpack_require__(293)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('auth')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration1Component);

var _a;
//# sourceMappingURL=registration-1.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
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
    email: '',
    password: '',
    parentName: '',
    relationship: '',
    childName: '',
    childAge: 5,
    childGender: '',
    childBirthday: '',
    childInterest: ''
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
        console.log('user.email is ' + this.auth.user.email);
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
            .catch(console.log('Add user fail!') // Debug
        );
    };
    return Registration2Component;
}());
Registration2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-registration-2',
        template: __webpack_require__(310),
        styles: [__webpack_require__(294)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('auth')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration2Component);

var _a;
//# sourceMappingURL=registration-2.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
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
                left: 'prev',
                center: 'title, today',
                right: 'next'
            },
            defaultView: 'agendaWeek',
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
            teacherEmail: '..',
            title: 'Scheduled',
            start: date.format()
        };
        this.calendarOptions.events.push(event);
        // this.calendarEvents.push("1");
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#freeTrailScheduler').fullCalendar('renderEvent', event, true);
        this.schedule.addScheduleEvent(event)
            .then(function (eventSuccess) {
            _this._router.navigate(['home']);
        })
            .catch(function (err) {
            console.log('cant add the schedule!');
        });
    };
    Registration3Component.prototype.clickEvent = function (calEvent, jsEvent, view) {
        console.log('Event is clicked!');
    };
    return Registration3Component;
}());
Registration3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-registration-3',
        template: __webpack_require__(311),
        styles: [__webpack_require__(295)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('schedule')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration3Component);

var _a;
//# sourceMappingURL=registration-3.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullcalendar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registration4Component; });
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





var DEFAULT_COURSE = Object.freeze({
    id: '',
    title: '',
    grade: '',
    desc: '',
    type: '',
    project_id: '',
    project_name: '',
    teacher_id: '',
    teacher_name: '',
    student_id: '',
    student_name: '',
    start: null,
    end: null,
    start_unix: null,
    end_unix: null,
    booked: false
});
var Registration4Component = (function () {
    function Registration4Component(data, router) {
        this.data = data;
        this.router = router;
        this.person_name = '';
        this.person_id = '';
        this.person_role = '';
        this.searchFilter = {
            teacher_id: '',
            project_id: '',
            module_unit_id: ''
        };
        this.projectIdForLabel = '';
        this.teacherIdForLabel = '';
        this.projectNameForLabel = '';
        this.teacherNameForLabel = '';
        this.projectsForSearch = [];
        this.projects = [];
        this.modulesUnitsForSearch = [];
        this.modulesUnits = [];
        this.teachersForSearch = [];
        this.teachers = [];
        this.courses = [];
        this.newCourse = Object.assign({}, DEFAULT_COURSE);
        this.courseIdRemoving = '';
        this.startForBookingModal = '';
        this.endForBookingModal = '';
        this.myBookedCourses = [];
        this.eventLimitOption = true;
        this.editableOption = false;
        this.selectableOption = false;
        this.dateToCellElementList = new Map();
        this.calEventArray = [];
        this.eventElementArray = [];
        this.dayRenderMode = '';
        this.bookingButtonState = false;
        this.bookingButtonColor = 'info';
        this.cssMap = {
            'course-booking': {
                'background-color': '#d2fd35',
                'border-color': '#5bc0de'
            },
            'course-normal': {
                'background-color': '#ffffff',
                'border-color': '#5bc0de'
            },
            'course-editing': {
                'background-color': '#FECE55',
                'border-color': '#c9c9c9'
            },
            'course-removing': {
                'background-color': '#ffffff',
                'border-color': '#c42933'
            }
        };
    }
    Registration4Component.prototype.ngOnInit = function () {
        // get my profile by authGuard.getProfile()
        // this.person_name = this.authGuard.getProfile().name;
        // this.person_id = this.authGuard.getProfile().id;
        // this.person_role = this.authGuard.getProfile().role;
        // Mock: get my profile (role: student)
        this.person_name = 'Bob';
        this.person_id = '1e0ate67';
        this.person_role = 'student';
    };
    Registration4Component.prototype.ngAfterViewInit = function () {
        // load an empty calendar
        this.courseCalendar();
        // load all of my booked courses
        this.searchMyBookedCourses();
        this.changeTheme();
        // Observe my booked courses
        // this.searchMyBookedCourses();
    };
    Registration4Component.prototype.courseCalendar = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar({
            header: {
                left: 'bookingButton,today',
                center: 'prev title next',
                right: 'month,agendaWeek'
            },
            height: 500,
            // width vs height
            aspectRatio: 1.2,
            editable: this.editableOption,
            events: this.courses,
            eventLimit: this.eventLimitOption,
            eventColor: '#ffffff',
            eventTextColor: '#5bc0de',
            eventBorderColor: '#ffffff',
            // record as utc in server, yet display local time on calendar
            timezone: 'local',
            selectable: this.selectableOption,
            select: this.select.bind(this),
            eventRender: this.eventRender.bind(this),
            dayRender: this.dayRender.bind(this),
            eventClick: this.eventClick.bind(this),
            viewRender: this.changeTheme.bind(this)
        });
    };
    Registration4Component.prototype.select = function (start, end, allDay) {
        // only when current view is agendaWeek and bookingButton is on
        if (__WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('getView').name === 'agendaWeek' && this.bookingButtonState) {
            // when click on a calendar cell in agendaWeek, immediately record the time and invoke bookCourse() method
            // timezone: 'local', so the date on calendar is the local time.
            // both "start" and "end" still store UTC though always put the corresponding local time on the calendar
            // p.s. the UTC time will be stored in Mlab
            // invoke this.openBookingModal() method
            this.openBookingModal(start, end);
        }
    };
    Registration4Component.prototype.bookingButtonClick = function () {
        // turn on the booking-button , the button apply this style and assign state true
        if (!this.bookingButtonState) {
            this.bookingButtonState = true;
            console.log('Book now!');
            // when turn on the booking-button, goto the agendaWeek View ()
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('changeView', 'agendaWeek');
            return this.bookingButtonColor = 'success';
        }
        else {
            this.bookingButtonState = false;
            console.log('Can not book!');
            return this.bookingButtonColor = 'info';
        }
        ;
    };
    // Render each event
    Registration4Component.prototype.eventRender = function (calEvent, element, view) {
        this.calEventArray.push(calEvent);
        this.eventElementArray.push(element);
        if (calEvent.student_id !== this.person_id) {
            this.changeCSS(element, 'course-normal');
        }
        else {
            // change those events whose student_id match with mine
            this.changeCSS(element, 'course-booking');
        }
        ;
        this.paintEvents();
        this.changeTheme();
    };
    Registration4Component.prototype.dayRender = function (date, cell) {
        this.currentView = __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('getView');
        this.dateToCellElementList.set(date.format('YYYY-MM-DD'), cell);
        // when booking button is on, switch to the booking theme
        if (!this.bookingButtonState) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(cell).css('background-color', '#ffffff');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(cell).css('background-color', '#dff0d8');
        }
        ;
        // render today
        if (date.format('YYYY-MM-DD') === __WEBPACK_IMPORTED_MODULE_4_moment__().format('YYYY-MM-DD')) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(cell).css('background-color', '#f6ebbc');
        }
        ;
        // if the day has any booked course of mine, add the tick sign.
        var hasBookedCourse = false;
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var course = _a[_i];
            if (course.student_id === this.person_id &&
                course.booked &&
                __WEBPACK_IMPORTED_MODULE_4_moment__(course.start).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')) {
                hasBookedCourse = true;
            }
        }
        if (hasBookedCourse) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(cell).html('<img src="../../../../assets/images/icon-tick-small.png" width="20" height="20">');
        }
        else {
            // if the day has no booked course and already has a tick sign, remove it.
            if (__WEBPACK_IMPORTED_MODULE_3_jquery__('cell:has(img)').length !== 0) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(cell).children('img').remove();
            }
        }
    };
    Registration4Component.prototype.eventClick = function (calEvent, view) {
        // Only those courses I booked can be canceled
        if (this.bookingButtonState && (calEvent.student_id === this.person_id)) {
            this.courseIdRemoving = calEvent.id;
            jQuery('#cancelBookedCourseModal').modal('show');
        }
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar span.fc-title').css({
            'color': '#5bc0de',
        });
        // event time
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar span.fc-time').css({
            'color': '#5bc0de',
        });
    };
    Registration4Component.prototype.updateEvent = function () {
        var eventClient = __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('clientEvents');
        eventClient[3].title = 'xxx';
        for (var i = 0; i < eventClient.length; i++) {
        }
    };
    Registration4Component.prototype.changeCSS = function (element, key) {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(element).css('background-color', this.cssMap[key]['background-color']);
        __WEBPACK_IMPORTED_MODULE_3_jquery__(element).css('border-color', this.cssMap[key]['border-color']);
    };
    // In keeping with the style of homepage
    Registration4Component.prototype.changeTheme = function () {
        // Month Year
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar h2').css('color', '#777777');
        // week
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar span').css({
            'color': '#777777',
        });
        // day
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar span.fc-day-number').css({
            'color': '#777777',
        });
    };
    Registration4Component.prototype.paintEvents = function () {
        // event title
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar span.fc-title').css({
            'color': '#5bc0de',
        });
        // event time
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar span.fc-time').css({
            'color': '#5bc0de',
        });
    };
    // Press "Search" button to activate the search modal, then:
    // 1.immediately initiate the projects and teachers list
    // 2.immediately initiate the searchFilter
    // 3.invoke searchMyProjects() method
    Registration4Component.prototype.initSearchModal = function () {
        // 1
        this.projectsForSearch = [];
        this.teachersForSearch = [];
        // 2
        this.searchFilter.project_id = '';
        this.searchFilter.teacher_id = '';
        this.searchFilter.module_unit_id = '';
        // 3
        this.searchMyProjects();
    };
    // Get all of your projects and update the projects list in search modal
    Registration4Component.prototype.searchMyProjects = function () {
        var _this = this;
        this.projectsForSearch = [];
        this.subscriptionProjects = this.data.getProjectsByPerson(this.person_id, 'student')
            .subscribe(function (projects) {
            _this.projectsForSearch = projects;
        });
    };
    // when select project in modal , immediately update the corresponding teachers list
    Registration4Component.prototype.searchTeachersByProject = function () {
        var _this = this;
        this.teachersForSearch = [];
        var project_id = this.searchFilter.project_id;
        this.subscriptionTeachers = this.data.getTeachersByProject(project_id)
            .subscribe(function (teachers) {
            _this.teachersForSearch = teachers;
        });
    };
    // only when update teachers, active teacher select list
    Registration4Component.prototype.activeTeacherSelectList = function () {
        if (this.teachersForSearch.length !== 0) {
            return true;
        }
        return false;
    };
    // when press "Search" button in modal, immediately get all of the teacher's courses
    Registration4Component.prototype.searchCoursesByTeacher = function () {
        var _this = this;
        // firstly check whether the search input is valid
        if (this.searchFilter.project_id === '' || this.searchFilter.teacher_id === '') {
            jQuery('#invalidSearchInputModal').modal('show');
            return;
        }
        // secondly update projects and teachers
        this.projects = this.projectsForSearch;
        this.teachers = this.teachersForSearch;
        // search courses by teacher
        var teacher_id = this.searchFilter.teacher_id;
        this.subscriptionCourses = this.data.getCoursesByPerson(teacher_id, 'teacher')
            .subscribe(function (courses) {
            // hide course information of others and replace by "Taken"
            for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
                var course = courses_1[_i];
                if (course.student_id !== _this.person_id) {
                    course.title = 'Taken';
                }
            }
            // finally update courses
            _this.courses = courses;
            // after update courses,immediately update search label ( project -> teacher )
            _this.changeSearchLabel();
            // update corresponding modules or units of current project
            _this.modulesUnits = _this.projects.find(function (value) { return value.id === _this.projectIdForLabel; }).modulesUnits;
            // invoke displayBookingCalendar() method
            _this.displayBookingCalendar();
        });
    };
    // update search label ( project -> teacher )
    Registration4Component.prototype.changeSearchLabel = function () {
        var _this = this;
        this.projectIdForLabel = this.searchFilter.project_id;
        this.teacherIdForLabel = this.searchFilter.teacher_id;
        this.projectNameForLabel = this.projectsForSearch.find(function (value) { return value.id === _this.searchFilter.project_id; }).name;
        this.teacherNameForLabel = this.teachersForSearch.find(function (value) { return value.id === _this.searchFilter.teacher_id; }).name;
    };
    // when both project and teacher search labels exist, active the booking button
    Registration4Component.prototype.ActiveBookingButton = function () {
        if (this.projectIdForLabel && this.teacherIdForLabel) {
            return true;
        }
        return false;
    };
    Registration4Component.prototype.displayBookingCalendar = function () {
        console.log('Updating Calendar...');
        // after search you can select the cell
        this.selectableOption = true;
        // update the fullCalendar with new options:
        // 1.destroy the fullCalendar
        // 2.create the new fullCalendar
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('destroy');
        this.courseCalendar();
        // clear all events before updating
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('removeEvents');
        // add new events on Calendar
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('addEventSource', this.courses);
        // goto agendaWeek View
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('changeView', 'agendaWeek');
    };
    Registration4Component.prototype.openBookingModal = function (start, end) {
        // get timestamp and change the type to Number
        var start_unix = +start.valueOf();
        var end_unix = +end.valueOf();
        if (this.data.checkTimeNotTaken(start_unix, end_unix, this.courses)) {
            // Only when the time is not taken, you can book your course
            this.newCourse.grade = '';
            this.newCourse.desc = '';
            this.newCourse.type = 'private';
            this.newCourse.project_id = this.projectIdForLabel;
            this.newCourse.project_name = this.projectNameForLabel;
            this.newCourse.teacher_id = this.teacherIdForLabel;
            this.newCourse.teacher_name = this.teacherNameForLabel;
            this.newCourse.student_id = this.person_id;
            this.newCourse.student_name = this.person_name;
            this.newCourse.start = start;
            this.newCourse.end = end;
            this.newCourse.start_unix = start_unix;
            this.newCourse.end_unix = end_unix;
            this.newCourse.booked = true;
            // open booking modal
            this.startForBookingModal = start.format('MMMM Do YYYY, h:mm:ss a');
            this.endForBookingModal = end.format('MMMM Do YYYY, h:mm:ss a');
            jQuery('#bookCourseModal').modal('show');
        }
        else {
            jQuery('#invalidTimeModal').modal('show');
        }
    };
    // when press "Submit" button in booking modal
    Registration4Component.prototype.bookCourse = function () {
        // firstly check whether the booking input is valid
        if (this.newCourse.title === '') {
            jQuery('#invalidBookingInputModal').modal('show');
            return;
        }
        // secondly book this course
        this.data.bookCourseForPerson(this.newCourse, 'student', this.person_id)
            .then(function (course) {
            console.log('the course has been reserved');
        })
            .catch(function (error) { return console.log(error.body); });
        this.newCourse = Object.assign({}, DEFAULT_COURSE);
    };
    Registration4Component.prototype.searchMyBookedCourses = function () {
        var _this = this;
        this.myBookedCourses = [];
        this.subscriptionMyBookedCourses = this.data.getCoursesByPerson(this.person_id, 'student')
            .subscribe(function (courses) {
            _this.myBookedCourses = courses;
            _this.courses = _this.myBookedCourses;
            // invoke displayMyCoursesCalendar() method
            _this.displayMyCoursesCalendar();
        });
    };
    Registration4Component.prototype.displayMyCoursesCalendar = function () {
        // reset bookingButtonState and color manually
        this.bookingButtonState = false;
        this.bookingButtonColor = 'info';
        // read only, can not edit
        this.selectableOption = false;
        // update the fullCalendar with new options:
        // 1.destroy the fullCalendar
        // 2.create the new fullCalendar
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('destroy');
        this.courseCalendar();
        // clear all events before updating
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('removeEvents');
        // add new events on Calendar
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('addEventSource', this.myBookedCourses);
        // goto month View
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#calendar').fullCalendar('changeView', 'month');
        // when display my booked courses, clear all search labels.
        this.clearAllSearchLabels();
    };
    Registration4Component.prototype.clearAllSearchLabels = function () {
        this.projectIdForLabel = '';
        this.teacherIdForLabel = '';
        this.projectNameForLabel = '';
        this.teacherNameForLabel = '';
    };
    // when press "Yes" button in "cancelBookedCourse" modal
    Registration4Component.prototype.removeCourse = function () {
        var _this = this;
        var courseRemoving = this.courses.find(function (value) { return (value.id === _this.courseIdRemoving); });
        this.data.removeCourseForPerson(courseRemoving, 'student', this.person_id)
            .then(function (ok) {
            console.log('the course has been removed');
        })
            .catch(function (error) { return console.log(error.body); });
    };
    return Registration4Component;
}());
Registration4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-registration-4',
        template: __webpack_require__(312),
        styles: [__webpack_require__(296)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], Registration4Component);

var _a;
//# sourceMappingURL=registration-4.component.js.map

/***/ }),

/***/ 69:
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
        template: __webpack_require__(313),
        styles: [__webpack_require__(297)]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.bundle.js.map