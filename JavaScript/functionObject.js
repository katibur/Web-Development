// FUNCTIONS
/*
// function declear
function strFunction() {
    console.log('katibur');
    console.log('rahman');
    console.log('sany');
}
// function call
strFunction();
strFunction();
*/



/*
// function with parms
function bPen(taka) {
    console.log('take it');
    console.log(taka);
}
bPen(500);
*/


/*
// multiple parameter
function numbers(no1, no2, no3) {
    let sum = no1 + no2 + no3;
    console.log(sum);
}
var num1 = 100;
var num2 = 200;
var num3 = 300;
numbers(num1, num2, num3);
 */



/*
// using return in function
function givenTaka(money, money1) {
    var sum = money + money1;
    return sum;
}
var taka1 = 200;
var taka2 = 200;
// we took a var to place the returned things
var totalTaka = givenTaka(taka1, taka2);
console.log(totalTaka);

function product(moneyGiven) {
    var productPrice = 20;
    var quantity = moneyGiven / productPrice;
    return quantity;
}
var total = product(totalTaka);
console.log("you got: ", total, " items");
 */




/*
// call funtion many times and use it
function add(num1, num2, num3) {
    var total = num1 + num2 + num3;
    return total;
}

var sum1 = add(25, 25, 25);
var sum2 = add(50, 50, 50);
var totalSum = sum1 + sum2;
console.log(totalSum);
*/






// OBJECTS
var shoppingCart = {
    glass: 2,
    pen: 5,
    books: 3,
    keyboard: 1,
    mouse: 1,
    shoes: 4,
}
const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);

// see the values and the properties at a time
for (var i = 0; i < keys.length; i++) {
    const propertyName = keys[i];
    const propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// for in loop(to get the values and properties without writing the keys/values)
for (propertyName in shoppingCart) {
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}


// object converted into array
var objectIntoArray = Object.entries(shoppingCart);
console.log(objectIntoArray);