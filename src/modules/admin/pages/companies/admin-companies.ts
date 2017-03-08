import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'admin-companies-page',
    templateUrl: 'admin-companies.html'
})
export class AdminCompaniesPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModulesAdminPagesIndexPage');
    }

}
