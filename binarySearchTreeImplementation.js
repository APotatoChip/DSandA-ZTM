class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let currNode = this.root;
            while (currNode !== null) {
                if (value < currNode.value) {
                    if (!currNode.left) {
                        currNode.left = newNode;
                        return;
                    }
                    currNode = currNode.left;

                } else {
                    if (!currNode.rigth) {
                        currNode.rigth = newNode;
                        return;
                    }
                    currNode = currNode.rigth;

                }
            }

        }
    }

    lookup(value) {
        let currNode = this.root;
        if (currNode == null) {
            console.log("nope");
            return null;
        }
        while (currNode && currNode.value !== value) {

            if (currNode.value > value) {
                currNode = currNode.left;
            }
            currNode = currNode.rigth;

        }
        console.log(currNode.value);
        return currNode;
        //return node or null
    }

    //remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(15);
tree.lookup(7);
console.log(JSON.stringify(traverse(tree.root)));
//      9
//  4      20
// 1 6   15 170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.rigth = node.rigth === null ? null : traverse(node.rigth);
    return tree;
}