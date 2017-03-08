import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'admin-dashboard-page',
    templateUrl: 'admin-dashboard.html'
})
export class AdminDashboardPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModulesAdminPagesIndexPage');
    }

}
