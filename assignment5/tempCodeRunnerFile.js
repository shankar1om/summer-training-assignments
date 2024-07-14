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
        let count =1;
        while(temp != null){
            temp=temp.next;
            count++;
        }
        if(k>count){
            console.log("k is out of limit");
            return;
        }
        while(current.val != value){
            if(current.val==value){
                target = current
                break;
            }
            else if(current == null){
                console.log("no value is present");
                return;
            }
            current=current.next;
        }
        fast=current;
        slow=current;
        for(let i=0; i<k; i++){
            if(fast.next==null){
                fast=this.head;
            }
            else{
                fast=fast.next
            }
        }
        while(fast!=target){
            if(fast.next==null || slow.next==null){
                fast=this.head;
                slow=this.head;
            }
            else{
                fast=fast.next
                slow=slow.next;
            }
        }
        console.log(slow.val);
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
myLinkedList.nodeValueBeforeKthPosition(30,6);