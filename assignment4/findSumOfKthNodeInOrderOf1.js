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
}

let myLinkedList = new linkedList();
const nodes = [10,20,30,40,50,60];
for(let node of nodes){
    myLinkedList.add(node,2);
}
myLinkedList.printList();
myLinkedList.sumOfKthNode();
myLinkedList.removeNode(30);
myLinkedList.printList();
