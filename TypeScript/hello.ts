class MyClass{
  constructor(public title: string, public message: string){}
  print(){
    return "<h1>" + this.title + "</h1>" + "<p>" + this.message + "</p>";
  }  
};

var msg:MyClass = new MyClass("Hello","This is TypeScript!!");

document.write(msg.print());
