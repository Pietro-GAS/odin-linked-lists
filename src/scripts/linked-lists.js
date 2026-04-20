class Node {
    constructor(value=null, next=null) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        // Add a node to the end of the list
        const node = new Node(value);
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size ++;
    }

    prepend(value) {
        // Add a node to the start of the list
        const node = new Node(value, this.head);
        this.head = node;
        this.size ++;
    }

    getHead() {
        return this.head === null ? undefined : this.head
    }

    getTail() {
        return this.tail === null ? undefined : this.tail
    }

    getSize() {
        return this.size
    }

    at(index) {
        // Return the value of the node at the given index
        let node = this.head;
        for (let i = 1; i <= index; i++) {
            node = node.next;
        }
        return node;
    }

    pop() {
        // Remove the head and return its value
        if (this.head === null) {
            return undefined
        } else {
            let oldHead = this.head;
            this.head = this.head.next;
            this.size --;
            return oldHead
        }
    }

    contains(value) {
        // Checks whether the given value is in the list
        if (this.head === null) {
            return false
        } else {
            let node = this.head;
            for (let i = 0; i < this.size; i++) {
                if (node.value === value) {
                    return true
                } else {
                    node = node.next;
                }
            }
            return false
        }
    }

    findIndex(value) {
        // Find the (first) index of a given value
        if (!this.contains(value)) {
            return -1
        } else {
            let node = this.head;
            for (let i = 0; i < this.size; i++) {
                if (node.value === value) {
                    return i
                } else {
                    node = node.next
                }
            }
        }
    }

    toString() {
        // Convert the list to a string
        let string = "";
        if (this.head === null) {
            return string
        } else {
            let node = this.head;
            let separator = ` -> `;
            string = `(${node.value})${separator}`
            for (let i = 0; i < this.size; i++) {
                if (node !== this.tail) {
                    string += `(${node.next.value})${separator}`;
                    node = node.next;
                } else {
                    string += `${node.next}`;
                }
            }
            return string
        }
    }
}