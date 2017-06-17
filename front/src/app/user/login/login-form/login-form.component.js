"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_service_1 = require("../../user.service");
var LoginFormComponent = (function () {
    function LoginFormComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            login: ["user1", forms_1.Validators.required],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]]
        });
    };
    LoginFormComponent.prototype.onSubmit = function (form) {
        this.userService.loginUser(form.value).subscribe(function (res) { return form.valid = res; });
        console.log(form.valid);
        console.log(form.value);
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    core_1.Component({
        selector: 'app-login-form',
        templateUrl: './login-form.component.html',
        styleUrls: ['./login-form.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        user_service_1.UserService])
], LoginFormComponent);
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map