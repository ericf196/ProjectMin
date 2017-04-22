import {NgModule} from '@angular/core';
import {AuthService} from "../../providers/auth/auth.service";
import {UserService} from "../../providers/auth/user.service";
import {IonicModule} from 'ionic-angular';
import {AdminIndexPage} from "./pages/index/admin-index";
import {AdminDashboardPage} from "./pages/dashboard/admin-dashboard";
import {AdminCompaniesPage} from "./pages/companies/admin-companies";
import {UserCanModule} from "../../directives/user-can/user-can.module";
import {AdminMenuPage} from "./pages/menu/admin-menu";

//mio
import {AdminIndexMenuSidePage} from "./pages/index2/admin-index-menu-side";

@NgModule({
    imports: [IonicModule, UserCanModule],
    providers: [AuthService, UserService],
    declarations: [AdminIndexPage,AdminIndexMenuSidePage, AdminDashboardPage, AdminCompaniesPage, AdminMenuPage],
    entryComponents: [AdminIndexPage,AdminIndexMenuSidePage, AdminDashboardPage, AdminCompaniesPage, AdminMenuPage],
})
export class AdminModule {
}
