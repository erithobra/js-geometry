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

const square = new Rectangle(4, 4);
const rectangle = new Rectangle(2,3);

square.printPrompts();
rectangle.printPrompts();
