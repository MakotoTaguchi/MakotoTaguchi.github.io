'use strict';

function circle(radius) {
    console.assert(typeof radius === 'number' && radius > 0,
        'ˆö”radius‚Í³”‚Å‚È‚¯‚ê‚Î‚¢‚¯‚Ü‚¹‚ñB');
    return radius * radius * Math.PI;
}

console.log(circle(-5));
