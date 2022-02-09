const priorities = [1,1,9,1,1,1];
const location = 0;


//linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(newValue) {
        const node = new Node(newValue);
        if (this.head === null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value
    }
    peek() {
        const value = this.head.value;
        return value;
    }
}
const solution = (priorities, location) => {
    const queue = new Queue();
    for (let i = 0; i < priorities.length; i++) {
        queue.enqueue([priorities[i], i])
    }

    priorities.sort((a, b) => b - a);
    let count = 0;
    while (true) {
        const item = queue.dequeue();
        if (item[0] < priorities[count]) {
            queue.enqueue(item)
        } else {
            count++;
            if (item[1] === location) {
                return count;
            }
        }
    }
}
