import {Normal} from './normal.js';
import {Point} from './point.js';
import {Color} from './color.js';

import {VectorError} from './exceptions.js';

export class Plane {
    constructor(point, normal, color) {
        this.point = point;
        this.normal = normal;
        this.color = color;
    }

    hit(ray) {
        const d = this.normal.dot(this.point.sub(ray.origin)) / ray.vector.dot(this.normal);

        if (! isFinite(d) && d < 0) {
            return;
        }
        return {
            object: this,
            distance: d,
            normal: this.normal,
        }
    }
}
