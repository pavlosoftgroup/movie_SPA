"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var person_service_1 = require("./person.service");
describe('PersonService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [person_service_1.PersonService]
        });
    });
    it('should be created', testing_1.inject([person_service_1.PersonService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=person.service.spec.js.map