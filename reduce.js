// Reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const numbers = [99, 25, 33, 46];
let minimum  = numbers[0];

/* Ezt fordítom le reduce-ra: létrehozunk egy függvényt, ami egy logikát tartalmaz, ami a mi esetünkben a minimum
for (let i = 0; i < numbers.length; i++) {
    if (minimum > numbers[i]) {
        minimum = numbers[i];
    };
    
}
console.log(minimum);
*/

const reducer = (prev, curr) => Math.min(prev, curr);
minimum = numbers.reduce(reducer);
console.log(minimum);




const names = ['Alice', 'Bob', 'Tiff', 'Ubul', 'Alice', 'Ubul'];
const countNames = {};

for (let i = 0; i < names.length; i++) {
    if (countNames[names[i]]) {
        countNames[names[i]] ++; //ahogy végig iterálunk a tömbön, új kucslot hozunk létre. a names[i]=Alice vagy Bob. Ha van kulcs, hozzáadok egyet
    } else {
        countNames[names[i]] = 1; //ha nincs kulcs, létrehoz egy új kulcsot neki
    }
}
console.log(countNames);


let countedNames = names.reduce(function(allNames, name) {
    if(name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
console.log(countedNames);