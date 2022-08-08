console.log(555);
// variable
var price = 13;
console.log(price);
console.log(typeof price);

var name = 'sany';
console.log(name);
console.log(typeof name);

var eggPrice = 50;
var coke = 30;
totalPrice = eggPrice + coke;
console.log(totalPrice);
totalPrice += 20;
console.log(totalPrice);

pprice = '50.47';
finalPrice = parseFloat(pprice);
finalPrice += 1;
console.log(finalPrice);
tPrice = parseInt(finalPrice);
console.log(tPrice);


var firstName = 'katibur';
var lastName = 'rahman';
myName = firstName + ' ' + lastName;
console.log(myName);


var isHappy = true;
console.log(typeof isHappy);



var num1 = 0.57;
var num2 = 0.485;
var sum = num1 + num2;
sum = sum.toFixed(3);
// toFixed returns a string;
sum = parseFloat(sum);
console.log(sum);




// practice problem 2
var matheMatics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var sum = matheMatics + biology + chemistry + physics + bangla;
average = sum / 5;
average = average.toFixed(2);
console.log(average);

// practice problem 4
var numGiven = 119;
var numGiven2 = 5;
var result = numGiven % numGiven2;
console.log(result);