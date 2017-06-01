import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {zippyComponent } from './components/zippy/zippy.component';
import { subscribeFormComponent } from './components/subscribeform/subscribeform.component';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    zippyComponent,
    subscribeFormComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
