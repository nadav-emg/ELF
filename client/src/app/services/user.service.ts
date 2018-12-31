import { Injectable } from "@angular/core";
import { User } from "~/modules/user.module";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
    /**
     *
     */
    constructor(private http: HttpClient) {
       
    }
    register(user: User) {
        return this.http.post(
            'Url',
            JSON.stringify({
                mail: user.email,
                password:user.password
            }),
            {headers: this.getCommonHeaders()}
        )

    }

    private getCommonHeaders(){
        return new HttpHeaders({
            "Content-Type": "application/json"
            //"Authorization": 
        })
    }
    login(user: User): boolean {
        return true;
    }
    resetPassword(email) {}
}