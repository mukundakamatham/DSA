
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
      var new_node = new LinkedListNode(data);

   if (head == null)
   {
       head = new LinkedListNode(data);
       return head;
   }
     new_node.next = null;
         var last = head; 
    while (last.next != null)
        last = last.next;

    last.next = new_node;
    return head;


}

