import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EventDetailEditComponent } from "~/app/event/event-detail-edit/event-detail-edit.component";
import { EventDetailComponent } from "~/app/event/event-detail/event-detail.component";
import { EventListComponent } from "~/app/event/event-list.component";

const routes: Routes = [
    { path: "", component: EventListComponent },
    { path: "event-detail/:id", component: EventDetailComponent },
    { path: "event-detail-edit/:id", component: EventDetailEditComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EventsRoutingModule { }
