"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var vote_service_1 = require("./vote.service");
describe('VoteService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [vote_service_1.VoteService]
        });
    });
    it('should be created', testing_1.inject([vote_service_1.VoteService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=vote.service.spec.js.map