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
        let node = this.head;
        for (let i = 1; i <= index; i++) {
            node = node.next;
        }
        return node;
    }

    pop() {
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
        //
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
}