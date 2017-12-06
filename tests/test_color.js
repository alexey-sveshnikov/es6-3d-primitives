'use strict';

import {Color} from '../src/color.js';
import {VectorError} from "../src/exceptions";
import {test} from 'ava';

function check_equals(t, a, b) {
    t.true(a.equals(b));
}

test('Test color comparison', t => {
    const c = new Color(1, 2, 3);

    check_equals(t, c, c);
    check_equals(t, c, new Color(1, 2, 3));
});

test('Test colors summing', t => {
    const c1 = new Color(1, 2, 3);
    const c2 = new Color(5, 7, 11);

    check_equals(t, c1.add(c2), new Color(6, 9, 14));
});

test('Test color multiplication (by constant)', t => {
    const c = new Color(1, 2, 3);

    check_equals(t, c.mul(2), new Color(2, 4, 6));
});

test('Test color multiplication (by another color)', t => {
    const c1 = new Color(1, 2, 3);
    const c2 = new Color(5, 7, 11);

    check_equals(t, c1.mul(c2), new Color(5, 14, 33));
});

test('Test color power function', t => {
    const c = new Color(1, 2, 3);

    check_equals(t, c.pow(2), new Color(1, 4, 9));
});

test('Test gamma correction', t => {
    const c = new Color(1, 9, 16);

    check_equals(t, c, c.gamma(1.0));

    check_equals(t, c.gamma(2), new Color(1, 3, 4));
});
