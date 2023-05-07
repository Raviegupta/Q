// linked list
// What ?
// How to build ?
// functions ?

// array =>           we fill values sequentially  => sequential memeory
// stack => LIFO   => we fill values sequentially  => sequential memeory
// queue => FIFO   => we fill values sequentially  => sequential memeory

// linked list     => we fill data here and there but also want to linked these data(say node) to each other 
//                 => here, we do 2 things, => 1) store data 
//                                          => 2) store reference of next data(node) or null  => we say next


//        N1                                 N2                          N3
//    ------------                      ------------                ------------
//   | 2  | next  |                    | 4  | next  |              | 6  | next  |
//    ------------                      ------------                ------------ 
//      ref239                             ref582                     ref 759

// N1.data = 2; 
// N1.next = reference of N2;

// N1.next.data = 4;
// N2.next.data = 6;


// ----------------------------------------------------------------------------------------
function newLLNode(value) {
    this.data = value;
    this.next = null;
    return this;
}
// const n1 = newLLNode(2);
// console.log(n1.data);
// const n2 = newLLNode(4);
// console.log(n1.data);
// console.log(n2.data);
// const n3 = newLLNode(6);
// console.log(n1.data);
// console.log(n2.data);
// console.log(n3.data);

// using new keyword to avoid above issues.
// const n1 = new newLLNode(2);
// console.log(n1.data);
// const n2 = new newLLNode(4);
// console.log(n1.data);
// console.log(n2.data);
// const n3 = new newLLNode(6);
// console.log(n1.data);
// console.log(n2.data);
// console.log(n3.data);

// ----------------------------------------------------------------------------------------
const n1 = new newLLNode(2);
const n2 = new newLLNode(4);
n1.next = n2;
console.log(n1.data);
console.log(n1.next);
console.log(n1.next.data);
console.log(n1);




