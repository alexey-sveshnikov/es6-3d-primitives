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

        // TODO: pay attention to the ray direction. At this point we count a hit even in case if ray goes
        // to opposite direction
        return isFinite(t) && t >= 0;
    }
}
