import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "~/app/app-routing.module";
import { AppComponent } from "~/app/app.component";
import { LoginComponent } from "~/app/login/login.component";
import { UserService } from "~/app/services/user.service";
import { HttpClientModule } from '@angular/common/http';

//import { BrowserModule } from "../../node_modules/@angular/platform-browser";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [ 
        AppRoutingModule,
        NativeScriptModule,
        RouterModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
