class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    if (this.head == null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    this.size++;
  }
  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      throw Error("Index out of bounds");
    }

    let node = new Node(element);
    let previous, current;

    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      current = this.head;
      let it = 0;

      while (it < index) {
        it++;
        previous = current;
        current = current.next;
      }

      node.next = current;
      previous.next = node;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      throw Error("Index out of bounds");
    }
    let current = this.head;
    let previous;
    let it = 0;

    if (index == 0) {
      this.head = this.current.next;
    } else {
      while (it < index) {
        previous = current;
        current = current.next;
        it++;
      }

      previous.next = current.next;
    }
    this.size--;
    return current.element;
  }

  removeElement(element) {
    let current = this.head;
    let previous = null;

    while (current != null) {
      if (current.element === element) {
        if (previous == null) {
          this.head = this.head.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.element;
      }
      previous = current;
      current = current.next;
    }
    return -1;
  }

  indexOf(element){
      let current = this.head;
      let it = 0

      while(current != null){
          if(current.element === element){
              return it;
          }
          current = current.next
          it++
      }
      return -1
  }


  isEmpty(){
      return this.size == 0
  }

  size(){
      return this.size
  }

  print() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.element + ",";
      current = current.next;
    }
    console.log(this.head);
    console.table(str.slice(0, -1));
  }
}

let list = new LinkedList();

list.add(10);
list.add(20);
list.insertAt(66, 2);
list.removeFrom(1)
console.log(list.removeElement(66));
console.log(list.size)
console.log(list.isEmpty())
console.log(list.indexOf(20))
list.print();
