import {UserService} from "../../../providers/auth/user.service";
import {App} from "ionic-angular";
import {LoginPage} from "../../auth/pages/login/login";
import {Injectable} from "@angular/core";
import {AuthService} from "../../../providers/auth/auth.service";

@Injectable()
export class ClientGuardService {

    constructor(private userService: UserService, private authService: AuthService, private appCtrl: App) {

    }

    ionViewCanEnter(): Promise<boolean> | boolean {
        return this.authService.loggedIn().then((loggedIn)=> {
            if (loggedIn) {
                return this.userService.getUser().toPromise().then((user)=> {
                    if (user['isSuperUser']) {
                        this.appCtrl.getRootNav().setRoot(LoginPage)
                    }

                    return !user['isSuperUser'];
                });
            } else {
                return false;
            }
        })
    }
}