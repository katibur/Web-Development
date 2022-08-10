// cheapest phone from objects of an array
const phones = [
    { name: 'nokia', camera: 44, storage: 32, color: 'black', price: 45000 },
    { name: 'HTC', camera: 25, storage: 332, color: 'white', price: 50000 },
    { name: 'Xioami', camera: 100, storage: 232, color: 'blue', price: 65000 },
    { name: 'Oppo', camera: 62, storage: 132, color: 'pink', price: 35000 },
    { name: 'Iphone', camera: 12, storage: 532, color: 'golden', price: 145000 }
];
function cheapest(phones) {
    let cheapestPhones = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapestPhones.price) {
            cheapestPhones = phone;
        }
    }
    return cheapestPhones;
}
const cheapestPhone = cheapest(phones);
console.log(cheapestPhone);


// shopping cart using the properties of objects of an array
const shoppingCart = [
    { name: 'pant', price: 1200, color: 'black', quantity: 5 },
    { name: 'shirt', price: 2200, color: 'skyblue', quantity: 7 },
    { name: 'panjabi', price: 3500, color: 'white', quantity: 3 }
];
function cost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const totalPrice = product.price * product.quantity;
        sum = sum + totalPrice;
    }
    return sum;
}
const expense = cost(shoppingCart);
console.log(expense);


// multi-layer discount calculation
function ticketPrice(ticketQuantity) {
    const first100price = 100;
    const second100price = 90;
    const third100price = 70;
    if (ticketQuantity <= 100) {
        const total = first100price * ticketQuantity;
        return total;
    }
    else if (ticketQuantity <= 200) {
        const first100 = first100price * 100;
        const rest = ticketQuantity - 100;
        const restPrice = rest * second100price;
        const total = first100 + restPrice;
        return total;
    }
    else {
        const first100 = first100price * 100;
        const second100 = second100price * 100;
        const rest = ticketQuantity - 200;
        const restPrice = rest * third100price;
        const total = first100 + second100 + restPrice;
        return total;
    }
}
const ticktes = ticketPrice(270);
console.log(ticktes);


// validation of unexpected function
function add(num1, num2) {
    const add = num1 + num2;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return ('please enter a number');
    }
    return add;
}
const numbers = add(12, '45');
console.log(numbers);