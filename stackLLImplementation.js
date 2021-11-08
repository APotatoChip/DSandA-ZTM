class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        console.log(this.top);
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;

        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const unwantedNode = this.top;
        const next = unwantedNode.next;
        this.top = next;
    }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek();
myStack.pop();
myStack.peek();