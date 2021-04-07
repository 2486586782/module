//汇总的文件,主文件
let module1=require("./modules/common1")
let module2=require("./modules/common2")
let module3=require("./modules/common3")
//注意：1：引入的是第三方模块，则直接写模块名
 //     2：如果引入的是自定义模块，必须写路径


//使用模块取决于模块暴露什么
console.log(module1.name);
module1.fun();
module2.hs();
console.log(module3.sz)