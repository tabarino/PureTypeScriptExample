class PropertiesPoint {
    constructor(private _x: number, private _y?: number) {
    }

    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        if (value < 0) {
            throw new Error('value cannot be less than 0');
        }

        this._x = value;
    }

    public draw() {
        console.log('x: ' + this._x + ', y: ' + this._y);
    }
}

// This is a object = an object is an instance of a class
let propertiesPoint = new PropertiesPoint(1, 3);
let x = propertiesPoint.x;
propertiesPoint.x = 10;
propertiesPoint.draw();
