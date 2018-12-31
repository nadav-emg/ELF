import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";

import { EventDetailEditComponent } from "~/app/event/event-detail-edit/event-detail-edit.component";
import { MyImageAddRemoveComponent } from "~/app/event/event-detail-edit/my-image-add-remove/my-image-add-remove.component";
import { MyListSelectorModalViewComponent } from "~/app/event/event-detail-edit/my-list-selector/my-list-selector-modal-view.component"; // tslint:disable-line:max-line-length
import { MyListSelectorComponent } from "~/app/event/event-detail-edit/my-list-selector/my-list-selector.component";
import { EventDetailComponent } from "~/app/event/event-detail/event-detail.component";
import { EventListComponent } from "~/app/event/event-list.component";
import { EventsRoutingModule } from "~/app/event/event-routing.module";

@NgModule({
    imports: [
        EventsRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        EventListComponent,
        EventDetailComponent,
        EventDetailEditComponent,
        MyListSelectorComponent,
        MyListSelectorModalViewComponent,
        MyImageAddRemoveComponent
    ],
    entryComponents: [
        MyListSelectorModalViewComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EventsModule { }
