import {Component} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {FormControl} from "@angular/forms";
import {ValidationService} from "../../providers/validation/validation.service";

@Component({
    selector: 'control-message',
    templateUrl: 'control-message.html',
})
export class ControlMessageComponent {

    @Input() control: FormControl;

    constructor() {
    }

    get errorMessage() {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }

        return null;
    }

}
