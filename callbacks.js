// Callback: arra szolgál, hogy egy függvény nevét egy másik függvény nevének át kell ad
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function



function multiply(callback, a, b) {
    return callback(a, b) * 10;
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

console.log(multiply(add, 2, 3));
console.log(multiply(sub, 2, 3));
