// print the multiplication table of the interger upto a factor of 10 in this form -> n x 1 = n


const table = (num) => {
    for(let i=0; i<=10; i++) {
        console.log(`${num} * ${i} = ${num*i}`)
    }
}
console.log(table(7));