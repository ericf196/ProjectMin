import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EtrackUserCanDirective} from "./etrack-user-can.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [EtrackUserCanDirective],
    exports: [EtrackUserCanDirective]

})
export class UserCanModule {
}
