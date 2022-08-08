console.log('problem one');
var fruits = ['Apple', 'Banana', 'orange'];
console.log(fruits);
var firstPosition = fruits.shift();
console.log(firstPosition);
console.log(fruits);
var firstPlace = fruits.unshift('apple');
console.log(firstPlace);
console.log(fruits);
var position = fruits.indexOf('Banana');
console.log(position);
fruits.splice(2, 1, 'watermelon');
console.log(fruits);


console.log('problem two');
var myResult = 85;
var tomResult = 66;
var janeResult = 95;
var peterResult = 56;
var johnResult = 40;

if (myResult >= 80) {
    console.log('i got A+');
}
else if (myResult >= 60) {
    console.log('i got B+');
}
else if (myResult >= 50) {
    console.log('i got C+');
}
else if (myResult >= 40) {
    console.log('i got D+');
}
else if (myResult <= 39) {
    console.log('i got F');
}
else {
    console.log('result not found');
}




console.log('Problem Three');
var num1 = 133;
var num2 = 789;
var num3 = 4005;
if (num1 > num2 && num1 > num3) {
    console.log('num1 is the largest');
}
else if (num2 > num3 && num2 > num1) {
    console.log('num2 is the largest');
}
else {
    console.log('num3 is the largest');
}



console.log('problem four');
var tri1 = 9;
var tri2 = 8;
var tri3 = 9;
if (tri1 === tri2 || tri1 === tri3 || tri2 === tri3) {
    console.log('this triangle is isosceles');
}
else {
    console.log('this is not isosceles');
}