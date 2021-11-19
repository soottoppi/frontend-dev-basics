/**
 * 
 * named export 1
 * 
 * 이름 없는 객체를 하나 export하는 경우 const
 * 
 * exports(require.js)와 유사하다. 이 모듈을 import할 
 */

 const add = function(a, b){
        return a + b;
 }

 const substract = function(a, b){
    return a - b;
}

export {add, substract};
export default { add, substract }