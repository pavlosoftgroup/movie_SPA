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
var user_1 = require("../../user");
var user_service_1 = require("../../user.service");
var RegisterFormComponent = (function () {
    function RegisterFormComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.user = new user_1.User();
        this.roles = ["Guest", "Moderator", "Administartor"];
        // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
        this.formErrors = {
            "name": "",
            "password": "",
            "email": "",
            "password2": ""
        };
        // Объект с сообщениями ошибок
        this.validationMessages = {
            "name": {
                "required": "Обязательное поле.",
                "minlength": "Значение должно быть не менее 4х символов.",
                "maxlength": "Значение не должно быть больше 15 символов."
            },
            "email": {
                "required": "Обязательное поле.",
                "pattern": "Не правильный формат email адреса."
            },
            "password": {
                "required": "Обязательное поле."
            },
            "password2": {
                "required": "Обязательное поле.",
                "pattern": "Значение должно быть целым числом."
            }
        };
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RegisterFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            "name": [this.user.name, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(15)
                ]],
            "email": [this.user.email, [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
                ]],
            "password": [this.user.password, [
                    forms_1.Validators.required
                ]],
            "password2": [this.user.password, [
                    forms_1.Validators.required,
                ]]
        });
        this.userForm.valueChanges
            .subscribe(function (data) { return _this.onValueChange(data); });
        this.onValueChange();
    };
    RegisterFormComponent.prototype.onValueChange = function (data) {
        if (!this.userForm)
            return;
        var form = this.userForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = "";
            // form.get - получение элемента управления
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    };
    RegisterFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.user.email = this.userForm.value.email;
        this.user.name = this.userForm.value.name;
        this.user.password = this.userForm.value.password;
        //  user = new User(
        //      this.userForm.value.email,
        //      this.userForm.value.name,
        //      this.userForm.value.password,
        //      // this.userForm.value.,
        //
        //
        // );
        this.userService.regUser(this.user).subscribe(function (res) { return _this.user; });
        console.log("submitted");
        console.log(this.user);
    };
    return RegisterFormComponent;
}());
RegisterFormComponent = __decorate([
    core_1.Component({
        selector: 'app-register-form',
        templateUrl: './register-form.component.html',
        styleUrls: ['./register-form.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        user_service_1.UserService])
], RegisterFormComponent);
exports.RegisterFormComponent = RegisterFormComponent;
//# sourceMappingURL=register-form.component.js.map