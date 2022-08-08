/* // wheather the element in the string or not
let str = 'my name is katibur rahman sany';
let brr = str.includes('is');
console.log(brr);


// substring like slice
let sus = str.substring(2, 15);
const exist = str.slice(2, 15);
console.log(sus);
console.log(exist); */


/* // conversion to compare strings
let userName = 'KatiburRahman';
let userInput = 'katiburrahman';
console.log(userName.toLocaleLowerCase());
console.log(userInput.toLocaleUpperCase());
console.log(userName.toUpperCase() + userInput.toUpperCase());
if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('valid user');
}
else {
    console.log('invalid user');
} */


/* // search from the string
const myName = 'katibur rahman sany';
const input = 'SANY';
console.log(myName.toLowerCase().includes(input.toLowerCase()));
if (myName.indexOf('sany') !== -1) {
    console.log('match the character');
}
else {
    console.log('can not find any');
}
// starts with
console.log(myName.startsWith('katibur'));
// ends with
const fileName = 'sany.pdf';
fileName.endsWith('.pdf'); */


/* // divided into parts using split
const givenName = 'katibur rahman .sany katibur rahman .sany katibur rahman .sany';
// divided by gap
const parts = givenName.split(' ');
// divided by (.)
const sentances = givenName.split('.');
// divided by char
const chars = givenName.split('');
console.log(parts);
console.log(sentances);
console.log(chars); */


/* // concatination using join
const lines = ['katibur rahman .sany', 'katibur rahman .sany', 'katibur rahman .sany'];
const newLines = lines.join(':');
console.log(newLines); */


/* // reverse a string word by word
function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}
const givenString = 'i am katibur rahman sany';
const reversedString = reverseString(givenString);
console.log(reversedString); */


/* // reverse a string word by word
function reverseWords(str) {
    const words = str.split(' ');
    const reversedStr = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        reversedStr.push(element);
    }
    // divided by words and shows in an array
    console.log(reversedStr);
    // show the array elements in simple line
    const reversedWords = reversedStr.join(' ');
    return reversedWords;
}
const myString = 'katibur rahman sany';
const result = reverseWords(myString);
console.log(result); */