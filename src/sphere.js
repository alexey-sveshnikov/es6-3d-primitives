import {Normal} from './normal.js';
import {Point} from './point.js';

import {VectorError} from './exceptions.js';

export class Sphere {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    hit(ray) {
        const distance_vec = ray.origin.sub(this.center);
        const a = ray.vector.dot(ray.vector);
        const b = distance_vec.mul(2.0).dot(ray.vector);
        const c = distance_vec.dot(distance_vec) - this.radius * this.radius;

        const discr = b * b - 4.0 * a * c;
        // console.log(`Discriminant: ${b} * ${b} - 4.0 * ${a} * ${c} = ${discr}`);

        // TODO: pay attention to the ray direction. At this point we count a hit even in case if ray goes
        // to opposite direction
        return isFinite(discr) && discr >= 0;
    }
}
