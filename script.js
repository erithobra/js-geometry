console.log("script file is linked");


class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    isSquare() {
        if (this.length == this.width) {
            return true;
        }
        return false;
    }
    area() {
        return this.length * this.width;
    }
    perimeter() {
        return 2*this.length + 2*this.width;
    }
    printPrompts() {
        console.log(`The area of the Rectangle is ${this.area()}`);
        console.log(`The perimeter of the Rectangle is ${this.perimeter()}`)
        if (this.isSquare() == true) {
            console.log("This Rectangle is a square!");
        } else {
            console.log("This Rectangle is NOT a square!");
        }
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    isEquilateral() {
        if (this.sideA == this.sideB && this.sideA == this.sideC) {
            return true;
        }
        return false;
    }
    isIsosceles() {
        if((this.sideA == this.sideB || this.sideA == this.sideC) && this.sideB !== this.sideC) {
            return true;
        } else if ((this.sideB == this.sideC || this.sideB == this.sideA) && this.sideA !== this.sideC) {
            return true;
        }
        return false;
    }
    area() {
        let s = (this.sideA + this.sideB + this.sideC) / 2;
        return (s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC))**0.5;
    }
    printPrompts() {
        console.log(`The area of the Triangle is ${this.area()}`);
        console.log(`The perimeter of the Triangle is ${(this.sideA + this.sideB + this.sideC)}`)
        if (this.isEquilateral() == true) {
            console.log("This Triangle is equilateral!");
        } else if (this.isIsosceles() == true) {
            console.log("This Triangle is isosceles!");
        } else {
            console.log("This Triangle is neither equilateral nor isosceles!");
        }
    }
}


// SQUARES
const square = new Rectangle(4, 4);
const rectangle = new Rectangle(2,3);

//square.printPrompts();
//rectangle.printPrompts();


// TRIANGLES
const equilateral = new Triangle(3,3,3);
const isosceles = new Triangle(3,3,2);
const triangle = new Triangle(4,5,3);

equilateral.printPrompts();
isosceles.printPrompts();
triangle.printPrompts();
