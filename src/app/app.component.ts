import { Component } from '@angular/core';
import { zippyComponent } from './components/zippy/zippy.component';
import { subscribeFormComponent } from './components/subscribeform/subscribeform.component';
import { NgForm } from '@angular/forms';
import { signupFormComponent } from './components/signup-form/signup-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
