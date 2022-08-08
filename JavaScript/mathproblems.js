/* // height calculator
function heightCalculator(inches) {
    const feet = inches / 12;
    return feet;
}
const dadaInches = 174;
const dadaFeet = heightCalculator(dadaInches);
const DH = dadaFeet.toFixed(2);
console.log('dadar height: ', DH);
const nanaInches = 154;
const nanaFeet = heightCalculator(nanaInches);
const NH = nanaFeet.toFixed(2);
console.log('nanar height: ', NH); */


/* // even or odd
function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
var firstNumber = isEven(98);
console.log(firstNumber);
var secondNumber = isEven(75);
console.log(secondNumber); */

/* // leap year
function isLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return 'yes'
    }
    else {
        return 'no'
    }
}
var leapyear = isLeapYear(1952);
console.log(leapyear);
var leapyear1 = isLeapYear(1951);
console.log(leapyear1);
var leapyear2 = isLeapYear(1900);
console.log(leapyear2);
 */

/* //Odd/Even num sum/Total array sum
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        sum = sum + element;
        console.log(index, element, sum);
    }
    console.log('sum of the array: ', sum);
    return sum;
}
var myNumbers = [12, 45, 85, 13, 985, 84, 65, 97];
getSumOfAnArray(myNumbers);

function isOddNumbers(numbers) {
    const oddNumbers = [];
    let sum1 = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        if (element % 2 == 0) {
            console.log(index, element);
            oddNumbers.push(element);
            sum1 = sum1 + element;
        }
    }
    console.log('sum of the odd number:', sum1);
    return oddNumbers;
}
const odd = isOddNumbers(myNumbers);
console.log(odd); */


/* // factorial of a number using funtion and a for loop
function factorial(number) {
    let res = 1;
    for (var i = 1; i <= number; i++) {
        res = res * i;
    }
    return res;
}
const numberGiven = factorial(9);
console.log(numberGiven); */


/* // factorial in reverse way
function factorial(number) {
    let res = 1;
    for (var i = number; i >= 1; i--) {
        console.log(i);
        res = res * i;
    }
    return res;
}
const num = 5;
const fact = factorial(num);
console.log('Factorial of ', num, 'is:', fact); */


/* // fibonacci series using function
function fiboFun() {
    const fibo = [0, 1];
    for (let i = 2; i <= 15; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboRes = fiboFun();
console.log(fiboRes);

// fibonacci series in a normal way
const fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */