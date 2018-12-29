import { Injectable, NgZone } from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { eventMock} from "./eventsMock";
import { Event } from "~/app/event/shared/event.model";

const editableProperties = [
    "doors",
    "imageUrl",
    "luggage",
    "name",
    "price",
    "seats",
    "transmission",
    "class"
];

/* ***********************************************************
* This is the master detail data service. It handles all the data operations
* of retrieving and updating the data. In this case, it is connected to Firebase and
* is using the {N} Firebase plugin. Learn more about it here:
* https://github.com/EddyVerbruggen/nativescript-plugin-firebase
* The {N} Firebase plugin needs some initialization steps before the app starts.
* Check out how it is imported in the main.ts file and the actual script in /shared/firebase.common.ts file.
*************************************************************/
@Injectable({
    providedIn: "root"
})
export class EventService {
    private static cloneUpdateModel(event: Event): object {
        return editableProperties.reduce((a, e) => (a[e] = event[e], a), {}); // tslint:disable-line:ban-comma-operator
    }

    private _events: Array<Event> = [];

    constructor(private _ngZone: NgZone) { }

    getEventById(id: string): Event {
        if (!id) {
            return;
        }

        return this._events.filter((event) => {
            return event.id === id;
        })[0];
    }
    //get all events
    load():  Event[] {
  //      return new Observable((observer: any) => {
  //          const path = "events";

            //const onValueEvent = (snapshot: any) => {
              //  this._ngZone.run(() => {
                //    const results = this.handleSnapshot(snapshot.value);
                  //  observer.next(results);
               // });
           // };
            //firebase.addValueEventListener(onValueEvent, `/${path}`);
        //}).pipe(catchError(this.handleErrors));
        for (let evt of eventMock) {
            console.log(evt.id); // 1, "string", false
            this._events.push(evt);
        }
        return this._events;
        
    }

    update(eventModel: Event): Promise<any> {
        const updateModel = EventService.cloneUpdateModel(eventModel);

        return firebase.update("/events/" + eventModel.id, updateModel);
    }

    uploadImage(remoteFullPath: string, localFullPath: string): Promise<any> {
        return firebase.storage.uploadFile({
            localFullPath,
            remoteFullPath,
            onProgress: null
        });
    }

    private handleSnapshot(data: any): Array<Event> {
        this._events = [];

        if (data) {
            for (const id in data) {
                if (data.hasOwnProperty(id)) {
                    this._events.push(new Event(data[id]));
                }
            }
        }

        return this._events;
    }

    private handleErrors(error: Response): Observable<never> {
        return throwError(error);
    }

}
