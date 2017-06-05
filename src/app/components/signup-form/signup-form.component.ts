import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component ({
    selector: 'signup',
    templateUrl: "./signup-form.component.html",
    styles: [`form { padding: 20px; }`]
})
export class signupFormComponent {
    form = new FormGroup({
        username: new FormControl('',Validators.required),
        password: new FormControl('', Validators.required)
    });
    singup() {
        console.log(this.form.value);
    }
}