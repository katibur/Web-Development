// use one portion to run and debug because i used same name in different portion



/* // slice using
const friends = [13, 15, 18, 24, 21, 20, 26, 274, 45];
const partial = friends.slice(2, 5);
console.log(partial);
console.log(friends); */


/* // using splice
const friends = [13, 15, 18, 24, 21, 20, 26, 274, 45];
const partial = friends.splice(2, 5, 01, 02, 03, 04);
console.log(partial);
console.log(friends); */


// remove duplicate elements from an array
const names = ['abul', 'kabul', 'chabul', 'babul', 'ebil', 'abul', 'kabul', 'abul'];
function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const updateNames = removeDuplicate(names);
console.log(updateNames);