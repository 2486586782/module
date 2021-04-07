//导入模块
//主文件，汇总模块
import module from './module01'
import {fun,fun2} from "./module02"
import {arr,fun3} from './module03'
import * as module4 from './module04'



//使用
console.log(module);
fun();
fun2();
console.log(arr);
fun3();
console.log(module4.age);
console.log(module4.name2);
console.log(module4.name3);


//babel js/src -d js/dist
//browserify js/dist/app.js -o js/dist/dist.js
//如果更改代码需要重新执行命令