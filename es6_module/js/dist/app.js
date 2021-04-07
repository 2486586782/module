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