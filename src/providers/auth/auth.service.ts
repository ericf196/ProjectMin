import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Credentials} from "../../types/Credentials";
import {AuthHttp, tokenNotExpired} from "angular2-jwt";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {EnvironmentService} from "../environment.service";
import {Storage} from "@ionic/storage";

@Injectable()
export class AuthService {
    private loginUrl = '';
    private logoutUrl = '';

    constructor(private http: Http, private authHttp: AuthHttp, private userService: UserService, private environment: EnvironmentService, private storage: Storage) {
        this.loginUrl = environment.baseUrl + 'auth/login'
        this.logoutUrl = environment.baseUrl + 'auth/logout'

    }

    loggedIn(): Promise<boolean> {
        return this.storage.get('token').then(token => {
            return tokenNotExpired(null, token); // Returns true/false
        });
    }

    login(credentials: Credentials): Observable<Object> {
        return this.http.post(this.loginUrl, credentials)
            .map(this.extractLoginData)
            .catch(this.handleError);
    }

    logout(): Observable<Object> {
        return this.authHttp.post(this.logoutUrl, {})
            .map(this.extractLogoutData)
            .catch(this.handleError);
    }

    private extractLoginData(res: Response) {
        let body = res.json();
        return body.token || {};
    }

    private extractLogoutData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}
