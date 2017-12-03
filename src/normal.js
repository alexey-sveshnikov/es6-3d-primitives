import {Vector} from './vector.js';
import {VectorError} from './exceptions.js';

export class Normal {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    equals(v) {
        return this.x === v.x && this.y === v.y && this.z === v.z;
    }

    neg() {
        return new Normal(-this.x, -this.y, -this.z);
    }

    add(v) {
        if (v instanceof Normal) {
            return new Normal(this.x + v.x, this.y + v.y, this.z + v.z);
        } else if (v instanceof Vector) {
            return new Vector(this.x + v.x, this.y + v.y, this.z + v.z); // TODO: DRY
        } else {
            throw new VectorError('You can only add vector or normal to the normal');
        }
    }

    sub(v) {
        if (v instanceof Normal) {
            return new Normal(this.x - v.x, this.y - v.y, this.z - v.z);
        } else if (v instanceof Vector) {
            return new Vector(this.x - v.x, this.y - v.y, this.z - v.z); // TODO: DRY
        } else {
            throw new VectorError('You can only subtract vector or normal to the normal');
        }
    }

    dot(v) {
        if (v instanceof Vector) {
            return this.x * v.x + this.y * v.y + this.z * v.z;
        } else {
            throw new VectorError('You can only calculate dot product with a vector');
        }
    }

    mul(c) {
        if (typeof(c) === 'number') {
            return new Normal(this.x * c, this.y * c, this.z * c);
        } else {
            throw new VectorError('You can only multiply normal with a scalar');
        }
    }



    distance(p) {
        if (p instanceof Point) {
            return Math.sqrt(this.distance2(p));
        } else {
            throw new VectorError('You can only calculate distance between two points');
        }
    }
    distance2(p) {
        if (p instanceof Point) {
            return (this.x - p.x) ** 2 + (this.y - p.y) ** 2 + (this.z - p.z) ** 2;
        } else {
            throw new VectorError('You can only calculate distance2 between two points');
        }
    }
}
