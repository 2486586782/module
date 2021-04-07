(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let module01=require("./module01")
let module02=require("./module02")
let module03=require("./module03")



module01.dome();
console.log(module02.arr);
console.log(module03.name);
console.log(module03.age)
},{"./module01":2,"./module02":3,"./module03":4}],2:[function(require,module,exports){
module.exports.dome=function(){
    console.log("我的module_exports")
    
}

},{}],3:[function(require,module,exports){
exports.arr=[1,2,3,4,5]
},{}],4:[function(require,module,exports){
exports.name="起灵";
exports.age=23
},{}]},{},[1]);
