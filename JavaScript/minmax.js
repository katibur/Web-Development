// max number from numbers
function max(num1, num2, num3) {
    const maximum = Math.max(num1, num2, num3);
    return maximum;
}
const res = max(66, 97, 88);
console.log(res);

// min number from numbers
function min(num1, num2, num3) {
    const maximum = Math.min(num1, num2, num3);
    return maximum;
}
const res1 = min(66, 97, 88);
console.log(res1);



// max number from a array
function maxInArray(numbers) {
    let largestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largestNumber) {
            largestNumber = element;
        }
    }
    return largestNumber;
}
const num = [166, 85, 477, 198, 152];
const maxNumber = maxInArray(num);
console.log(maxNumber);


// min number from a array
function minInArray(numbers1) {
    let lowestNumber = numbers1[0];
    for (let j = 0; j < numbers1.length; j++) {
        const index = j;
        const element = numbers1[index];
        if (element < lowestNumber) {
            lowestNumber = element;
        }
    }
    return lowestNumber;
}
const numberGiven = [166, 85, 477, 198, 152, 20];
const minNumber = minInArray(numberGiven);
console.log(minNumber);