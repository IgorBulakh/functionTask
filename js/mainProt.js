'use strict';

// alert('hello!');

const mas = [12, 15, 19, 22, 9, 10, 56, 4, 8];

let usMas = Number(prompt('Num'));

let numMas;

for (let i = 0, max = mas.length; i < max; i += 1) {
    if (mas[i] === usMas) {
        console.log(usMas);
        break;
        
    } else {
        
        console.log('NuN');
    }

}
