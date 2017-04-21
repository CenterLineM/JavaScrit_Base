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

// for (var i in a) {
// 	// 處理 a[i]
// }

//陣列結尾加入項目，最安全的方法是這樣：

//a[a.length] = item;

//陣列附有一些方法 (method)：

// a.toString(), a.toLocaleString(), a.concat(item,..)

// 函式

function add() {
	var sum = 0;
	for (var i = 0,j = arguments.length; i< j ; i++) {
		sum = sum + arguments[i];
	}
	return sum ;
}
console.log(add(2, 3, 4, 5));

//
function avg() {
	var sum = 0;
	for(var i = 0 , j = arguments.length ; i < j ; i++ ){
		sum = sum + arguments[i];
	}
	return sum/arguments.length ;
}
console.log(avg(2, 3, 4, 5));

//avg() 函式接受的是個逗號分隔的參數清單
//不過如果你要取一陣列的平均值呢？你可以把函式重寫成這樣：
function avgArray(arr) {
	var sum = 0 ;
	for( var i = 0 , j = arr.length ; i < j ; i++ ) {
		sum = sum + arr[i] ;
	}
	return sum/arr.length ;
}
console.log(avgArray([2, 3, 4, 5]));


//JavaScript 可以讓你建立匿名 (anonymous) 函式。
var avg = function() {
	var sum = 0;
	for (var i = 0, j = arguments.length ; i < j ; i++) { 
		sum = sum + arguments ;

	}
	return sum/ arguments.length ;

}

//JavaScript 能讓你遞迴地呼叫函式。這在處理樹狀結構的時候特別有用，比如瀏覽器的 DOM。
function countChars(elm) {
	if (elm.nodeType == 3){ //TEXT Node
		return elm.nodeValue.length;
	}

	var count = 0 ;
	for (var i = 0 , child ; child = elm.childNodes[i] ; i++ ){
		count = count + countChars(child) ;
	}
	return count ;

}

// 仿OOP 自訂物件
function makePerson(first, last) {
	return {
		first: first ,
		last: last 
	}
}

function personFullName(person) {
	return person.first + ' ' + person.last ;

}
function personFullNameReversed(person) {
	return person.last + ', ' + person.first;
}

s = makePerson("Simon", "Willison");

console.log(personFullName(s));
console.log(personFullNameReversed(s));

// 標準寫法
function makePerson2(first, last){
	return {
		first: first,
		last: last,
		fullName: function() {
			return this.first + ' ' + this.last;	
		},
		fullNameReversed: function() {
			return this.last + ', ' + this.first;
		}
	}
}

s1 = makePerson2("Harly", "Katy");
console.log(s1.fullName);
console.log(s1.fullNameReversed);

//
function makePerson3(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function( ) {
        return this.first + ' ' + this.last;
    }
    this.fullNameReversed = function( ) {
        return this.last + ', ' + this.first;
    }
}
var s2 = new makePerson3("Simon", "Willison");
console.log(s2.fullName);
// ! 顯示不出來


//
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
        return this.first + ' ' + this.last;
    }
    this.fullNameReversed = function() {
        return this.last + ', ' + this.first;
    }
}
var s3 = new Person("Simon", "Willison");
console.log(s3.fullName);
//

function personFullName() {
    return this.first + ' ' + this.last;
}
function personFullNameReversed() {
    return this.last + ', ' + this.first;
}
function Person1(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = personFullName;
    this.fullNameReversed = personFullNameReversed;
}
s4 = new Person("Simon", "Willison");
s4.fullName