/**
 * 
 * unnamed export with default keyword
 * 
 * 이름 없는 객체를 하나 export하는 경우
 */

 export default {
     add: function(a, b){
         return a + b;
     },
     substract: function(a, b){
         return a - b;
     }
 }

// 오류: 이름 없이 export하기 때문에 하나만 export 할 수 있다.
// export default function(a, b){
//     return a - b;
// }