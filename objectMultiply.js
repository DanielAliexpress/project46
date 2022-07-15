"use strict";

let obj = {
    width: 2,
    height: 3,
    title: 'string'
    };

    function multiplyNumeric(obj) {
        for (let key in obj) {
        if (typeof obj[key] == 'number') {
        obj[key] *= 2;
        }
        }
        }

multiplyNumeric(obj);
console.log(obj);


  