/**
 *
 */
var util = require('util')

function Base () {
  this.name = 'base'
  this.base = 1991

  this.sayHello = function () {
    console.log('Hello ' + this.name)
  }
}

Base.prototype.showName = function () {
  console.log(this.name)
}

function Sub () {
  this.name = 'sub'
}
// 實作的物件

util.inherits(Sub, Base)

var objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase) // 輸出物件的內容

var objSub = new Sub()
objSub.showName()
// objSub.sayHello(); sayHello 沒有被繼承到
console.log(objSub)
