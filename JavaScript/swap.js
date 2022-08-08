// swap using another variable(temp)
let first = 5;
let second = 7;
console.log(first, second);
const temp = first;
first = second;
second = temp;
console.log(first, second);


//swap using destructuring
let first1 = 5;
let second1 = 7;
[first1, second1] = [second1, first1];
console.log(first1, second1);