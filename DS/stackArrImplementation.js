class Stack {
    constructor() {
        this.arr = [];

    }

    pop() {
        this.arr.pop();

    }

    push(value) {
        this.arr.push(value);
    }

    peek() {
        return this.arr[this.arr.length - 1];

    }

}

const myStack = new Stack();
myStack.push("google");
myStack.push('udemy');
myStack.push("discord");
myStack.peek();
myStack.pop();
myStack.peek();