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
    counterList(mp) {
        let current = this.head;
        if (this.head == null) return;
        while (current != null) {
            if (mp[current.val]) {
                mp[current.val] += 1;
            }
            else {
                mp[current.val] = 1;
            }
            current = current.next;
        }
    }
    printCounterList(mp) {
        if (Object.keys(mp).length == 0) {
            console.log("No counter is present");
            return;
        }
        let current = this.head;
        while (current != null) {
            if (mp[current.val]) {
                console.log(`"the counter of node with ${current.val} is : ${mp[current.val]}"`)
                mp[current.val] = undefined;
            }
            current = current.next;
        }
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
const nodes = [10, 20, 20, 30, 10, 40, 60, 50, 20, 50, 60];
for (let node of nodes) {
    myLinkedList.add(node);
}
myLinkedList.printList();
let mp = {};
myLinkedList.counterList(mp);
myLinkedList.printCounterList(mp);