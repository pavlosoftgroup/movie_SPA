"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User() {
        this._id = '';
        this.status = 0;
    }
    return User;
}());
exports.User = User;
var UserStatus = (function () {
    function UserStatus(userId, date, status) {
        this.userId = userId;
        this.date = date;
        this.status = status;
    }
    return UserStatus;
}());
exports.UserStatus = UserStatus;
//# sourceMappingURL=user.js.map