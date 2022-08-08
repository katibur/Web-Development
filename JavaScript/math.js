// to the power(pow)
const result = Math.pow(2, 2);
console.log(result);


// absolute value(denying the minus)
const num1 = 25;
const num2 = 45;
const res = Math.abs(num1 - num2);
if (res < 5) {
    console.log('come close');
}
else {
    console.log('go away');
}


// getting a value without fraction using round(celling and floor)
const fraction = Math.round(num2 / num1);
console.log(fraction);
// celing and flooring
console.log(Math.ceil(2.00001));
console.log(Math.floor(2.999999));


// having a random number using random(uses psudo to give number)
console.log(Math.round(Math.random() * 100)); //random number from 1-100