"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comment = (function () {
    function Comment(movieId, autor, text, date) {
        if (date === void 0) { date = Date.now(); }
        this.movieId = movieId;
        this.autor = autor;
        this.text = text;
        this.date = date;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map