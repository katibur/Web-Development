function woodCalculator(tableQuantity, chairQuantity, bedQuantity) {
    const perTable = 4;
    const perChair = 6;
    const perBed = 8;

    const table = tableQuantity * perTable;
    const chair = chairQuantity * perChair;
    const bed = bedQuantity * perBed;
    console.log('table:', table, 'chair:', chair, 'bed:', bed);

    const totalWood = table + chair + bed;
    return totalWood;
}
const totalWood = woodCalculator(3, 5, 7);
console.log('total wood required:', totalWood);