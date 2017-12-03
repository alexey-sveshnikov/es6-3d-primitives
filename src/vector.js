'use strict';

import {VectorError} from "./exceptions";

export class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v) {
        return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
    }

    sub(v) {
        return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    mul(v) {
        if (v instanceof Vector) {
            return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);
        } else if (typeof(v) == 'number') {
            return new Vector(this.x * v, this.y * v, this.z * v);
        } else {
            throw new VectorError('Vector.mul() operand must be a vector or scalar')
        }
    }

    div(v) {
        if (v instanceof Vector) {
            return new Vector(this.x / v.x, this.y / v.y, this.z / v.z);
        } else if (typeof(v) == 'number') {
            return new Vector(this.x / v, this.y / v, this.z / v);
        } else {
            throw new VectorError('Vector.div() operand must be a vector or scalar')
        }
    }

    cross(v) {
        return new Vector(
            this.y * v.z - this.z * v.y,
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x
        )
    }

    neg() {
        return new Vector(-this.x, -this.y, -this.z);
    }

    normalize() {
        return this.div(this.length());
    }

    equals(v) {
        return this.x === v.x && this.y === v.y && this.z === v.z;
    }

    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    length() {
        return Math.sqrt(this.dot(this))
    }

    length2() {
        return this.dot(this)
    }

    toString() {
        return `Vector(x: ${this.x}, y: ${this.y}, z: ${this.z})`
    }
}
