// Filter()
// https://www.w3schools.com/jsref/jsref_filter.asp

const ages = [32, 33, 16, 40];

function testFor() {
    const resultArr = [];
    for (const age of ages) {
        if ( age >= 18) {
            resultArr.push(age);
        }
    }
    return resultArr;
}
console.log(testFor());



const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18
}
console.log(result);
// A checkAdult annyiszor hívódik meg, ahány eleme van a többnek. Üresen nem fog meghívódni.
// Azt szeretnm kiszűrni, hogy ami nem igaz a feltételnek, akkor azt hogyan csinálom.