import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
 Generated class for the EnviromentService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class EnvironmentService {

    public baseUrl = 'http://etrackapi.dncomputing.com/api/';

    constructor() {

    }

}
