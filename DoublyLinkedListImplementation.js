class NewNode {
    constructor(value) {
        this.value = value,
            this.previous = null,
            this.next = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            previous: null,
            next: null
        }
        this.tail = this.head;
        this.length = 1;

    }

    append(value) {
        let newNode = new NewNode(value);
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        let newNode = new NewNode(value);
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

    }

    insert(index, value) {
        const newNode = new NewNode(value);
        let leader = this.traverseToIndex(index - 1);
        let pointerHolder = leader.next;
        leader.next = newNode;
        newNode.previous = leader;
        newNode.next = pointerHolder;
        pointerHolder.previous = newNode;
        this.length++;

    }

    remove(index) {
        let unwantedNode = this.traverseToIndex(index);
        let leader = unwantedNode.previous;
        let follower = unwantedNode.next;
        leader.next = follower;
        follower.previous = leader;
        this.length--;
    }

    traverseToIndex(index) {
        let count = 0;
        let currNode = this.head;
        while (count != index) {
            currNode = currNode.next;
            count++;
        }
        return currNode;

    }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(4);
myDoublyLinkedList.append(12);
myDoublyLinkedList.prepend(7);
myDoublyLinkedList.insert(2, 13);
myDoublyLinkedList.remove(3);
console.log(myDoublyLinkedList);