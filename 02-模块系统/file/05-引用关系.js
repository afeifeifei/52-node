
/*
基础数据类型
    number
    string
    boolean
    undefined
    null
    symbol

引用数据类型 / 复杂数据类型
    object

 */

/*let a = 10;

let b = a;*/

//赋值

/*
等号右边是对象
那么两边的变量是引用关系，任意一边的 属性 变化就会引起对方的变化
 */
let a = {};
let b = a;   //引用关系


b.x = 10;

b = {y:20,z:30};

console.log(a);


/*b.name = "阿飞";

console.log(a.name);*/
/*
b = {age:18};
b.name = "朱雀";

console.log(a.name);*/


