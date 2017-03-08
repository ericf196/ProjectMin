import {Component} from '@angular/core';
import {NavController, NavParams, App} from 'ionic-angular';
import {ClientDashboardPage} from "../dashboard/client-dashboard";
import {ClientMenuPage} from "../menu/client-menu";
import {UserService} from "../../../../providers/auth/user.service";
import {ClientGuardService} from "../client-guard.service";

@Component({
    selector: 'client-index-page',
    templateUrl: 'client-index.html'
})
export class ClientIndexPage {
    rootPage: any = ClientDashboardPage;
    dashboardPage: any = ClientDashboardPage;
    menuPage: any = ClientMenuPage;
    mySelectedIndex: number;

    constructor(public navCtrl: NavController, public navParams: NavParams, private clientGuard:ClientGuardService) {
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }

    ionViewCanEnter(): Promise<boolean> | boolean {
        return this.clientGuard.ionViewCanEnter();
    }
}
