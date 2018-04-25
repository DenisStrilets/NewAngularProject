webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<main>\r\n  <div class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" routerLink=\"allPost\">Personal blog</a>\r\n      </div>\r\n\r\n      <div class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a routerLink=\"newPost\">New Post</a>\r\n          </li>\r\n        </ul>\r\n\r\n        <ul class=\"nav navbar-nav pull-right\">\r\n          <li>\r\n            <a routerLink=\"registration\">Registration</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"login\">LogIn</a>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container body-content\">\r\n    <router-outlet></router-outlet>\r\n    <hr />\r\n    <footer>\r\n      <p>&copy; 2017  </p>\r\n    </footer>\r\n  </div>\r\n</main> -->\r\n<app-header></app-header>\r\n\r\n<div class=\"container-fluid\"> \r\n\t<router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_allPosts_allPost_component__ = __webpack_require__("./src/app/post/allPosts/allPost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_post_detail_post_component__ = __webpack_require__("./src/app/post/post-detail/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_newPost_newPost_component__ = __webpack_require__("./src/app/post/newPost/newPost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_hostHelper_service__ = __webpack_require__("./src/app/services/hostHelper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_registration_registration_component__ = __webpack_require__("./src/app/auth/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__post_allPosts_allPost_component__["a" /* AllPostComponent */] },
    { path: 'allPost', component: __WEBPACK_IMPORTED_MODULE_4__post_allPosts_allPost_component__["a" /* AllPostComponent */] },
    { path: "allPost/post/:postId", component: __WEBPACK_IMPORTED_MODULE_5__post_post_detail_post_component__["a" /* PostComponent */] },
    { path: 'post/:postId', component: __WEBPACK_IMPORTED_MODULE_5__post_post_detail_post_component__["a" /* PostComponent */] },
    { path: "newPost", component: __WEBPACK_IMPORTED_MODULE_6__post_newPost_newPost_component__["a" /* NewPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__auth_guard__["a" /* AuthGuard */]] },
    { path: "registration", component: __WEBPACK_IMPORTED_MODULE_13__auth_registration_registration_component__["a" /* RegistrationComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_15__auth_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__post_allPosts_allPost_component__["a" /* AllPostComponent */],
                __WEBPACK_IMPORTED_MODULE_5__post_post_detail_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_6__post_newPost_newPost_component__["a" /* NewPostComponent */],
                __WEBPACK_IMPORTED_MODULE_18__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__auth_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__auth_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_comment_service__["a" /* CommentService */],
                __WEBPACK_IMPORTED_MODULE_8__services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_9__services_hostHelper_service__["a" /* ConstHelperService */],
                __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__auth_guard__["a" /* AuthGuard */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.user.isLoggedIn()) {
            this.router.navigate(['api/Auth/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div style=\"margin-top:100px;\">\r\n\r\n    <h2 class=\"text-xs-center\">LogIn in Blog</h2>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\r\n      <div\r\n        class=\"form-group\"\r\n        [ngClass]=\"{'has-error': form.get('username').invalid && form.get('username').touched}\"\r\n      >\r\n        <label for=\"username\">Email</label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control underlined\"\r\n          id=\"username\"\r\n          placeholder=\"Enter your email\"\r\n          formControlName=\"username\"\r\n        >\r\n        <span\r\n          class=\"form-help-text\"\r\n          *ngIf=\"form.get('username').invalid && form.get('username').touched\"\r\n        >\r\n          <span *ngIf=\"form.get('username')['errors']['required']\">Email cant be empty. </span>\r\n          <span *ngIf=\"form.get('username')['errors']['email']\">Enter the correct email. </span>\r\n        </span>\r\n      </div>\r\n      <div\r\n        class=\"form-group\"\r\n        [ngClass]=\"{'has-error': form.get('password').invalid && form.get('password').touched}\"\r\n      >\r\n        <label for=\"password\">Password</label>\r\n        <input\r\n          type=\"password\"\r\n          class=\"form-control underlined\"\r\n          id=\"password\"\r\n          placeholder=\"Password\"\r\n          formControlName=\"password\"\r\n        >\r\n        <span\r\n          class=\"form-help-text\"\r\n          *ngIf=\"form.get('password').invalid && form.get('password').touched\"\r\n        >\r\n          <span *ngIf=\"form.get('password')['errors']['required']\">The password cant be empty </span>\r\n          <span *ngIf=\"form.get('password')['errors']['minlength']\">\r\n            The password should be more than\r\n            {{ form.get('password')['errors']['minlength']['requiredLength'] }}\r\n            characters. Curent size is {{ form.get('password')['errors']['minlength']['actualLength'] }}.\r\n          </span>\r\n        </span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-block btn-primary\"\r\n          [disabled]=\"form.invalid\"\r\n        >\r\n          LogIn\r\n        </button>\r\n      </div>\r\n    \r\n      <div *ngIf=\"errors\" class=\"alert alert-danger\"  >\r\n        <strong>The current User is Not Exist!Please make Registration</strong> \r\n        <a [routerLink]=\"'/registration'\">\r\n            Register!\r\n          </a>\r\n    </div>\r\n    \r\n    </form>\r\n    </div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_credentialsSendModel__ = __webpack_require__("./src/app/models/credentialsSendModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)])
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var _a = this.form.value, username = _a.username, password = _a.password;
        var user = new __WEBPACK_IMPORTED_MODULE_3__models_credentialsSendModel__["a" /* CredentialsSendModel */](username, password);
        this.authService.login(user)
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/allPost']);
                location.reload();
                return;
            }
        }, function (error) { return _this.errors = error; });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("./src/app/auth/login/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div style=\"margin-top:100px;\">\r\n    \r\n\r\n    <h2  class=\"text-xs-center\">Registration</h2>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <div\r\n        class=\"form-group\"\r\n        [ngClass]=\"{'has-error': form.get('email').invalid && form.get('email').touched}\"\r\n      >\r\n        <label for=\"email\">Email</label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control underlined\"\r\n          id=\"email\"\r\n          placeholder=\"Enter email\"\r\n          formControlName=\"email\"\r\n        >\r\n        <span\r\n          class=\"form-help-text\"\r\n          *ngIf=\"form.get('email').invalid && form.get('email').touched\"\r\n        >\r\n          <span *ngIf=\"form.get('email')['errors']['required']\">Email cant be empty. </span>\r\n          <span *ngIf=\"form.get('email')['errors']['email']\">Pass the correct email. </span>\r\n          <span *ngIf=\"form.get('email').hasError('isEmailUnique')\">This email has been registered already></span>\r\n            </span>\r\n              \r\n      </div>\r\n      <div\r\n        class=\"form-group\"\r\n        [ngClass]=\"{'has-error': form.get('password').invalid && form.get('password').touched}\"\r\n      >\r\n        <label for=\"password\">Password</label>\r\n        <input\r\n          type=\"password\"\r\n          class=\"form-control underlined\"\r\n          id=\"password\"\r\n          placeholder=\"Enter the password\"\r\n          formControlName=\"password\"\r\n        >\r\n        <span\r\n          class=\"form-help-text\"\r\n          *ngIf=\"form.get('password').invalid && form.get('password').touched\"\r\n        >\r\n          <span *ngIf=\"form.get('password')['errors']['required']\">Email cant be empty. </span>\r\n          <span *ngIf=\"form.get('password')['errors']['minlength'] && form.get('password')['errors']['minlength']['requiredLength']\">\r\n           Password should be more than\r\n            {{ form.get('password')['errors']['minlength']['requiredLength'] }}\r\n            characters. Your current password lengt {{ form.get('password')['errors']['minlength']['actualLength'] }}.\r\n          </span>\r\n        </span>\r\n      </div>\r\n      <div\r\n        class=\"form-group\"\r\n        [ngClass]=\"{'has-error': form.get('name').invalid && form.get('name').touched}\"\r\n      >\r\n        <label for=\"name\">Name</label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control underlined\"\r\n          id=\"name\"\r\n          placeholder=\"Enter the name\"\r\n          formControlName=\"name\"\r\n        >\r\n        <span\r\n          class=\"form-help-text\"\r\n          *ngIf=\"form.get('name').invalid && form.get('name').touched\"\r\n        >\r\n          The name cant be empty\r\n        </span>\r\n      </div>\r\n    \r\n    <div\r\n    class=\"form-group\"\r\n    [ngClass]=\"{'has-error': form.get('location').invalid && form.get('location').touched}\"\r\n    >\r\n    <label for=\"name\">Location</label>\r\n    <input\r\n      type=\"text\"\r\n      class=\"form-control underlined\"\r\n      id=\"location\"\r\n      placeholder=\"Enter your current Location\"\r\n      formControlName=\"location\"\r\n    >\r\n    <span\r\n      class=\"form-help-text\"\r\n      *ngIf=\"form.get('location').invalid && form.get('location').touched\"\r\n    >\r\n      The Location cant be empty\r\n    </span>\r\n    </div>\r\n    \r\n      \r\n      <div\r\n        class=\"form-group\"\r\n        [ngClass]=\"{'has-error': form.get('agree').invalid && form.get('agree').touched}\"\r\n      >\r\n        <label for=\"agree\">\r\n          <input\r\n            class=\"checkbox\"\r\n            id=\"agree\"\r\n            type=\"checkbox\"\r\n            formControlName=\"agree\"\r\n          >\r\n          <span>I agree with rules</span>\r\n        </label>\r\n      </div>\r\n    \r\n     \r\n      <div class=\"form-group\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-block btn-primary\"\r\n          [disabled]=\"form.invalid\"\r\n        >\r\n          Register\r\n        </button>\r\n      \r\n        <div *ngIf=\"exist\" class=\"alert alert-danger\"  >\r\n            <strong>The current Email is exist!</strong> \r\n        </div>\r\n      </div>\r\n      \r\n    </form>\r\n    </div>"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_userSendModel__ = __webpack_require__("./src/app/models/userSendModel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].email]),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6)]),
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            'location': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            'agree': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](false, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].requiredTrue])
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.form.value, email = _a.email, password = _a.password, name = _a.name, location = _a.location;
        var user = new __WEBPACK_IMPORTED_MODULE_4__models_userSendModel__["a" /* UserSendModel */](email, password, name, location);
        this.usersService.addUser(user).subscribe(function (result) {
            console.log(result);
            if (!result.exist) {
                _this.router.navigateByUrl('/login');
                return;
            }
            _this.exist = true;
            _this.router.navigateByUrl('/registration');
        }, function (error) {
            console.log(error);
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'registration',
            template: __webpack_require__("./src/app/auth/registration/registration.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<main>\r\n   \r\n   \r\n    <div class=\"navbar navbar-inverse navbar-fixed-top\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand\"  routerLinkActive=\"active\" routerLink=\"allPost\">Personal blog</a>\r\n        </div>\r\n  \r\n       \r\n        <div class=\"navbar-collapse collapse\">\r\n          <ul  *ngIf=\"status\" class=\"nav navbar-nav\">\r\n            <li>\r\n              <a   routerLinkActive=\"active\" routerLink=\"newPost\">New Post</a>\r\n            </li>\r\n          </ul>\r\n  \r\n         \r\n          <ul *ngIf=\"!status\" class=\"nav navbar-nav pull-right\">\r\n            <li>\r\n              <a routerLinkActive=\"active\" routerLink=\"registration\">Registration</a>\r\n            </li>\r\n            <li>\r\n              <a  routerLinkActive=\"active\" routerLink=\"login\">LogIn</a>\r\n            </li>\r\n          </ul>\r\n\r\n          \r\n          <ul *ngIf=\"status\" class=\"nav navbar-nav pull-right\">\r\n             \r\n            <li>\r\n              <a class=\"nav-link\" (click)=\"logout()\" href=\"#\">LogOut</a>\r\n            </li>\r\n          </ul>\r\n\r\n        </div>\r\n  \r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"container body-content\">\r\n      <router-outlet></router-outlet>\r\n      <hr />\r\n      <footer>\r\n        <p>&copy; 2017  </p>\r\n      </footer>\r\n    </div>\r\n  </main>\r\n  "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.authNavStatus$.subscribe(function (status) { return _this.status = status; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/models/commentSendModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentSendModel; });
var CommentSendModel = /** @class */ (function () {
    function CommentSendModel(author, commentText, postId) {
        this.author = author;
        this.commentText = commentText;
        this.postId = postId;
    }
    return CommentSendModel;
}());



/***/ }),

/***/ "./src/app/models/credentialsSendModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredentialsSendModel; });
var CredentialsSendModel = /** @class */ (function () {
    function CredentialsSendModel(username, password) {
        this.username = username;
        this.password = password;
    }
    return CredentialsSendModel;
}());



/***/ }),

