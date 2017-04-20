// 原標 : 重新介紹 JavaScript

// 控制結構
var name = "cat";
if (name == "dog") {
	name += "!";
} else if (name == "cat") {
	name += "!!";
} else {
	name = "!" + name;
}

name == "cat !!"
console.log(name);

//while 迴圈以及 do-while 迴圈

//
//var name = o && o.getName();
console.log(name);


var name = "OK" || "預設"

console.log(name);

//
var obj = new Object();
// var obj = {};

//
obj["name"] = "小名";
var name = obj["name"];

// 物件完全初始化
var obj = {
	name: "湖羅波",
	"for": "小華",
	details: {
		color: "橘",
		size: 12 //
	}
}
console.log(obj['details']["size"]);
console.log(obj.details.color);

//陣列
var a = ["dog", "cat", "chicken"]
console.log(a.length);

console.log(typeof(a[90]))
