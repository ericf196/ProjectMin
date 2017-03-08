import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Storage} from '@ionic/storage';
import {Http} from "@angular/http";
import {EnvironmentService} from "../providers/environment.service";
import {ValidationService} from "../providers/validation/validation.service";
import {AuthModule} from "../modules/auth/auth.module";
import {AdminModule} from "../modules/admin/admin.module";
import {ClientModule} from "../modules/client/client.module";

let storage = new Storage();

export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        headerPrefix: 'Bearer',
        noJwtError: true,
        tokenName: 'token',
        globalHeaders: [{'Accept': 'application/json', 'Content-Type': 'application/json'}],
        tokenGetter: (() => storage.get('token')),
    }), http);
}


@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        AuthModule,
        AdminModule,
        ClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
        {
            provide: AuthHttp,
            useFactory: getAuthHttp,
            deps: [Http]
        }, EnvironmentService, ValidationService, Storage]
})
export class AppModule {
}