/***/ "./src/app/models/postModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostModel; });
var PostModel = /** @class */ (function () {
    function PostModel() {
    }
    return PostModel;
}());



/***/ }),

/***/ "./src/app/models/postSendModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostSendModel; });
var PostSendModel = /** @class */ (function () {
    function PostSendModel(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }
    return PostSendModel;
}());



/***/ }),

/***/ "./src/app/models/userSendModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSendModel; });
var UserSendModel = /** @class */ (function () {
    function UserSendModel(email, password, name, location, exist) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.location = location;
        this.exist = exist;
    }
    return UserSendModel;
}());



/***/ }),

/***/ "./src/app/post/allPosts/allPost.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n   <div style=\"margin-top:100px;\">\r\n    <h1>PERSONAL BLOG</h1> \r\n \r\n\r\n\r\n<div id=\"postlist\" *ngFor=\"let item of postModel\">\r\n        \r\n        <div class=\"panel\">\r\n    \r\n            <div class=\"panel-heading\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-9\">\r\n                            <h3 class=\"pull-left\">\r\n                                    <h3><a [routerLink]=\"['post', item.postId]\" class=\"nav-link\">{{item.title}}</a></h3>\r\n                            </h3>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n\r\n                            <h4 class=\"pull-right\">\r\n                                <small>Author: {{item.author}}</small>\r\n                                <span class=\"glyphicon glyphicon-remove-circle\" (click)=\"dell(item.postId)\"></span>\r\n                            </h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                 {{item.description}}  \r\n            </div>\r\n            <div class=\"panel-footer\">\r\n     \r\n                <h4>\r\n                         \r\n                         <small class=\"pull-right\">{{item.dateTime}}</small>\r\n                </h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/post/allPosts/allPost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllPostComponent = /** @class */ (function () {
    function AllPostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
    }
    AllPostComponent.prototype.ngOnInit = function () {
        this.load();
    };
    AllPostComponent.prototype.load = function () {
        var _this = this;
        this.postService.getAll().subscribe(function (data) { return _this.postModel = data; });
    };
    AllPostComponent.prototype.dell = function (id) {
        var _this = this;
        this.postService.delete(id).subscribe(function (data) { return _this.load(); });
    };
    AllPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'allPost',
            template: __webpack_require__("./src/app/post/allPosts/allPost.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AllPostComponent);
    return AllPostComponent;
}());



