import { Component, OnInit } from "@angular/core";
import { initFirebase } from "~/app/shared/firebase.common";
import { Routes, Router } from "@angular/router";
//import { RouterExtensions } from "../../node_modules/nativescript-angular/router";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    /**
     *
     */
   constructor( private router: Router) {
    this.router.navigate(["/login"]);
        
    }
    ngOnInit() {
        initFirebase();
    }
}
