import { LinkedList } from "./scripts/linked-lists.js";

const list = new LinkedList();

let head = list.getHead();
let tail = list.getTail();
//console.log(`head value: ${head.value}`);
//console.log(`head next: ${head.next}`);
console.log(`contains cat? ${list.contains("cat")}`);
console.log(`index of cat: ${list.findIndex("cat")}`);
console.log(`list: ${list.toString()}`);
console.log(`size: ${list.size}\n`);

list.append("dog");
head = list.getHead();
tail = list.getTail();
console.log(`head value: ${head.value}`);
console.log(`head next: ${head.next}`);
console.log(`tail value: ${tail.value}`);
console.log(`tail next: ${tail.next}`);
console.log(`contains cat? ${list.contains("cat")}`);
console.log(`index of cat: ${list.findIndex("cat")}`);
console.log(`list: ${list.toString()}`);
console.log(`size: ${list.size}\n`);

list.append("cat");
head = list.getHead();
tail = list.getTail();
console.log(`head value: ${head.value}`);
console.log(`head next: ${head.next.value}`);
console.log(`tail value: ${tail.value}`);
console.log(`tail next: ${tail.next}`);
console.log(`contains cat? ${list.contains("cat")}`);
console.log(`index of cat: ${list.findIndex("cat")}`);
console.log(`list: ${list.toString()}`);
console.log(`size: ${list.size}\n`);

list.prepend("mouse");
head = list.getHead();
tail = list.getTail();
console.log(`head value: ${head.value}`);
console.log(`head next: ${head.next.value}`);
console.log(`tail value: ${tail.value}`);
console.log(`tail next: ${tail.next}`);
console.log(`contains cat? ${list.contains("cat")}`);
console.log(`index of cat: ${list.findIndex("cat")}`);
console.log(`list: ${list.toString()}`);
console.log(`size: ${list.size}\n`);

let indexZero = list.at(0);
let indexOne = list.at(1);
let indexTwo = list.at(2);
console.log(`at 0: ${indexZero.value}`);
console.log(`at 1: ${indexOne.value}`);
console.log(`at 2: ${indexTwo.value}`);
console.log(`index of mouse: ${list.findIndex("mouse")}`);
console.log(`index of dog: ${list.findIndex("dog")}`);
console.log(`index of cat: ${list.findIndex("cat")}\n`);

console.log(`old list: ${list.toString()}`);
let oldHead = list.pop();
console.log(`old head: ${oldHead.value}`);
console.log(`new head: ${list.getHead().value}`);
console.log(`new list: ${list.toString()}`);
console.log(`size: ${list.size}\n`);

list.insertAt(0, "mouse", "elephant");
console.log(`list: ${list.toString()}`);
console.log(`size: ${list.size}\n`);

list.insertAt(2, "lion", "tiger", "parrot");
console.log(`list: ${list.toString()}`);
console.log(`size: ${list.size}\n`);

list.insertAt(7, "whale", "dolphin");
console.log(`list: ${list.toString()}`);
console.log(`size: ${list.size}\n`);

// RangeError: index is less than 0
//list.insertAt(-2, "butterfly");
//console.log(`new list: ${list.toString()}`);
//console.log(`size: ${list.size}\n`);

// RangeError: index is ore than list size
//list.insertAt(100, "frog");
//console.log(`new list: ${list.toString()}`);
//console.log(`size: ${list.size}\n`);

list.removeAt(0);
console.log(`list: ${list.toString()}`);
console.log(`size: ${list.size}\n`);

list.removeAt(1);
console.log(`list: ${list.toString()}`);
console.log(`size: ${list.size}\n`);