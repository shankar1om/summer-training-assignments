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
    insertNode(value,k){
        let Q=this.head;
        let count = 2;
        if(k==1 && Q==null){
            this.head = new createNode();
            this.head.val=value;
            console.log(`"Added value is ${value} on ${k}th location"`);
            return;
        }
        else if(Q!=null && k==1){
            this.head=new createNode();
            this.head.val=value;
            this.head.next=Q;
            console.log(`"Added value is ${value} on ${k}th location"`);
            return;
        }
        else if(Q==null && k>1){
            console.log("No position availble");
            return;
        }
        let P=Q;
        Q=Q.next;
        while(Q!=null){
            if(count==k){
                P.next=new createNode();
                P.next.val=value;
                P.next.next=Q;
                console.log(`"Added value is ${value} on ${k}th location"`)
                return;
            }
            Q=Q.next;
            P=P.next;
            count++;
        }
        if(count != k){
            console.log("k is out of bound");
        }else{
            P.next=new createNode();
            P.next.val=value;
            console.log(`"Added value is ${value} on ${k}th location"`)
        }
    }
}

let myLinkedList = new linkedList();
const nodes = [10,20,30,40,50,60];
for(let node of nodes){
    myLinkedList.add(node);
}
myLinkedList.insertNode(70,7);
myLinkedList.insertNode(35,4);
myLinkedList.printList();