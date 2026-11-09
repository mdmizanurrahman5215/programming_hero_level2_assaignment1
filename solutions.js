"use strict";
function multiplyValue(value, multiplier) {
    return value * (multiplier !== undefined ? multiplier : 2);
}
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
}
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
