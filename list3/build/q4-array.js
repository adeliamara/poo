"use strict";
function joinArray(array, sep = '-') {
    let newString = '';
    array.forEach((element, index) => {
        if (index == array.length - 1) {
            newString += String(element);
            return newString;
        }
        newString += String(element) + sep;
    });
    return newString;
}
const elements = [2, 4, 5, 6, 7, 8];
console.log(joinArray(elements));
