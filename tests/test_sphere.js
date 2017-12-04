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
    const p = new Sphere(new Point(1, 1, 1), 0.5);

    const zero = new Point(0, 0, 0);

    // Ray hits directly to the sphere
    t.true(p.hit(new Ray(zero, new Vector(1, 1, 1))));

    // ray goes from inside a sphere
    t.true(p.hit(new Ray(new Point(1, 1, 1), new Vector(1, 1, 1))));

    // ray goes from the sphere boundary
    t.true(p.hit(new Ray(new Point(1.5, 1, 1), new Vector(1, 1, 1))));

    // ray goes in other direction
    t.false(p.hit(new Ray(zero, new Vector(1, 0, 0))));

    // ray goes in opposite direction
    t.true(p.hit(new Ray(zero, new Vector(-1, -1, -1))));
});
