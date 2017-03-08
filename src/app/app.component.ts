import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {LoginPage} from '../modules/auth/pages/login/login';
import {UserService} from "../providers/auth/user.service";
import {AdminIndexPage} from "../modules/admin/pages/index/admin-index";
import {ClientIndexPage} from "../modules/client/pages/index/client-index";
import {AuthService} from "../providers/auth/auth.service";
import {Storage} from "@ionic/storage";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform, private userService: UserService, private authService: AuthService, private storage: Storage) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            this.authService.loggedIn().then((loggedIn)=> {
                if (loggedIn) {
                    return this.userService.getUser(true).toPromise().then((user)=> {
                        this.storage.set('permissions', JSON.stringify(user.permissions)).then(()=> {
                            if (user['isSuperUser']) {
                                this.rootPage = AdminIndexPage;
                            } else {
                                this.rootPage = ClientIndexPage;
                            }
                        });
                    })
                } else {
                    this.rootPage = LoginPage;
                }
                Splashscreen.hide();
            })
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
