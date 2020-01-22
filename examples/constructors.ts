class ConstructorPoint {
    x: number;
    y: number;

    constructor(x: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y);
    }
}

// This is a object = an object is an instance of a class
let constructorPoint = new ConstructorPoint(1);
constructorPoint.draw();
