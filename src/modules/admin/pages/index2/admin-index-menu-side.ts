import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//import { TabsPage } from '../pages/tabs/tabs';

import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';

import {AdminDashboardPage} from "../dashboard/admin-dashboard";

@Component({
  selector: 'page-admin-index-menu-side',
  templateUrl: 'admin-index-menu-side.html'
})
export class AdminIndexMenuSidePage {
  @ViewChild(Nav) nav: Nav;

  rootPage = AdminDashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Homepage', component: AdminDashboardPage },
      { title: 'Settings', component: AdminDashboardPage },
      { title: 'Account', component: AdminDashboardPage }
  	];

 
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}