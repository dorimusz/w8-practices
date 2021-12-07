// Map - minden esetben új objektumot hoz létre, az újat nem piszkálja
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const array1 = [2, 4, 8, 14];
const map1 = array1.map(x => x*3);
// arrow function, az x a zárójel elején az egy paraméter, és ha egy van, elhagyható a zárójel, amúgy több esetén nyilván kell (21. sor)
//a nyíl utáni sor azonnal returnol, ha egysoros
console.log(map1);



const array2 = [2, 4, 8, 14];
const map2 = array2.map(myFunction);

function myFunction(num) {
    return num * 5;
}
console.log(map2);




const array3 = [2, 4, 8, 14];
const map3 = array3.map((x, i) => x*i);
console.log(map3);




let array4 = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
]
//A key és a value is kulcs.

//Az array4 egy tömb, amiben pbjektumok vannak. A példa az, hogy hogyan tudom átalakítani, hogy az objektumokat egyesével manipulálom
let reformattedArray = array4.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value*10; //Itt a kulcsok értékeivel dolgozunk.
    return rObj
})
//Az objektumok a kulcsban automatikusan stringgé konvertálódnak
console.log(reformattedArray);




//Ha objectet küldünk be, objectet kapunk vissza
var myObject = {'a': 1, 'b':2, 'c':3};
Object.keys(myObject).map(function(key, index) {
    myObject[key] *= 2;
});
console.log(myObject);