/***/ }),

/***/ "./src/app/post/newPost/newPost.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n <div id=\"newPost\" style=\"margin-top:100px;\">\r\n    <h1>New Post</h1>\r\n \r\n \r\n     <form name=\"Form\" id=\"contact-form\" (ngSubmit)=\"create(form)\" #form=\"ngForm\" class=\"contact-form\">\r\n         <div class=\"row\">\r\n             <div class=\"col-md-4\">\r\n                 <div class=\"form-group\" [ngClass]=\"{'has-error': title.invalid && title.touched}\">\r\n                     <input type=\"text\"   class=\"form-control\" [(ngModel)]=\"Title\" name=\"title\" placeholder=\"Title\" required  #title=\"ngModel\" >\r\n                    <p *ngIf=\"title.invalid && title.touched\">Enter the Title</p>\r\n                    \r\n                 </div>\r\n             </div>\r\n             <div class=\"col-md-4\">\r\n                 <div class=\"form-group\" [ngClass]=\"{'has-error': author.invalid && author.touched}\">\r\n                     <input type=\"text\"   class=\"form-control\" [(ngModel)]=\"Author\" name=\"author\" placeholder=\"author\" required #author=\"ngModel\">\r\n                     <p *ngIf=\"author.invalid && author.touched\">Enter the Author</p>\r\n                 </div>\r\n             </div>\r\n           \r\n         </div>\r\n         <div class=\"row\">\r\n             <div class=\"col-md-12\">\r\n                 <div class=\"form-group\" [ngClass]=\"{'has-error': description.invalid && description.touched}\">\r\n                     <textarea class=\"form-control textarea\" rows=\"3\" [(ngModel)]=\"Description\" name=\"description\" placeholder=\"Description\" required #description=\"ngModel\"></textarea>\r\n                     <p *ngIf=\"description.invalid && description.touched\">Enter the Description</p>\r\n                 </div>\r\n             </div>\r\n         </div>\r\n         <div class=\"row\">\r\n             <div class=\"col-md-12\">\r\n \r\n             </div>\r\n         </div>\r\n         <button   type=\"submit\" id=\"addPost\" class=\"btn main-btn pull-right\" [disabled]=\"!form.valid\"  >Send a message</button>\r\n         <a routerLink=\"/\" class=\"btn btn-warning\">Back to Blog</a>\r\n     </form>\r\n \r\n \r\n </div>"

