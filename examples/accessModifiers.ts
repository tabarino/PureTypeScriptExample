class AcMoPoint {
    private x: number;
    private y: number;

    constructor(x: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y);
    }
}

// This is a object = an object is an instance of a class
let acMoPoint = new AcMoPoint(1, 3);
acMoPoint.draw();
