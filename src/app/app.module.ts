import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
//import { BrowserModule } from "../../node_modules/@angular/platform-browser";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [ 
        AppRoutingModule,
        NativeScriptModule,
        RouterModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
