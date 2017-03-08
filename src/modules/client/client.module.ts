import {NgModule} from '@angular/core';
import {AuthService} from "../../providers/auth/auth.service";
import {UserService} from "../../providers/auth/user.service";
import {IonicModule} from 'ionic-angular';
import {ClientIndexPage} from "./pages/index/client-index";
import {ClientDashboardPage} from "./pages/dashboard/client-dashboard";
import {ClientMenuPage} from "./pages/menu/client-menu";
import {ClientGuardService} from "./pages/client-guard.service";

@NgModule({
    imports: [IonicModule],
    providers: [AuthService, UserService,ClientGuardService],
    declarations: [ClientIndexPage, ClientDashboardPage, ClientMenuPage],
    entryComponents: [ClientIndexPage, ClientDashboardPage, ClientMenuPage],
})
export class ClientModule {
}
