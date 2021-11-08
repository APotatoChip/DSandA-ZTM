class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const prev = this.last;
            prev.next = newNode;
            this.last = newNode;
        }
        this.length++;

    }

    dequeue() {

        if (!this.first) {
            return null;
        }
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            const deNode = this.first;
            this.first = deNode.next;
        }
        this.length--;
    }

}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.enqueue('Samir');
myQueue.peek();
myQueue.dequeue();
myQueue.peek();