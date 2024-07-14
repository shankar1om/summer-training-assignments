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
    nodeValueBeforeKthPosition(value,k){
        let current = this.head;
        let temp = this.head;
        let slow=this.head;
        let fast=this.head;
        let target=null;
        let count =0;
        while(temp != null){
            temp=temp.next;
            count++;
        }
        if(k>count){
            console.log("k is out of limit");
            return;
        }
        while(current != null && current.val != value ){
            current=current.next;
        }
        if(current == null){
                console.log("no value is present");
                return;
            }
        target=current;
        fast=current;
        slow=current;
        for(let i=0; i<k; i++){
            if(fast.next==null){
                fast=this.head;
            }
            else{
                fast=fast.next
            }
            // console.log(fast.val,slow.val)
        }
        // console.log(fast.val,slow.val)
        // console.log(target.val)
        while(fast!=target){
            if(fast.next==null){
                fast=this.head;
                slow=slow.next;
            }
           if(slow.next==null){
                slow=this.head;
                fast=fast.next;
            }
            else if(slow.next != null && fast.next != null){
                fast=fast.next
                slow=slow.next;
            }
            // console.log(fast.val,slow.val)
        }
        console.log(`"${k}th value before node with value ${value} is : ${slow.val}"`);
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
const nodes = [10,20,30,40,50,60,70,80,90,100];
for(let node of nodes){
    myLinkedList.add(node);
}
myLinkedList.printList();
myLinkedList.nodeValueBeforeKthPosition(30,6);