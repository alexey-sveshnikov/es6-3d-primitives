import {Normal} from './normal.js';
import {Point} from './point.js';

import {K} from '../src/constants.js';
import {VectorError} from './exceptions.js';

export class Sphere {
    constructor(center, radius, color) {
        this.center = center;
        this.radius = radius;
        this.color = color;
    }

    hit(ray) {
        const distance_vec = ray.origin.sub(this.center);
        const a = ray.vector.dot(ray.vector);
        const b = distance_vec.mul(2.0).dot(ray.vector);
        const c = distance_vec.dot(distance_vec) - this.radius * this.radius;

        const discr = b * b - 4.0 * a * c;

        if (! isFinite(discr) || discr < 0) {
            return;
        }

        const x1 = (-b - Math.sqrt(discr)) / 2 * a;
        const x2 = (-b + Math.sqrt(discr)) / 2 * a;

        // At this point we interested in a smaller root only
        let distance;
        if (x1 >= 0) {
            distance = x1;
        } else if (x2 >= 0) {
            distance = x2;
        } else {
            return;
        }

        distance -= K;

        const hit_point = ray.origin.add(ray.vector.normalize().mul(distance));

        const normal_vec = hit_point.sub(this.center);
        const normal = new Normal(normal_vec.x, normal_vec.y, normal_vec.z);

        return {
            object: this,
            distance: distance,
            normal: normal,
            hit_point: hit_point,
        }
    }

    toString() {
        return `Sphere(x: ${this.center.x}, y: ${this.center.y}, z: ${this.center.z}, radius: ${this.radius}, color: ${this.color})`;
    }
}
