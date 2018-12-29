import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "~/app/login/login.component";

const routes: Routes = [
    { path: "", redirectTo: "/events", pathMatch: "full" },
    { path: "events", loadChildren: "~/app/event/event.module#EventsModule" },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
