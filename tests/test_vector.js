'use strict';

import {Vector, VectorError} from '../vector.js';
import {test} from 'ava';

function check_equals(t, v1, v2) {
    t.true(v1.equals(v2));
}

test('Test vector comparing', t => {
    let v = new Vector(1, 2, 3);

    check_equals(t, v, v);
    check_equals(t, v, new Vector(1, 2, 3));

    t.false(v.equals(new Vector(0, 2, 3)));
    t.false(v.equals(new Vector(1, 0, 3)));
    t.false(v.equals(new Vector(1, 2, 0)));
});

test('Test vector addition', t => {
    const v1 = new Vector(1, 2, 3);
    const v2 = new Vector(4, 5, 6);

    const result = v1.add(v2);

    check_equals(t, result, new Vector(5, 7, 9));

    // Test that operands are unchanged
    t.true(v1.equals(new Vector(1, 2, 3)));
    t.true(v2.equals(new Vector(4, 5, 6)));
});

test('Test vector subtraction', t => {
    const v1 = new Vector(1, 2, 3);
    const v2 = new Vector(3, 2, 1);

    const result = v1.sub(v2);

    check_equals(t, result, new Vector(-2, 0, 2));

    // Test that operands are unchanged
    t.true(v1.equals(new Vector(1, 2, 3)));
    t.true(v2.equals(new Vector(3, 2, 1)));
});

test('Test vector multiplication (by scalar)', t => {
    const v1 = new Vector(1, 2, 3);

    const result = v1.mul(10);

    check_equals(t, result, new Vector(10, 20, 30));

    // Test that operands are unchanged
    t.true(v1.equals(new Vector(1, 2, 3)));
});

test('Test vector multiplication (by vector)', t => {
    const v1 = new Vector(1, 2, 3);
    const v2 = new Vector(5, 7, 11);

    const result = v1.mul(v2);

    check_equals(t, result, new Vector(5, 14, 33));

    // Test that operands are unchanged
    t.true(v1.equals(new Vector(1, 2, 3)));
    t.true(v2.equals(new Vector(5, 7, 11)));
});

test('Test vector cross product', t => {
    const v1 = new Vector(1, 2, 3);
    const v2 = new Vector(3, 2, 1);

    const result = v1.cross(v2);

    check_equals(t, result, new Vector(-4, 8, -4));

    t.true(v1.cross(v1).equals(new Vector(0, 0, 0)));

    // Test that operands are unchanged
//    t.true(v1.equals(new Vector(1, 2, 3)));
 //   t.true(v2.equals(new Vector(3, 2, 1)));
});

test('Test vector multiplication (invalid operand)', t => {
    const v1 = new Vector(1, 2, 3);

    t.throws(() => {
        v1.mul('3');
    }, VectorError);
});

test('Test vectors dot product', t => {
    const v1 = new Vector(1, 2, 3);
    const v2 = new Vector(5, 7, 11);

    const result = v1.dot(v2);

    t.is(result, 5 + 14 + 33);

    // Test that operands are unchanged
    t.true(v1.equals(new Vector(1, 2, 3)));
    t.true(v2.equals(new Vector(5, 7, 11)));
});


test('Test vectors negation operation', t => {
    const v1 = new Vector(1, 2, 3);

    check_equals(t, v1.neg(), new Vector(-1, -2, -3));
});

test('Test vectors length calculation', t => {
    t.is(new Vector(3,4,0).length(), 5);
    t.is(new Vector(0,3,4).length(), 5);
});

test('Test vectors squared length calculation', t => {
    t.is(new Vector(3,4,0).length2(), 25);
    t.is(new Vector(0,3,4).length2(), 25);
});

test('Test vectors normalize operation', t => {
    const v1 = new Vector(100, 200, 300);
    const v2 = new Vector(1000, 2000, 3000);

    t.is(v1.normalize().length(), 1);

    check_equals(t, v1.normalize(), v2.normalize())
});
