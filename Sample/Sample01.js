/**
 * Created by tajihiro on 2016/12/06.
 */
let a = "Hello";
console.log(a);

//配列ループ
var ary01 = ["A","B","C"];
for (var val of ary01 ){
    console.log(val);
}
var ary02 = ["X","Y","Z"];
for (var key in ary02 ){
    console.log(ary02[key]);
}

var names01 = new Array("佐藤","田中","鈴木");
console.log(names01);
var names02 = ["山田","伊藤","田島"];
console.log(names02);
var names03 = Array(5);
console.log(names03);
names03[3] = ("山本");
names03[2] = ("中村");
console.log(names03.length);
var i = 0;
for(var key in names03){
    console.log(i++ + ":" + names03[key]);
}

//
var str = "こんにちは。たぢさん。";
console.log(str.length);
console.log(str.substr(6,4));       //文字数指定
console.log(str.substring(6,10));    //文字位置指定
