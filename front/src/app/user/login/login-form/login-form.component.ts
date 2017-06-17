import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MdCardContent, MdCardHeader, MdInputContainer } from "@angular/material";
import {UserService} from "../../user.service";
@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    constructor(private fb: FormBuilder,
    private userService: UserService,) {
    }
    loginForm: FormGroup;

    ngOnInit() {
        this.loginForm = this.fb.group({
            login: ["user1", Validators.required],
            password: ['',[Validators.required, Validators.minLength(3)]]
        });
    }

    onSubmit(form: any) {

        this.userService.loginUser(form.value).subscribe(res => form.valid = res );

        console.log(form.valid);
        console.log(form.value);

    }

}
