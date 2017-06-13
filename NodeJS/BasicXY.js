console.log("a" < "b");
console.log("This is a string".charAt(0));
// 數組是任意類型組成
var myArray = ["Hello", 45, true];

// 數組索引從0 開始
console.log(myArray[1]);

//數組可變，並擁有變量
myArray.push("World");
myArray.length; // = 4

// 在指定下標 添加/ 修改
myArray[3] = "Hello";
console.log(myArray);

// javascript 中的"對象"相當於其他語言中的
//"字典"or"映射":
// 是 鍵-值對的無序集合
var myObj = {key1:"Hello", key2:"World"};
console.log(myObj);

// 鍵是字符串
// 值可以任意類型
var myObj = {myKey: "myValue", "my other key": 4};

// 對象屬性的訪問可以通過下標
//OK 成功
console.log(myObj["my other key"]);

// ...或者也可用 .
console.log(myObj.myKey); // = "myValue"


// 對象是可變，值也可以被更改或增加新的 鍵
myObj.myThirdKey = true;

console.log(myObj.myThirdKey = true);
// 如果想獲取為定義的植，會返回 underfined
myObj.myFourthKey;

console.log(myObj.myFourthKey);

// 3. 邏輯與控制結構
// 語法與Java 很相似
// if

var count = 1;
if (count == 3){
	// count 是3 時執行
} else if(count == 4){
	// count 是 4  時執行
} else {
	// 其他情況下執行
}

// while 循環
while(true) {
	// 無限循環
	var i;
	i++;

	i==10;
	break
}

//Do-while 和 While 循環類似
//但前者至少執行一次
/*

var input;
do {
	input = getInput(); // 這段不可執行
} while (!isValid(input))

*/

// for 循環和C Java 中一樣:
// 初始化; 繼續執行的條件; 跌代
for (var i= 0; i< 5; i++) {
	console.log(i);
	//執行五次
}
// && 是邏輯與， || 是 或


/*


目前這個程式不可執行 2017/6/12 需建構函釋
if( house.size == "big" && house.color  == "blue"){
	house.contains = "bear";
	console.log(house.contains);
}
if (color == "red" || color == "blue"){
	console.log(color);

	*/
	// color 是 red 或者 blue 時 執行
//}

// && 和 || 是短路
// 初始設定 有用

/*
noe.js 執行上有問題

var name1 = otherName || "default";

console.log(name1);
console.log(otherName);


*/

// switch 語句使用 === 嚴格檢查相等性
// 在每個case 結束時 使用 'break'
// 否則其後的case  也將被執行
var grade ='B';
switch (grade) {
	case 'A':
	 console.log("Gread Job");
	 break;
	case 'B':
	 console.log("OK job");
	 break;
	case 'C':
	 console.log("You can do better");
	 break;
	default:
	 console.log("Oy vey");
	 break;
}


// 4. 重要的部分:
// 函數、 作用域、閉包

// JavaScript 函數 由 function 關鍵字定義
function myFunction(thing){
	return thing.toUpperCase();
}
myFunction("foo"); // ="foo"

console.log(myFunction("foo"));

// 注意 被返回 的植 必須 開始於 return 關鍵字的  那一航
// 否則 自動分號補齊 將返回 underfined
function myFunction()
{
	return // 分號自動 安插
	{
		thisIsAn: 'object literal'
	}
}
myFunction(); // =undefined

// javascript 中函數是 最好權位
// 所以函數能夠  賦予變量
// 並 作為參數傳遞
// 比如 一個事件 處裡函數:
function myFunction () {
	// 這代碼將在 5 秒鐘後 被調用
  console.log('這代碼將在 5 秒鐘後 被調用')
}
// 有些問題要修改 setTimeout(myFunction(), 5000)


// Node.js 下執行有問題
//  函數對象 設甚至不需要 聲明 名子， 函數可以定義到另外一個 函數參數裡
// setTimeout(function () {
// 	// 將在五秒後執行
//
//   console.log('send!')
// }, 5000)

// JavaScript 有 函數 作用域 ， 函數有自己的作用域d
if (true){
	var i = 5;
}
i;
console.log(i);

