import {Normal} from './normal.js';
import {Point} from './point.js';

import {VectorError} from './exceptions.js';

export class Ray {
    constructor(origin, vector) {
        this.origin = origin;
        this.vector = vector;
    }

    toString() {
        return `Ray(${this.origin.x}x${this.origin.y}x${this.origin.z} -> ${this.vector.x}x${this.vector.y}x${this.vector.z})`
    }
}
