class createNode{
    constructor(value,next=null){
        this.val=value;
        this.next=next;
    }
}

class linkedList{
    constructor(){
        this.head=null;
    }
    add(value){
        let current = this.head;
        if(this.head==null){
            this.head=new createNode(value);
        }
        else{
            while(current.next != null){
                current=current.next;
            }
            current.next=new createNode(value);
        }
    }
    printList(){
        let current=this.head;
        while(current!= null){
            console.log(current.val);
            current=current.next;
        }
    }
}

let myLinkedList = new linkedList();
const nodes = [10,20,30,40,50,60];
for(let node of nodes){
    myLinkedList.add(node);
}
myLinkedList.printList();