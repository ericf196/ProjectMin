import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/publishReplay'
import {User} from '../../types/User';
import {AuthHttp} from "angular2-jwt";
import {EnvironmentService} from "../environment.service";
import {Storage} from "@ionic/storage";

@Injectable()
export class UserService {
    private url = '';
    user: User;
    private _user;

    constructor(private authHttp: AuthHttp, private environment: EnvironmentService, private  storage: Storage) {
        this.url = environment.baseUrl + 'auth/user?include=roles,permissions'
    }

    getUser(refresh?: boolean): Observable<User> {
        if (refresh) {
            this._user = null;
        }
        if (!this._user) {
            this._user = this.authHttp.get(this.url)
                .map((res)=> {
                    let user = res.json();
                    return user.data || {};
                })
                .publishReplay(1)
                .refCount()
                .catch(UserService.handleError);
        }
        return this._user;
    }

    private static handleError(error: any) {
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
