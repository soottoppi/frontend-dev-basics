/**
 *    function 타입의 객체(함수)
 * 
 */

// 함수를 생성하는 방법1
function f1(a,b) {
      return a+b;
}

console.log(typeof(f1), f1(10, 20));

// 함수를 생성하는 방법2
var f2 = function(a,b) {
      return a + b;
}

console.log(typeof(f2), f2(10, 20));

// 함수를 생성하는 방법3 : new 연산자와 함께 Function() 생성자 함수를 사용하는 방법
var f3 = new Function('a', 'b', 'return a+b');
console.log(typeof(f3), f3(10,20));

// 함수를 생성하는 방법4 : 익명(anonymous) 함수
// callback
setTimeout(function() {
      console.log("timeOut");
}, 2000)

// 즉시 실행하는 함수
var s = (function(a,b) {
      var m = 10;
      return a/m + b/m;
})(10,20);
console.log(s);

// 가변 파라미터 함수
var sum = function(){
      console.log(arguments instanceof Array);  // Array가 아니다, 유사 배열이다.
      
      var sum = 0;
      // 구현 1
      // for(var i = 0; i< arguments.length; i++) {
      //       sum += arguments[i];
      // }

      // 구현 2
      Array.prototype.forEach.call(arguments, function(e){
            sum += e;
      })
      return sum;
}

console.log(sum(10,20));
console.log(sum(10,20, 30));
console.log(sum(10,20, 30, 40, 50));
