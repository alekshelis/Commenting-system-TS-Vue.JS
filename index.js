var _Comment = /** @class */ (function () {
    function _Comment(name, text, photo, date, SecondComment, favorites, rating, answer, writeText) {
        this.name = name;
        this.text = text;
        this.photo = photo || 'data:image/jpeg;base64,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';
        this.favorites = favorites || false;
        this.rating = rating || 0;
        this.answer = answer || [];
        this.date = (date && new Date(date)) || new Date();
        this.SecondComment = SecondComment || false;
        this.writeText = '';
    }
    _Comment.prototype.addSecondComment = function (name, text, photo, date, SecondComment, favorites, rating) {
        var secCom = new _Comment(name, text, photo, date, true, favorites, rating);
        this.answer.push(secCom);
    };
    return _Comment;
}());
var _Page = /** @class */ (function () {
    // name: string;
    // text:string;
    function _Page(name, text) {
        // this.name = name;
        // this.text = text;
        this.allComments = [];
    }
    _Page.prototype.addComment = function (name, text, photo, date, SecondComment, favorites, rating, answers) {
        var com = new _Comment(name, text, photo, date, SecondComment, favorites, rating);
        this.allComments.push(com);
        if (answers) {
            answers.forEach(function (e) {
                com.addSecondComment(e.name, e.text, e.photo, e.date, e.SecondComment, e.favorites, e.rating);
            });
        }
    };
    return _Page;
}());
