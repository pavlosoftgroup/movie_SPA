import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
    // navLinks = [
    //     'home',
    //     'movies',
    //     'persons'
    // ];
    navLinks = [{
        label: 'Home', link: 'home'
    }, {
        label: 'Movies', link: 'movies'
    }, {
        label: 'Persons', link: 'persons'
    }
    ];


    constructor() {
    }

    ngOnInit() {
    }

}
