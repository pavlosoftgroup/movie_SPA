import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Person} from "./person";

@Injectable()
export class PersonService {

    usr: string = "https://api.themoviedb.org/3/search/person?include_adult=false&page=1&api_key=b4cb68303a91f7b393e47305973fe19e&query=";
    tetxSearch = "a";

    constructor(private http: Http,) {
    }

    getPersons(): Observable<Person[]> {

        return this.http.get(this.usr + this.tetxSearch).map(this.generatePerson)
    }


    generatePerson(response: Response) {
        let res = response.json();
        console.log(res);
        let personsArr = [];
        for (let i of res.results) {

        console.log(i.name);
            let person = new  Person(
                i.name,
                String(i.id),
                i.profile_path,

            );
            //     = {
            //     name: res[i].name,
            //     personId: String(res[i].id),
            //     image : res[i].profile_path,
            // };
            personsArr.push(person);
        }
        console.log(personsArr);
        return personsArr;


    }

}
