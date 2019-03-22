


/*

模块最终导出的是  module.exports ，exports 和 它 是引用关系

exports = module.exports
 */

let x = 10;

let y = 20;

let z = 30;





/*exports = {y,z};
exports.x = x;*/

module.exports = function(){
    console.log( "阿飞" );
};







/*
exports.x = x;
exports.y = y;
exports.z = z;
*/

/*exports = {
    x:x,
    y:y,
    z:z
};*/
// exports = {x,y,z};

//module.exports = {x,y,z};