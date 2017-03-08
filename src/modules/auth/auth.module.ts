import {NgModule} from '@angular/core';
import {AuthService} from "../../providers/auth/auth.service";
import {UserService} from "../../providers/auth/user.service";
import {LoginPage} from "./pages/login/login";
import {IonicModule} from 'ionic-angular';
import {ControlMessageComponent} from "../../components/forms/control-message";


@NgModule({
    imports: [IonicModule],
    providers: [AuthService, UserService],
    declarations: [LoginPage,ControlMessageComponent],
    entryComponents: [
        LoginPage
    ],
})
export class AuthModule {
}
