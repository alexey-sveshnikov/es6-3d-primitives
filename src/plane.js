import {Normal} from './normal.js';
import {Point} from './point.js';

import {VectorError} from './exceptions.js';

export class Plane {
    constructor(point, normal) {
        this.point = point;
        this.normal = normal;
    }

    hit(ray) {
        const t = this.normal.dot(this.point.sub(ray.origin)) / ray.vector.dot(this.normal);
        console.log(`hit point: ${t}`)

        return isFinite(t) && t >= 0;
    }
}
