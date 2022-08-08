var friendAge = [34, 45, 456, 2, 7];
var friendName = ['sakib', 'moti', 'akash', 'sabbir'];
console.log(friendAge);
console.log(friendName.length);


// get element by index number
// console.log(friendName[3]);
var element = friendName[2];
console.log(element);


// set element by index number 
friendAge[2] = 50;
console.log(friendAge);


// find index of an element 
var positionIndex = friendAge.indexOf(2);
console.log(positionIndex);




// push-pop 
var numbers = [2, 4, 7, 8, 10, 15412, 15, 4496, 41];

// push to the end
// numbers.push(66);
console.log(numbers);

// pop from the end
// numbers.pop();
// console.log(numbers);
// elements = numbers.pop();
// console.log(elements);

// push in a specific index
//splice(index number,number of elements want to delete from that index number,elements want to add)
numbers.splice(5, 3, 700);
console.log(numbers);



/* // slice to delete elements between 2 index
var num = [12, 21, 41, 595, 58, 54, 5454, 4, 45];
let result = num.slice(2, 5);
console.log(result); */

