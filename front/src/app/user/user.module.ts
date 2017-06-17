import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {LoginFormComponent} from "./login/login-form/login-form.component";
import {LoginComponent} from "./login/login.component";
import {RegisterFormComponent} from "./login/register-form/register-form.component";
import {RestorePasswordComponent} from './restore-password/restore-password.component';
import {UserComponent} from "./user.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MdInputModule} from "@angular/material/material";
import {UserService} from "./user.service";
// import {MdCardContent, MdCardHeader, MdCoreModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,



    ],
    declarations: [

    ],
    providers: [
        UserService,
    ],
    exports:[
        // UserComponent,

    ]
})
export class UserModule {
}
