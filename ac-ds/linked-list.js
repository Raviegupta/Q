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


// LL is Better in terms of
// Time Complexity
// Space Complexity

// ----------------------------------------------------------------------------------------
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
// ---------------------------------------
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
// ex:-
// const n1 = new newLLNode(2);
// const n2 = new newLLNode(4);
// n1.next = n2;
// console.log(n1.data);
// console.log(n1.next);
// console.log(n1.next.data);
// console.log(n1);

// ----------------------------------------------------------------------------------------
// Head :- keep the reference of node1

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// bulid a linked list
// 1, 3, 5, 7, 9

// head of a linked list is a reference of a first node in LL
let head = null;

function insertIntoLL(node) {
    if(head == null) {
        head = node;
    } else {
        let temp = head;
        while(temp.next != null) {
            temp = temp.next;
        }
        temp.next = node;
    }
}

function getSizeOfLL(head) {

    let size = 0;
    let temp = head;

    while(temp != null) {
        size++;
        temp = temp.next;
    }

    return size;

}

function deleteNode(head, value) {     // delete a node having data = given value // Assume LL has unique values.




}



for(let i = 1; i <= 5; i++) {
    let value = 2*i -1                  // creating a random value
    let node = new newLLNode(value);    // creating a value

    insertIntoLL(node);           // a function that helps us to add node in LL.
}



// console.log(head);





// -----------------------------------------------------------------------------------


