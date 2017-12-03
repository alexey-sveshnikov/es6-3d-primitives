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
            throw new VectorError(`You can only add vectors to the point (got ${typeof(v)})`);
        }
    }

    sub(v) {
        if (v instanceof Vector) {
            return new Point(this.x - v.x, this.y - v.y, this.z - v.z);
        } else if (v instanceof Point) {
            return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
            return this.distance(v);
        } else {
            throw new VectorError(`You can only subtract vectors and points from the point (got ${typeof(v)})`);
        }
    }

    distance(p) {
        if (p instanceof Point) {
            return Math.sqrt(this.distance2(p));
        } else {
            throw new VectorError(`You can only calculate distance between two points (got ${typeof(p)})`);
        }
    }
    distance2(p) {
        if (p instanceof Point) {
            return (this.x - p.x) ** 2 + (this.y - p.y) ** 2 + (this.z - p.z) ** 2;
        } else {
            throw new VectorError(`You can only calculate distance2 between two points (got ${typeof(p)})`);
        }
    }
}