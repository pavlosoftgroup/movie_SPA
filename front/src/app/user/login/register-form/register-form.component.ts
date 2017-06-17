import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../user";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();

  roles: string[] = ["Guest", "Moderator", "Administartor"];

  // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
  formErrors = {
    "name": "",
    "password": "",
    "email": "",
    "password2": ""
  };

  // Объект с сообщениями ошибок
  validationMessages = {
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

  constructor(private fb: FormBuilder,
              private userService: UserService,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      "name": [this.user.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]],
      "email": [this.user.email, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
      ]],
      "password": [this.user.password, [
        Validators.required
      ]],
      "password2": [this.user.password, [
        Validators.required,
        // Validators.pattern("\\d+"),
        // Validators.pattern(this.userForm.value.password == this.userForm.value.password2? true: false)
      ]]
    });

    this.userForm.valueChanges
        .subscribe(data => this.onValueChange(data));

    this.onValueChange();
  }

  onValueChange(data?: any) {
    if (!this.userForm) return;
    let form = this.userForm;

    for (let field in this.formErrors) {
      this.formErrors[field] = "";
      // form.get - получение элемента управления
      let control = form.get(field);

      if (control && control.dirty && !control.valid) {
        let message = this.validationMessages[field];
        for (let key in control.errors) {
          this.formErrors[field] += message[key] + " ";
        }
      }
    }
  }

  onSubmit() {

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

    this.userService.regUser(this.user).subscribe(res => this.user);

    console.log("submitted");
    console.log(this.user);
  }

}
