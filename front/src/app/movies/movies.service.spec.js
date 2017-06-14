"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var movies_service_1 = require("./movies.service");
describe('MoviesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [movies_service_1.MoviesService]
        });
    });
    it('should be created', testing_1.inject([movies_service_1.MoviesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=movies.service.spec.js.map