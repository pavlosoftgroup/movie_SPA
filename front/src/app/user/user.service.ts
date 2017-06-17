import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {User, UserStatus} from "./user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
    userSession: any ;
    regUrl: string = 'http://localhost:3000/user-registrator';
    logUrl: string = 'http://localhost:3000/auth';

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({headers: this.headers});

    constructor(private http: Http,) {
    }

    loginUser(data: string[]):Observable<any>{
        console.log(data);
        return this.http.post(this.logUrl,  {data}, this.options).map(response => {
            this.userSession = response;
            console.log(this.userSession);

        });
    }

    regUser(user: User): Observable<UserStatus> {


        return this.http.post(this.regUrl, {user}, this.options).map(this.generateUserStatus);

    }

    generateUserStatus(response: Response){

        let res = response.json();
        console.log(res);

        let status = new  UserStatus(
            res.insertedIds[0],
            String(Date.now()),
            '1',
        );

        console.log(status);
        return status


    }

}
