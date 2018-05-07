'use strict';

import {Vector} from '../src/vector.js';
import {Normal} from '../src/normal.js';
import {Sphere} from '../src/sphere.js';
import {Point} from '../src/point.js';
import {Ray} from '../src/ray.js';
import {EPSILON, K} from '../src/constants.js';
import {test} from 'ava';


function float_equal(t, a, b) {
	t.true(Math.abs(a - b) <= EPSILON + K);
}

function check_equals(t, p1, p2) {
    t.true(p1.equals(p2));
}

test('Test sphere hit function', t => {
    const p = new Sphere(new Point(0, 0, 0), 0.5);

    const origin = new Point(0, 0, -1);

    // Ray hits directly to the sphere
    let result = p.hit(new Ray(origin, new Vector(0, 0, 1)));
    t.truthy(result);
    float_equal(t, result.distance, 0.5);
    float_equal(t, new Point(0, 0, -0.5).distance(result.hit_point), 0);
    float_equal(t, result.hit_point.distance(new Point(0, 0, -0.5)), 0);
    check_equals(t, result.normal, new Normal(0, 0, -1));

    // ray goes from inside a sphere
    result = p.hit(new Ray(new Point(0, 0, 0), new Vector(0, 0, 1)));
    t.truthy(result);
    float_equal(t, result.distance, 0.5);
    float_equal(t, result.hit_point.distance(new Point(0, 0, 0.5)), 0);
    check_equals(t, result.normal, new Normal(0, 0, 1));

    // ray goes from the sphere boundary
    result = p.hit(new Ray(new Point(0, 0, 0.5), new Vector(0, 0, 1)));
    t.truthy(result);
    float_equal(t, result.distance, 0);
    float_equal(t, result.hit_point.distance(new Point(0, 0, 0.5)), 0);
    check_equals(t, result.normal, new Normal(0, 0, 1));

    // ray goes in other direction
    t.falsy(p.hit(new Ray(origin, new Vector(0, 1, 0))));

    // ray goes in opposite direction
    t.falsy(p.hit(new Ray(origin, new Vector(0, 0, -1))));
});
