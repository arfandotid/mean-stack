import { AuthRoutingModule } from './auth-routing-module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './../angular-material.module';
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login/login.component";
import { SignupComponent } from "./signup/signup/signup.component";

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
