// Sorting array of objects

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
  { name: "Magnetic", value: 5 },
];

// sort by value
// items.sort((a, b) => a.value - b.value);
// console.log(items);

// ---------------------------------------------------------------------------------------------------------
// sort by name
// items.sort((a,b) => {
//     let nameA = a.name;
//     let nameB = b.name;
//     if(nameA < nameB) {
//         return -1;
//     }
//     if(nameA > nameB) {
//         return 1;
//     }
//     return 0;
// });
// console.log(items);

// ---------------------------------------------------------------------------------------------------------
// first sort by name then by value
items.sort((a,b) => {
    let nameA = a.name;
    let nameB = b.name;
    if(nameA < nameB) {
        return -1;
    }
    if(nameA > nameB) {
        return 1;
    }
    if(nameA == nameB) {
        return (a.value > b.value) ? 1 : -1
    }
    return 0;
});
console.log(items);