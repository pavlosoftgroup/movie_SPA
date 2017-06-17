"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var comments_service_1 = require("./comments.service");
describe('CommentsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [comments_service_1.CommentsService]
        });
    });
    it('should be created', testing_1.inject([comments_service_1.CommentsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=comments.service.spec.js.map