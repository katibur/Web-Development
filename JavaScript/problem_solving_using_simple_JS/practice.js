/* // p1
const Price = 700;
const givenMoney = 1000;
const returnedMoney = givenMoney - Price;
console.log(returnedMoney); */


/* // p2
const banglaMarks = 95;
const mahtMarks = 97;
const physicsMarks = 85;
const chemistryMarks = 92;
const biologyMarks = 90;
let sum = banglaMarks + mahtMarks + physicsMarks + chemistryMarks + biologyMarks;
let avg = sum / 5;
console.log(avg); */


/* // p3
const firstString = 'i am going to be an';
const secondString = 'awesome web developer';
let combinedString = firstString + ' ' + secondString;
console.log(combinedString); */


/* // p4
const givenNumber = 119;
const remainder = Math.round(givenNumber % 5);
console.log(remainder); */


/* // p5
var price = 33;
var name = 'Shabana';
var boxName = 'Cocola';
var price = 34;
var enumber = -1;
var _$box_78 = 'Monika';
var home_address = "kochu khet";
console.log(price, name, boxName, price, enumber, _$box_78, home_address); */


/* // p6
const givenArray = ['apple', 'banana', 'orange'];
let index = givenArray.indexOf('banana');
console.log(index);
let rep = givenArray.splice(index, 1, 'mango');
console.log(rep);
console.log(givenArray);
let last = givenArray.pop();
console.log(last);
console.log(givenArray);
let lastp = givenArray.push('watermelon');
console.log(lastp);
console.log(givenArray); */


/* // p7
function grade(marks) {
    if (marks >= 80) {
        return 'A';
    }
    else if (marks >= 60) {
        return 'B';
    }
    else if (marks >= 50) {
        return 'C';
    }
    else if (marks >= 40) {
        return 'D';
    }
    else if (marks <= 39) {
        return 'F';
    }
    else {
        console.log('Grade can not be determined');
    }
}
let gradeOfMe = grade(85);
console.log('i got', gradeOfMe, ' grade.');
let gradeOfTom = grade(66);
console.log('Tom got', gradeOfTom, ' grade.');
let gradeOfJane = grade(95);
console.log('Jane got', gradeOfJane, ' grade.');
let gradeOfPeter = grade(56);
console.log('peter got', gradeOfPeter, ' grade');
let gradeOfJohn = grade(40);
console.log('jonh got', gradeOfJohn, ' grade.');
 */



/* // p8
const gienNum1 = 13;
const gienNum2 = 79;
const gienNum3 = 45;
if (gienNum1 > gienNum2 && gienNum1 > gienNum3) {
    console.log('The largest number is: ', gienNum1);
}
else if (gienNum2 > gienNum1 && gienNum2 > gienNum3) {
    console.log('The largest number is: ', gienNum2);
}
else {
    console.log('The largest number is: ', gienNum3);
} */


/* // p9
const firstSide = 9;
const secondSide = 8;
const thirdSide = 9;
if (firstSide === secondSide || secondSide === thirdSide || firstSide === thirdSide) {
    console.log('This is isosceles');
}
else {
    console.log('This is not isosceles');
} */



/* // p28
const numbers = [10, 50, 90, 43, 21, 54, 21, 4, 56, 232];
function make_avg(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;
    }
    let res = sum / numbers.length;

    return res;
}
const totalSum = make_avg(numbers);
let len = numbers.length;
console.log(len);
console.log(totalSum); */