class AcMoCoPaPoint {
    constructor(private x: number, private y?: number) {
    }

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y);
    }
}

// This is a object = an object is an instance of a class
let acMoCoPaPoint = new AcMoCoPaPoint(1, 3);
acMoCoPaPoint.draw();
