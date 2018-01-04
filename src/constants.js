'use strict';

// Often we need to create a minimal gap betwen objects,
// for example: we need to emit secondary ray not from the surface of object but from
// point which is close to it. In other case ray will be blocked by the surface.
export const K = 1e-9;


// Used in float comparison
export const EPSILON = 1e-10;
