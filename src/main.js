import { LinkedList } from "./scripts/linked-lists.js";

const list = new LinkedList();

let head = list.getHead();
let tail = list.getTail();
//console.log(`head value: ${head.value}`);
//console.log(`head next: ${head.next}`);
console.log(`size: ${list.size}\n`);

list.append("dog");
head = list.getHead();
tail = list.getTail();
console.log(`head value: ${head.value}`);
console.log(`head next: ${head.next}`);
console.log(`tail value: ${tail.value}`);
console.log(`tail next: ${tail.next}`);
console.log(`size: ${list.size}\n`);

list.append("cat");
head = list.getHead();
tail = list.getTail();
console.log(`head value: ${head.value}`);
console.log(`head next: ${head.next.value}`);
console.log(`tail value: ${tail.value}`);
console.log(`tail next: ${tail.next}`);
console.log(`size: ${list.size}\n`);

list.prepend("mouse");
head = list.getHead();
tail = list.getTail();
console.log(`head value: ${head.value}`);
console.log(`head next: ${head.next.value}`);
console.log(`tail value: ${tail.value}`);
console.log(`tail next: ${tail.next}`);
console.log(`size: ${list.size}\n`);

let indexZero = list.at(0);
let indexOne = list.at(1);
let indexTwo = list.at(2);
console.log(`at 0: ${indexZero.value}`);
console.log(`at 1: ${indexOne.value}`);
console.log(`at 2: ${indexTwo.value}`);

let oldHead = list.pop();
console.log(`old head: ${oldHead.value}`);
console.log(`new head: ${list.getHead().value}`);
console.log(`size: ${list.size}`)