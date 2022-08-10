/*------
 problem - 01
convert a radian angle to degree angle 
-----*/
function radianToDegree(radian) {
    const radianType = typeof radian;
    if (radianType == "number") {
        let degree = radian * (180 / Math.PI);
        return degree.toFixed(2);
    }
    else {
        return 'invalid input type';
    }
}
console.log(radianToDegree(199));



/*------
 problem - 02
check wheather the file is in javascript or not 
------*/
function isJavaScriptFile(String) {
    let stringType = typeof String;
    if (stringType === 'string') {
        if (String.endsWith('.js')) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'invalid input type';
    }
}
console.log(isJavaScriptFile('index.js'));



/* -------
problem - 03
calculate the total cost of oil price
--------  */
function oilPrice(diselQuantity, patrolQuantity, octenQuantity) {
    if (typeof diselQuantity === 'number' && typeof patrolQuantity === 'number' && typeof octenQuantity === 'number') {

        const perLiterDisel = 114;
        const perLiterPatrol = 130;
        const perLiterOcten = 135;

        let diselPrice = diselQuantity * perLiterDisel;
        let patrolPrice = patrolQuantity * perLiterPatrol;
        let octenPrice = octenQuantity * perLiterOcten;

        let totalPrice = diselPrice + patrolPrice + octenPrice;

        return totalPrice;
    }
    else {
        return 'invalid input type';
    }
}
console.log(oilPrice(1, 0, 2));



/* -------
problem - 04
calculate the public bus fare for some people after fulfilling the BUS and MICROBUS
--------*/
function publicBusFare(passengerQuantity) {
    if (typeof passengerQuantity === 'number') {

        const perBus = 50;
        const perMicroBus = 11;

        const publicBusFarePerPassenger = 250;

        let extraAfterBus = passengerQuantity % perBus;
        let extraAfterMicro = extraAfterBus % perMicroBus;

        if (extraAfterBus === 0 && extraAfterMicro === 0) {
            return '0';
        }
        else {
            let totalFare = extraAfterMicro * publicBusFarePerPassenger;
            return totalFare;
        }
    }
    else {
        return 'Invalid input type';
    }
}
console.log(publicBusFare(235));



/*------
 problem - 05
findout wheather those are bestfriends or not
------- */
function isBestFriend(friend1, friend2) {
    if (typeof friend1.name === 'string' && typeof friend1.friend === 'string' && typeof friend2.name === 'string' && typeof friend2.friend === 'string') {

        let friend1Name = friend1.name.toUpperCase();
        let friend1Friend = friend1.friend.toUpperCase();
        let friend2Name = friend2.name.toUpperCase();
        let friend2Friend = friend2.friend.toUpperCase();

        if (friend1Name === friend2Friend && friend2Name === friend1Friend) {
            return true;
        }
        else {
            return false;
        }

    }
    else {
        return 'Invalid input type';
    }
}
const friend1 = { name: 'doe', friend: 'alex' };
const friend2 = { name: 'john', friend: 'doe' };
console.log(isBestFriend(friend1, friend2));
