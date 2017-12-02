import {Vector} from './vector.js';

import {VectorError} from './exceptions.js';

export class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    equals(v) {
        return this.x === v.x && this.y === v.y && this.z === v.z;
    }

    mul(c) {
        return new Point(this.x * c, this.y * c, this.z * c);
    }

    add(v) {
        if (v instanceof Vector) {
            return new Point(this.x + v.x, this.y + v.y, this.z + v.z);
        } else {
            throw VectorError('You can only add vectors to the point');
        }
    }

    sub(v) {
        if (v instanceof Vector) {
            return new Point(this.x - v.x, this.y - v.y, this.z - v.z);
        } else {
            throw VectorError('You can only subtract vectors from the point');
        }
    }

    distance(p) {
        if (p instanceof Point) {
            return Math.sqrt(this.distance2(p));
        } else {
            throw VectorError('You can only calculate distance between two points');
        }
    }
    distance2(p) {
        if (p instanceof Point) {
            return (this.x - p.x) ** 2 + (this.y - p.y) ** 2 + (this.z - p.z) ** 2;
        } else {
            throw VectorError('You can only calculate distance2 between two points');
        }
    }
}