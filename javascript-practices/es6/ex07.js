/**
 * class Rect
 */

class Rect {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    draw() {
        console.log(`Rect(w=${this.w}, h=${this.h})를 그렸습니다.`);
    }
}

// test
const rect1 = new Rect(10, 20);
const rect2 = new Rect(100, 200);

rect1.draw();
rect2.draw();

/**
 * 
 * cf. 생성자 함수(prototype 기반)
 */

const Circle = function(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.prototype.draw = function() {
    console.log(`Circle(x=${this.x}, y=${this.y}, r=${this.r})를 그렸습니다`);
}

const circle1 = new Circle(10, 20, 5);
const circle2 = new Circle(100, 200, 5);

circle1.draw();
circle2.draw();

/**
 * extends
 */

class Shape {
    contructor(bgColor, lnColor){
        this.bgColor = bgColor;
        this.lnColor = lnColor;
    }

    draw() {
        console.log("그릴 수 없습니다.");
    }

    area() {
        console.log("구할 수 없습니다.");
    }
}


class Triangle extends Shape {
    constructor(w, h){
        super("red", "black");
        this.w = w;
        this.h = h;
    }

    // @Override
    draw(){
        console.log(`Triangle(w=${this.w},h=${this.h},bgColor=${this.bgColor},lncolor=${this.lnColor})를 그렸습니다.`);
    }
}

const tri1 = new Triangle(10, 20);
const tri2 = new Triangle(100, 200);

tri1.draw();
tri2.draw();
