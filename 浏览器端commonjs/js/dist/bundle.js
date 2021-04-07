(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let module1=require("./src/module1")
let module2=require("./src/module2")
let module3=require("./src/module3")

console.log(module1.name)
module1.fun()
module2.hs()
console.log(module3.arr)
},{"./src/module1":2,"./src/module2":3,"./src/module3":4}],2:[function(require,module,exports){
module.exports={
name:"无邪",
fun(){
    console.log(this.name+"起灵")
}
}
},{}],3:[function(require,module,exports){
exports.hs=function(){
console.log("我是你爸爸")
}
},{}],4:[function(require,module,exports){
exports.arr=[1,2,3,4,5,6]
},{}]},{},[1]);
