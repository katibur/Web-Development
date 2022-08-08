const country = 'bangladesh';
const age = 52;
const isIndependent = true;
const friend = { id: 15, name: 'agun', age: 15 };
const ages = [13, 15, 17, 20, 24, 25, 20];
function sum(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(Array.isArray(ages));
console.log(ages.includes(21));
console.log(ages.indexOf(20));
console.log(typeof sum);

const newAges = [13, 14, 15, 20];
const allAges = ages.concat(newAges);
console.log(allAges);