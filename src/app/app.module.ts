import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {zippyComponent } from './components/zippy/zippy.component';
import { subscribeFormComponent } from './components/subscribeform/subscribeform.component';
import { CommonModule } from '@angular/common';
import { signupFormComponent } from './components/signup-form/signup-form.component'; 
import { changepassword } from './components/changepassword/changepassword.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    zippyComponent,
    subscribeFormComponent ,
    signupFormComponent,
    changepassword
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