// 經常使用 "立即執行匿名函數"
// 避免 一些臨時變量 擴散到 全局作用域
(function(){
	var temporary = 5;
	// 修改成全局對象('globaal object') 來訪問全局作用域
	// web browser 是 window 這個對象
	// Node.js 明子可能不同
 var permanent = 10
 global.Permanent = permanent

})();
// temporary;  偏出異常 referenceError
 // =10
 // 成功 寫全局變數
console.log(Permanent)

// 最終要的功能 閉包
// 一個函數在另一個函數中被定義，
// 內部函數有外部函數所有變量的訪問權
// 即使外部函數end
function sayHelloFiveSeconds(name){
	var prompt = "Hello, " + name + "!";
	// 內部函數 默認 放在 局部作用域
	// 像 var
function inner () {
	console.log(prompt);
	// alert 是瀏覽器才可用
}

	setTimeout(inner, 500); // 非同步的概念
	// setTimeout 是異步
	// sayHelloFiveSeconds 函數會立即退出
	// 而 setTimeout 會在後 調用 inner
	// 然而 由於inner 事由 sayHelloFiveSeconds  閉包包含
	// 所以 inner 在其最終被調用仍難 能夠使用  prompt
}
sayHelloFiveSeconds('Adam')


/*
5. 仿OOP 對象、建構函數、原型
	對象可以包含方法
*/
var myObj = {
	myFunc: function(){
		return "Hello World";
	}
};
myObj.myFunc(); // = "Hello World"
console.log(myObj.myFunc());

// 當度向中的函數被調用時
// 這個函數可以 通過 this 訪問其依附的這個對象
myObj = {
	myString: "Hello world",
	myFunc: function(){
		return this.myString;
	}
};
myObj.myFunc(); // = "Hello world! "
console.log(myObj.myFunc());

// 這句話不懂 ???
// 但这个函数访问的其实是其运行时环境，而非定义时环境，即取决于函数是如何调用的。
// 所以如果函数被调用时不在这个对象的上下文中，就不会运行成功了。
var myFunc = myObj.myFunc;
console.log(myFunc());

// 一個函數被指定一個對象的方法， 通過this 來訪問
// 對象成員 即使 函數定義沒被 依附在對像上 也可以使用
var myOtherFunc = function() {
	return this.myString.toUpperCase();
	// 全部大寫
}
myObj.myOtherFunc = myOtherFunc;
console.log(myObj.myOtherFunc()); // = "HELLO WORLD"

// 當我們通過 call 或 apply 調用函數時
// 可以為其指定一個執行上下文 附加文字
var anotherFunc = function(s){
	return this.myString + s;
}
console.log(anotherFunc.call(myObj, "and Hello Moon! "));
// = ""

// apply一樣， 只是要求是以Array的模式 來傳遞 參數列表
anotherFunc.apply(myObj, [" And Hello Sun !"]);
// =

// 函數接受系列參數
// 也可以傳入 Array
var mm1 = Math.min(42, 6, 27);
console.log(mm1);
var mm2 =Math.min([42, 6, 27]); // 沒意義數值
console.log(mm2);
var mm3 =Math.min.apply(Math, [42, 6, 27]);
console.log(mm3);

// apply call 都只是臨時的
// 如果希望函數附加在 對象上 可用 bind
var boundFunc = anotherFunc.bind(myObj);
bf = boundFunc(" And Hello Saturn ! ");
console.log(bf);

// bind 也可以用來部分應用一個函數
var product = function(a, b){ return a * b ;}
var doubler = product.bind(this, 2);
bd = doubler(8);
console.log(bd);



// 使用 new 創建 物件
// thiis 可以方問 類別函數
// 構造函數
var MyConstuctor = function() {
	this.myNumber = 5;
}
// 跟Java 類似
myNewObj = new MyConstuctor();  // {myNumber: 5}
my_n_o = myNewObj.myNumber; // = 5
console.log(my_n_o);

// 每個 js 物件 都有一 個 '原型'

// 非標準 透過  _proto_ 術性訪問一個對象的原型
var myObj = {
	myString: "Hello Class"
};
var myPrototype = {
	meaningOfLife: 42,
	myFunc: function(){
		return this.myString.toLowerCase()
	}
};

myObj._proto_ = myPrototype

// 有問題
var mom = myObj.meaningOfLife;
console.log(mom); // 出現未定義

// 調用的類別 函數也可以
var mmf = myObj.myFunc();
console.log(mmf); // 不可運作
