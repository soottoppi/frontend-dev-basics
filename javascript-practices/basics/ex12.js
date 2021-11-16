/**
 *  Array 확장(prototype 기반의 확장) : List 메소드 추가
 *  
 */

Array.prototype.insert = function(index, value){
      if(value instanceof Array){
            // for(var i = 0; i < value.length ; i++){                  // 방법 1
            //       this.splice(index++, 0, value[i]);
            // }

            // var _this = this;                                                    // 방법 2
            // value.forEach(function(e){
            //       _this.splice(index++, 0, e);
            // });

            value.forEach(function(e){                                  // 방법 3
                  this.splice(index++, 0, e);
            }.bind(this));

      } else {
            this.splice(index, 0, value);
      }
      
}

Array.prototype.remove = function(index){
      this.splice(index, 1);
}

// List로 사용하기
var a = [1, 2, 4];

console.log(a);
a.insert(2, 3);
console.log(a);

a.remove(3);                        // index 3 요소 삭제 : 4(value)
console.log(a);

a.insert(2, ['a', 'b', 'c']);       // 기대 : [1, 2, 'a', 'b', 'c']
console.log(a);                     // 결과 : [1, 2, ['a', 'b', 'c'], 3]
                                                // 값이 아닌  배열 객체로 들어갔기에 insert 함수를 수정해야한다

var f = function(param){
      console.log(this.name + ":" + param);
}

// f();
var o = {name: "kimsoohyeong"};
f.call(o, "kimsoohyeong");

f.apply(o);