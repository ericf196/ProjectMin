import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {User} from "../../../../types/User";
import {UserService} from "../../../../providers/auth/user.service";
import {AuthService} from "../../../../providers/auth/auth.service";
import {ValidationService} from "../../../../providers/validation/validation.service";
import {Credentials} from "../../../../types/Credentials";
import {Storage} from '@ionic/storage';
import {AdminIndexPage} from "../../../admin/pages/index/admin-index";
import {ClientIndexPage} from "../../../client/pages/index/client-index";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    credentials: Credentials = {
        email: null,
        password: null
    };
    private user: User;
    private loginForm: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
                private userService: UserService, private authService: AuthService,
                private storage: Storage, private loadingCtrl: LoadingController) {

        this.loginForm = this.formBuilder.group({
            'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'password': ['', [Validators.required]],
        });
    }

    onSubmit() {
        if (this.loginForm.dirty && this.loginForm.valid) {
            this.credentials = this.loginForm.value;
            let loading = this.loadingCtrl.create({
                content: 'Iniciando Sesión...'
            });

            loading.present();

            this.authService.login(this.credentials).subscribe(
                (token) => {
                    this.storage.set('token', token).then(()=> {
                        this.userService.getUser(true).subscribe(
                            (user) => {
                                this.user = user;
                                this.storage.set('permissions', JSON.stringify(user.permissions)).then(()=> {
                                    loading.dismiss();
                                    if (this.user['isSuperUser']) {
                                        this.navCtrl.setRoot(AdminIndexPage);
                                    } else {
                                        this.navCtrl.setRoot(ClientIndexPage);
                                    }
                                });
                            },
                            error => console.log(error));
                    });
                },
                (error) => {
                    //  this.toastr.error(error)
                })
        }
    }

}
