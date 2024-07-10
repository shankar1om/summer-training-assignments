class createNode{
    constructor(value,sum,next=null){
        this.val=value;
        this.next=next;
        this.sum=sum;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.totalSum=0;
        this.idx=0;
        this.kthNode=0;
    }
      add(value,k){
        this.totalSum += value;
        let current = this.head;
        if(this.head==null){
            this.head=new createNode(value,this.totalSum);
            this.idx++;
        }
        else{
            while(current.next != null){
                current=current.next;
            }
            current.next=new createNode(value,this.totalSum);
            this.idx++;
        }
        if(this.idx==k){
            current = current.next;
            if(current != null) {
               this.kthNode=current;
            }
        }
    }
    sumOfKthNode(){
        if(this.kthNode !== 0){
            console.log("sum till kth node is :" + this.kthNode.sum)
        }
        else{
            console.log("k is higher than node availble");
        }
    }
    removeNode(value){
        let current = this.head;
        let prev = null;
        if(value==this.head.val) {
            current = current.next;
            this.head=current;
            return;
        }
        while(current != null){
            if(current .val == value){
                console.log(`"deleted node is ${current.val}"`)
                prev.next = current.next;
                current=prev.next;
                return;
             }
         else{
            prev=current;
            current=current.next;
        }
    }
     console.log("value of this node is not present")
}
    printList(){
        let current=this.head;
        while(current!= null){
            console.log(current.val);
            current=current.next;
        }
    }
    findLength(){
        let fast = this.head;
        let slow = this.head;
        let count = 0;
        if(fast.next==null){
            count++;
            console.log(`"length of linked list is :${count}"`);
            return;
        }
        while(fast != null && fast.next != null){
             slow = slow.next;
             fast=fast.next.next;
            count ++;
           }
           if(fast == null)  console.log(`"length of linked list is :${count*2}"`);
           else{
            console.log(`"length of linked list is :${count*2-1}"`);
        }
    }
}

let myLinkedList = new linkedList();
const nodes = [10,20,30,40,50,60,80,90,100];
for(let node of nodes){
    myLinkedList.add(node,2);
}
myLinkedList.printList();
myLinkedList.sumOfKthNode();
myLinkedList.removeNode(30);
myLinkedList.printList();
myLinkedList.findLength();