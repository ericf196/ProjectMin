import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'client-dashboard-page',
    templateUrl: 'client-dashboard.html'
})
export class ClientDashboardPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModulesAdminPagesIndexPage');
    }

}
