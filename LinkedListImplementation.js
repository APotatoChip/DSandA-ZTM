// myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// };

class NewNode {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        const arr = [];
        let currNode = this.head;
        while (currNode !== null) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        return arr;
    }

    append(value) {
        const newNode = new NewNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    };

    prepend(value) {

        const newNode = new NewNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        const newNode = new NewNode(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();

    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currNode = this.head;
        while (counter != index) {
            currNode = currNode.next;
            counter++;
        }
        return currNode;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(2);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(0, 13);
myLinkedList.insert(110, 47);
myLinkedList.remove(2);
console.log(myLinkedList.printList());