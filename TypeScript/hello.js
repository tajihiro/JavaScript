var MyClass = (function () {
    function MyClass(title, message) {
        this.title = title;
        this.message = message;
    }
    MyClass.prototype.print = function () {
        return "<h1>" + this.title + "</h1>" + "<p>" + this.message + "</p>";
    };
    return MyClass;
}());
;
var msg = new MyClass("Hello", "This is TypeScript!!");
document.write(msg.print());
