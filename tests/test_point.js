'use strict';

import {Vector, VectorError} from '../vector.js';
import {Point} from '../point.js';
import {test} from 'ava';

function check_equals(t, p1, p2) {
    t.true(p1.equals(p2));
}

test('Test point comparison', t => {
    const p = new Point(1, 2, 3);

    check_equals(t, p, p);
    check_equals(t, p, new Point(1, 2, 3));

    t.false(p.equals(new Point(0, 2, 3)));
    t.false(p.equals(new Point(1, 0, 3)));
    t.false(p.equals(new Point(1, 2, 0)));
});

test('Test point multiplication (by constant)', t => {
    const p = new Point(1, 2, 3);

    check_equals(t, p.mul(2), new Point(2, 4, 6));
});

test('Test adding vector to the point', t => {
    const p = new Point(0, 0, 0);
    const v = new Vector(1, 2, 3);

    check_equals(t, p.add(v), v);  // we can compare point with vectors, too
});

test('Test adding vector to point (invalid argument)', t => {
    const p = new Point(0, 0, 0);

    t.throws(() => {
        p.add(p);
    }, VectorError);
});

test('Test subtracting vector from the point', t => {
    const p = new Point(0, 0, 0);
    const v = new Vector(1, 2, 3);

    check_equals(t, p.sub(v), new Point(-1, -2, -3));
});

test('Test adding vector to point (invalid argument)', t => {
    const p = new Point(0, 0, 0);

    t.throws(() => {
        p.sub(p);
    }, VectorError);
});

test('Test distance calculation', t => {
    const p0 = new Point(0, 0, 0);

    t.is(p0.distance(new Point(3, 4, 0)), 5);
    t.is(p0.distance(new Point(0, 3, 4)), 5);

    const p1 = new Point(-1, -1, -1);
    const p2 = new Point(1, 1, 1);
    t.is(p1.distance(p0), p2.distance(p0))
});
