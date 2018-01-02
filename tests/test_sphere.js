'use strict';

import {Vector} from '../src/vector.js';
import {Normal} from '../src/normal.js';
import {Sphere} from '../src/sphere.js';
import {Point} from '../src/point.js';
import {Ray} from '../src/ray.js';
import {test} from 'ava';

function check_equals(t, n1, n2) {
    t.true(n1.equals(n2));
}

test('Test sphere hit function', t => {
    const p = new Sphere(new Point(0, 0, 0), 0.5);

    const origin = new Point(0, 0, -1);

    // Ray hits directly to the sphere
    t.truthy(p.hit(new Ray(origin, new Vector(0, 0, 1))));

    // ray goes from inside a sphere
    t.truthy(p.hit(new Ray(new Point(0, 0, 0), new Vector(0, 0, 1))));

    // ray goes from the sphere boundary
    t.falsy(p.hit(new Ray(new Point(0, 0, 0.5), new Vector(0, 0, 1))));

    // ray goes in other direction
    t.falsy(p.hit(new Ray(origin, new Vector(0, 1, 0))));

    // ray goes in opposite direction
    t.falsy(p.hit(new Ray(origin, new Vector(0, 0, -1))));
});
