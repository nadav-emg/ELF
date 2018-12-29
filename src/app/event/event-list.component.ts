import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-ui-listview";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

import { Event } from "~/app/event/shared/event.model";
import { EventService } from "~/app/event/shared/event.service";

@Component({
    selector: "EventsList",
    moduleId: module.id,
    templateUrl: "./event-list.component.html",
    styleUrls: ["./event-list.component.scss"]
})
export class EventListComponent implements OnInit, OnDestroy {
    private _isLoading: boolean = false;
    //private _events: ObservableArray<Event> = new ObservableArray<Event>([]);
    private _dataSubscription: Subscription;
    private _events:Event[];
    constructor(
        private _eventService: EventService,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        //if (!this._dataSubscription) {
            //this._isLoading = true;

            //this._dataSubscription = this._eventService.load()
              //  .pipe(finalize(() => this._isLoading = false))
                //.subscribe((events: Array<Event>) => {
                  //  this._events = new ObservableArray(events);
                    //this._isLoading = false;
                //});
                this._events=this._eventService.load();
        }
    

    ngOnDestroy(): void {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }

    get events(): Event[] {
        return this._events;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    onEventItemTap(args: ListViewEventData): void {
        const tappedEventItem = args.view.bindingContext;

        this._routerExtensions.navigate(["/events/event-detail", tappedEventItem.id],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
}
