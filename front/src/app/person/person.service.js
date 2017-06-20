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
var http_1 = require("@angular/http");
var person_1 = require("./person");
var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
        this.usr = "https://api.themoviedb.org/3/search/person?include_adult=false&page=1&api_key=b4cb68303a91f7b393e47305973fe19e&query=";
        this.tetxSearch = "a";
    }
    PersonService.prototype.getPersons = function () {
        return this.http.get(this.usr + this.tetxSearch).map(this.generatePerson);
    };
    PersonService.prototype.generatePerson = function (response) {
        var res = response.json();
        console.log(res);
        var personsArr = [];
        for (var _i = 0, _a = res.results; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i.name);
            var person = new person_1.Person(i.name, String(i.id), i.profile_path);
            //     = {
            //     name: res[i].name,
            //     personId: String(res[i].id),
            //     image : res[i].profile_path,
            // };
            personsArr.push(person);
        }
        console.log(personsArr);
        return personsArr;
    };
    return PersonService;
}());
PersonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map