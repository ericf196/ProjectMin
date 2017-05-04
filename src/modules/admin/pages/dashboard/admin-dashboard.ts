import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';

@Component({
    selector: 'admin-dashboard-page',
    templateUrl: 'admin-dashboard.html'
})
export class AdminDashboardPage {

	showSkip = true;

	@ViewChild('slides') slides: Slides;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModulesAdminPagesIndexPage');
    }

}
