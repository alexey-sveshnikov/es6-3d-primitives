'use strict';

import {Vector} from '../src/vector.js';
import {Normal} from '../src/normal.js';
import {Plane} from '../src/plane.js';
import {Point} from '../src/point.js';
import {Ray} from '../src/ray.js';
import {test} from 'ava';

function check_equals(t, n1, n2) {
    t.true(n1.equals(n2));
}

test('Test plane hit function', t => {
    const p = new Plane(
        new Point(1, 1, 1),
        new Normal(0, 0, 1)
    );

    const zero = new Point(0, 0, 0);

    // Ray hits directly to the plane
    t.true(p.hit(new Ray(zero, new Vector(0, 0, 1))));

    // ray goes parallel to the plane
    t.false(p.hit(new Ray(zero, new Vector(1, 0, 0))));

    // ray slightly sloped towards the plane
    t.true(p.hit(new Ray(zero, new Vector(1, 0, 0.000001))));
});