/***/ }),

/***/ "./src/app/post/newPost/newPost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_postSendModel__ = __webpack_require__("./src/app/models/postSendModel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPostComponent = /** @class */ (function () {
    function NewPostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
    }
    NewPostComponent.prototype.load = function () {
        var _this = this;
        this.postService.getAll().subscribe(function (data) { return _this.postModel = data; });
    };
    NewPostComponent.prototype.create = function (form) {
        var _this = this;
        var post = new __WEBPACK_IMPORTED_MODULE_3__models_postSendModel__["a" /* PostSendModel */](this.Title, this.Description, this.Author);
        this.postService.post(post).subscribe(function (data) { return _this.router.navigateByUrl("/"); });
    };
    NewPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'newPost',
            template: __webpack_require__("./src/app/post/newPost/newPost.component.html"),
            styles: ['.countries { width: 300px; }']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewPostComponent);
    return NewPostComponent;
}());



/***/ }),

/***/ "./src/app/post/post-detail/post.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div id=\"postlist\" style=\"margin-top:100px;\">\r\n    <div class=\"panel\">\r\n        <div class=\"panel-heading\">\r\n            <div class=\"text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-9\">\r\n                        <h3 class=\"pull-left\">{{postModel.title}}</h3>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n\r\n                        <h4 class=\"pull-right\">\r\n                                 \r\n                            <small>Author {{postModel.author}}</small>\r\n                            <span class=\"glyphicon glyphicon-remove-circle\"></span>\r\n                        </h4>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"panel-body\">\r\n            {{postModel.description}}\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n            <h4>\r\n                 <span> {{commentlength}} </span>\r\n                <span class=\" glyphicon glyphicon-comment\"></span>\r\n                <small class=\"pull-right\">{{postModel.dateTime}}</small>\r\n            </h4>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n <div *ngIf=\"commentlength>0\">\r\n<h1><em>Comments:</em></h1>\r\n</div>\r\n\r\n\r\n<div id=\"postlist\" *ngFor=\"let item of postModel.comment\">\r\n\r\n   <div class=\"panel\">\r\n\r\n       <div class=\"panel-heading\">\r\n           <div class=\"text-center\">\r\n               <div class=\"row\">\r\n                   <div class=\"col-sm-9\">\r\n                       <h3 class=\"pull-left\">\r\n                               <small>{{item.author}}</small>\r\n                               \r\n                       </h3>\r\n                   </div>\r\n                   <div class=\"col-sm-3\">\r\n                       \r\n                       <h4 class=\"pull-right\">\r\n                           <small> {{item.dateTime}}</small>\r\n                           <span class=\"glyphicon glyphicon-remove-circle\" (click)=\"delete(item.commentId)\"></span>\r\n                       </h4>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n       </div>\r\n       <div class=\"panel-body\">\r\n           {{item.commentText}}\r\n       </div>\r\n       <div class=\"panel-footer\">\r\n\r\n       </div>\r\n   </div>\r\n</div> \r\n\r\n\r\n \r\n<div>\r\n <h3>Add Comment:</h3>\r\n    <form name=\"Form\" role=\"form\" id=\"contact-form\" (ngSubmit)=\"addComment()\" class=\"contact-form\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" [(ngModel)]=\"author\" class=\"form-control\" name=\"Name\" placeholder=\"Name\" required>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control textarea\" [(ngModel)]=\"commentText\" rows=\"3\" name=\"Commentary\" placeholder=\"Comment\" required></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <button class=\"btn main-btn pull-right\">Send</button>\r\n                <a routerLink=\"/\" class=\"btn btn-warning\">Back to Blog</a>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/post/post-detail/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_postModel__ = __webpack_require__("./src/app/models/postModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_commentSendModel__ = __webpack_require__("./src/app/models/commentSendModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostComponent = /** @class */ (function () {
    function PostComponent(activateRoute, postService, commentService, router) {
        this.activateRoute = activateRoute;
        this.postService = postService;
        this.commentService = commentService;
        this.router = router;
        this.postModel = new __WEBPACK_IMPORTED_MODULE_3__models_postModel__["a" /* PostModel */]();
        this.comments = new Array();
        this.postId = Number.parseInt(activateRoute.snapshot.params['postId']);
    }
    PostComponent.prototype.ngOnInit = function () {
        this.load();
        console.log(this.postModel.comment);
    };
    PostComponent.prototype.load = function () {
        var _this = this;
        this.postService.get(this.postId).subscribe(function (data) {
            _this.postModel = data;
            _this.comments = _this.postModel.comment;
            _this.commentlength = _this.postModel.comment.length;
        });
    };
    PostComponent.prototype.addComment = function () {
        var _this = this;
        var coment = new __WEBPACK_IMPORTED_MODULE_4__models_commentSendModel__["a" /* CommentSendModel */](this.author, this.commentText, this.postModel.postId);
        this.commentService.addComment(coment).subscribe(function (data) { return _this.load(); });
        this.author = null;
        this.commentText = null;
    };
    PostComponent.prototype.delete = function (id) {
        var _this = this;
        this.commentService.delete(id).subscribe(function (data) { return _this.load(); });
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'post',
            template: __webpack_require__("./src/app/post/post-detail/post.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__services_comment_service__["a" /* CommentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__services_comment_service__["a" /* CommentService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hostHelper_service__ = __webpack_require__("./src/app/services/hostHelper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(constHelper, http) {
        this.constHelper = constHelper;
        this.http = http;
        this._authNavStatusSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](false);
        this.authNavStatus$ = this._authNavStatusSource.asObservable();
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
        this._authNavStatusSource.next(this.loggedIn);
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        var body = { UserName: user.username, Password: user.password };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.constHelper.getHost() + 'api/Auth/login', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__hostHelper_service__["a" /* ConstHelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hostHelper_service__ = __webpack_require__("./src/app/services/hostHelper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = /** @class */ (function () {
    function CommentService(constHelper, http) {
        this.constHelper = constHelper;
        this.http = http;
    }
    CommentService.prototype.addComment = function (comment) {
        return this.http.post(this.constHelper.getHost() + 'api/Comment', comment);
    };
    CommentService.prototype.delete = function (id) {
        return this.http.delete(this.constHelper.getHost() + 'api/Comment/' + id);
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hostHelper_service__["a" /* ConstHelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/services/hostHelper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstHelperService = /** @class */ (function () {
    function ConstHelperService() {
        this.path = "http://" + location.host + "/";
    }
    ConstHelperService.prototype.getHost = function () {
        return this.path;
    };
    ConstHelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConstHelperService);
    return ConstHelperService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hostHelper_service__ = __webpack_require__("./src/app/services/hostHelper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(constHelper, http) {
        this.constHelper = constHelper;
        this.http = http;
    }
    PostService.prototype.getAll = function () {
        return this.http.get(this.constHelper.getHost() + 'api/Post', { responseType: "json" });
    };
    PostService.prototype.get = function (id) {
        return this.http.get(this.constHelper.getHost() + 'api/Post/' + id, { responseType: "json" });
    };
    PostService.prototype.delete = function (id) {
        return this.http.delete(this.constHelper.getHost() + 'api/Post/' + id);
    };
    PostService.prototype.post = function (post) {
        var body = { Title: post.title, Author: post.author, Description: post.description };
        return this.http.post(this.constHelper.getHost() + 'api/Post', body);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hostHelper_service__["a" /* ConstHelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hostHelper_service__ = __webpack_require__("./src/app/services/hostHelper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(constHelper, http) {
        this.constHelper = constHelper;
        this.http = http;
    }
    UserService.prototype.addUser = function (user) {
        var body = { Email: user.email, Name: user.name, Location: user.location, Password: user.password };
        return this.http.post(this.constHelper.getHost() + 'api/Accounts', body);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hostHelper_service__["a" /* ConstHelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map