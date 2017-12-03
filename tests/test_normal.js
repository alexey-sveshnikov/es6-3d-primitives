'use strict';

import {Vector} from '../src/vector.js';
import {Normal} from '../src/normal.js';
import {test} from 'ava';

function check_equals(t, n1, n2) {
    t.true(n1.equals(n2));
}

test('Test normal comparison', t => {
    const n = new Normal(1, 2, 3);

    check_equals(t, n, new Normal(1, 2, 3));
});

test('Test normals negation operation', t => {
    const n = new Normal(1, 2, 3);

    check_equals(t, n.neg(), new Normal(-1, -2, -3));
});

test('Test normal addition (two normals)', t => {
    const n1 = new Normal(1, 2, 3);
    const n2 = new Normal(5, 7, 11);

    check_equals(t, n1.add(n2), new Normal(6, 9, 14));
});

test('Test normal addition (normal + vector)', t => {
    const n1 = new Normal(1, 2, 3);
    const n2 = new Vector(5, 7, 11);

    check_equals(t, n1.add(n2), new Vector(6, 9, 14));
});

test('Test normal subtraction (two normals)', t => {
    const n1 = new Normal(1, 2, 3);
    const n2 = new Normal(5, 7, 11);

    check_equals(t, n1.sub(n2), new Normal(-4, -5, -8));
});

test('Test normal subtraction (normal + vector)', t => {
    const n1 = new Normal(1, 2, 3);
    const n2 = new Vector(5, 7, 11);

    check_equals(t, n1.sub(n2), new Vector(-4, -5, -8));
});

test('Test normals dot product', t => {
    const n = new Normal(1, 2, 3);

    const result = n.dot(new Vector(5, 7, 11));

    t.is(result, 5 + 14 + 33);
});

test('Test normal multiplication (by a constant)', t => {
    const n = new Normal(1, 2, 3);

    check_equals(t, n.mul(2), new Normal(2, 4, 6));
});
