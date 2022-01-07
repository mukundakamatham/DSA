
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    var new_node = new LinkedListNode(data);
let count=1;
    if (head == null)
    {
        head = new LinkedListNode(data);
        return head;
    }else if(position==0){
      var datas = new LinkedListNode(data);
         datas.next=head
        return datas;
    }
    //console.log(head)
      new_node.next = null;
          var last = head; 
     while (last.next != null){
         if(count==position){
             let temp=last.next;
             new_node.next=temp;
            last.next = new_node;
                     last = last.next;

         }else{
                    last = last.next;


         }
 count++
    
     }
     return head;
 
 
}

