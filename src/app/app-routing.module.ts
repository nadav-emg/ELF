import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path: "", redirectTo: "/cars", pathMatch: "full" },
    { path: "cars", loadChildren: "~/app/cars/cars.module#CarsModule" },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }