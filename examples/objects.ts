class ObjectPoint {
    x: number;
    y: number;

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y);
    }

    getDistance() {
        // ...
    }
}

// This is a object = an object is an instance of a class
let point = new ObjectPoint();
point.x = 1;
point.y = 3;
point.draw();
