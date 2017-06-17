import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from "./login/login-form/login-form.component";
import {RegisterFormComponent} from "./login/register-form/register-form.component";
import {RestorePasswordComponent} from "./restore-password/restore-password.component";

const routes: Routes = [
    {path: 'login',component: LoginFormComponent},
    {path: 'user',component: LoginFormComponent},
    {path: 'registration',component: RegisterFormComponent},
    {path: 'restore',component: RestorePasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
