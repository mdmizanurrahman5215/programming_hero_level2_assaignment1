"use strict";
function multiplyValue(value, multiplier) {
    return value * (multiplier !== undefined ? multiplier : 2);
}
// multiplyValue(10);
// multiplyValue(10, 5);
// multiplyValue(7, 0);
console.log(multiplyValue(10)); // Output: 20
console.log(multiplyValue(10, 5)); // Output: 20
console.log(multiplyValue(10, 0)); // Output: 20
