'use strict';

function circle(radius) {
    console.assert(typeof radius === 'number' && radius > 0,
        '����radius�͐����łȂ���΂����܂���B');
    return radius * radius * Math.PI;
}

console.log(circle(-5));
