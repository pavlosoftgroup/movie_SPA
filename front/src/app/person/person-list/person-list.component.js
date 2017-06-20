"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var person_service_1 = require("../person.service");
var router_1 = require("@angular/router");
var PersonListComponent = (function () {
    function PersonListComponent(personService, activatedRoute, router) {
        this.personService = personService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // public  persons: any;
        this.persons = [];
    }
    PersonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personService.getPersons().subscribe(function (res) { return _this.persons = res; });
    };
    PersonListComponent.prototype.onActionPerson = function (id) {
        this.router.navigate(['/persons', id]);
    };
    return PersonListComponent;
}());
PersonListComponent = __decorate([
    core_1.Component({
        selector: 'app-person-list',
        templateUrl: './person-list.component.html',
        styleUrls: ['./person-list.component.css']
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService,
        router_1.ActivatedRoute,
        router_1.Router])
], PersonListComponent);
exports.PersonListComponent = PersonListComponent;
//# sourceMappingURL=person-list.component.js.map