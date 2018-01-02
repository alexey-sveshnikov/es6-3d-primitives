'use strict';

import {Vector} from '../src/vector.js';
import {Normal} from '../src/normal.js';
import {Plane} from '../src/plane.js';
import {Point} from '../src/point.js';
import {Ray} from '../src/ray.js';
import {test} from 'ava';

test('Test plane hit function', t => {
    const p = new Plane(
        new Point(0, 0, 0),
        new Normal(0, 0, 1)
    );

    const origin = new Point(0, 0, 1);

    // Ray hits directly to the plane
    t.truthy(p.hit(new Ray(origin, new Vector(0, 0, -1))));

    // ray goes parallel to the plane
    t.falsy(p.hit(new Ray(origin, new Vector(1, 0, 0))));

    // ray slightly sloped towards the plane
    t.truthy(p.hit(new Ray(origin, new Vector(0, 0, 0.000001))));
});
