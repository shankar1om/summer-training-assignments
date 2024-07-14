class createNode {
    constructor(value, next = null) {
        this.val = value;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        let current = this.head;
        if (this.head == null) {
            this.head = new createNode(value);
        }
        else {
            while (current.next != null) {
                current = current.next;
            }
            current.next = new createNode(value);
        }
    }
    removeNode(value) {
        let current = this.head;
        let prev = null;
        if (value == this.head.val) {
            current = current.next;
            this.head = current;
            return;
        }
        while (current != null) {
            if (current.val == value) {
                console.log(`"deleted node is ${current.val}"`)
                prev.next = current.next;
                current = prev.next;
                return;
            }
            else {
                prev = current;
                current = current.next;
            }
        }
        console.log("value of this node is not present")
    }
    printList() {
        let current = this.head;
        while (current != null) {
            console.log(current.val);
            current = current.next;
        }
    }
}

let myLinkedList = new linkedList();
const nodes = [10, 20, 30, 40, 50, 60];
for (let node of nodes) {
    myLinkedList.add(node);
}
myLinkedList.removeNode(40);
myLinkedList.printList();