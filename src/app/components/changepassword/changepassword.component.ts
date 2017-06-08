import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { changePasswordValidators } from './changepasswordValidators';

@Component({
    selector: 'changepassword',
    templateUrl: './changepassword.component.html',
    styleUrls: ['./changepassword.component.css']
})
export class changepassword {
    password;
    form= new FormGroup({
        username: new FormControl('',Validators.required),
        password: new FormControl('',[Validators.required, Validators.minLength(5)]),
        confirm: new FormControl('',[Validators.required, changePasswordValidators.passwordsMustMatch(this.password)])
    })

    passwordChanged($event) {
        console.log ("password changed. " + $event.target.value)
        this.password = $event.target.value;
    }
}