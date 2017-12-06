import {VectorError} from './exceptions.js';

export class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    equals(v) {
        return this.r == v.r && this.g == v.g && this.b == v.b;
    }

    add(v) {
        if (v instanceof Color) {
            return new Color(this.r + v.r, this.g + v.g, this.b + v.b);
        } else {
            throw new VectorError(`You can only add other color to color object (got ${typeof(v)})`);
        }
    }

    mul(v) {
        if (typeof(v) === 'number') {
            return new Color(this.r * v, this.g * v, this.b * v);
        } else if (v instanceof Color) {
            return new Color(this.r * v.r, this.g * v.g, this.b * v.b);
        } else {
            throw new VectorError(`You can only multiply color by other color or scalar (got ${typeof(v)})`);
        }
    }

    pow(v) {
        return new Color(this.r ** v, this.g ** v, this.b **v);
    }

    toString() {
        return `Color(${this.r}, ${this.g}, ${this.b})`;
    }

    gamma(g) {
        if (g != 1.0) {
            return this.pow(1.0/g);
        } else {
            return this
        }
    }
}
