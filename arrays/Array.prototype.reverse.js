// implement Array.prototype.reverse() :-

const orders = ["panner pizza", "cold drink", "chips", 1000];
// orders.reverse();
console.log(orders);

const reverse = (arr) => {
    let revArr = [], j = 0;
    for(let i = arr.length-1; i >= 0; i--) {
        revArr[j] = arr[i];
        j++;
    }
    return revArr;
}
console.log(reverse(orders));
