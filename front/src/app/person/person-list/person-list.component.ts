import {Component, OnInit} from '@angular/core';
import {PersonService} from "../person.service";
import {Person} from "../person";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

    // public  persons: any;
    public  persons: Person[] = [];

    constructor(private personService: PersonService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
    ) {
    }

    ngOnInit() {
        this.personService.getPersons().subscribe(res => this.persons = res);

    }
    onActionPerson(id : string){

        this.router.navigate(['/persons', id]);


    }


}
