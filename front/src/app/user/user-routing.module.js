"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_form_component_1 = require("./login/login-form/login-form.component");
var register_form_component_1 = require("./login/register-form/register-form.component");
var restore_password_component_1 = require("./restore-password/restore-password.component");
var routes = [
    { path: 'login', component: login_form_component_1.LoginFormComponent },
    { path: 'user', component: login_form_component_1.LoginFormComponent },
    { path: 'registration', component: register_form_component_1.RegisterFormComponent },
    { path: 'restore', component: restore_password_component_1.RestorePasswordComponent },
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], UserRoutingModule);
exports.UserRoutingModule = UserRoutingModule;
//# sourceMappingURL=user-routing.module.js.map