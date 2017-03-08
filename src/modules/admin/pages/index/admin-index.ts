import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AdminDashboardPage} from "../dashboard/admin-dashboard";
import {AdminCompaniesPage} from "../companies/admin-companies";
import {AdminMenuPage} from "../menu/admin-menu";

@Component({
    selector: 'admin-index-page',
    templateUrl: 'admin-index.html'
})
export class AdminIndexPage {
    rootPage: any = AdminDashboardPage;
    dashboardPage: any = AdminDashboardPage;
    companiesPage: any = AdminCompaniesPage;
    menuPage: any = AdminMenuPage;
    mySelectedIndex: number;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
}
