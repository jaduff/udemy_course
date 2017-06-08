import { FormControl } from '@angular/forms';

export class changePasswordValidators {

    static passwordsMustMatch = (password: String) => {
        return (control: FormControl) => {
            console.log ("Old: " + password + ", new: " + control.value)
            if (password != control.value){
                return {
                    passwordsMustMatch: {valid: false}
                };
            }
            return null;
        }
    }


}