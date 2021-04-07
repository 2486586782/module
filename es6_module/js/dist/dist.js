(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module2 = require('./module01');

var _module3 = _interopRequireDefault(_module2);

var _module4 = require('./module02');

var _module5 = require('./module03');

var _module6 = require('./module04');

var module4 = _interopRequireWildcard(_module6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_module3.default);
(0, _module4.fun)();
(0, _module4.fun2)();
console.log(_module5.arr);
(0, _module5.fun3)();
console.log(module4.age);
console.log(module4.name2);
console.log(module4.name3);
},{"./module01":2,"./module02":3,"./module03":4,"./module04":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "起灵"
};
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function fun() {
    console.log("我是模块2函数");
}

function fun2() {
    console.log("我是模块2函数2");
}
exports.fun = fun;
exports.fun2 = fun2;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fun3 = fun3;
var arr = exports.arr = [1, 2, 3, 4, 5];
function fun3() {
    console.log("我是模块3模块");
}
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var age = 23;
var name2 = "无邪";
var name3 = "黑瞎子";
exports.age = age;
exports.name2 = name2;
exports.name3 = name3;
},{}]},{},[1]);
