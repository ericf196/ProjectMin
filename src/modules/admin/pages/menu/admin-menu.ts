import {Component} from '@angular/core';
import {NavController, NavParams, App} from 'ionic-angular';
import {AuthService} from "../../../../providers/auth/auth.service";
import {LoginPage} from "../../../auth/pages/login/login";
import {Storage} from "@ionic/storage";

@Component({
    selector: 'admin-menu-page',
    templateUrl: 'admin-menu.html'
})
export class AdminMenuPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App,
                private authService: AuthService, private storage: Storage) {
               
    }

    logout() {
        this.authService.logout().subscribe((data)=> {
            this.storage.remove('token');
            this.storage.remove('permissions');
            this.appCtrl.getRootNav().setRoot(LoginPage);
        }, (error)=>console.log(error))
    }
}
