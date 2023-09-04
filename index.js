class Node {
    constructor(val) {
        this.value = val;
        this.nextNode = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val) {
        const newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;

            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }

            currentNode.nextNode = newNode;
        }

        this.tail = newNode;
    }

    prepend(val) {
        const node = new Node(val);
        if (this.head !== null) node.nextNode = this.head;
        if (this.tail === null) this.tail = node;

        this.head = node;   
    }   

    size() {
        if (this.head === null) return 0;
        let node = this.head;
        let size = 0;

        while (node !== null) {
            size += 1;
            node = node.nextNode;
        }

        return size;
    }

    listHead() {
        return this.head;
    }

    listTail() {
        return this.tail;
    }

    at(index) {
        let i = 0;
        
        if (this.head === null) {
            return alert('List is empty');
        } else if (i === index) {
            return this.head;
        } else {
            let currentNode = this.head;

            while(currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
                i++;

                if (i === index) return currentNode;
            }

            if (index > i) return alert('Index is higher than the number of lists');
        }
    }

    pop() {
        if (this.head === null) return alert('list already empty');

        let currentNode = this.head;

        while(currentNode.nextNode !== null) {
            if (currentNode.nextNode.nextNode === null) {
                currentNode.nextNode = null;
                this.tail = currentNode;
                break;
            }
            currentNode = currentNode.nextNode;
        }
    }

    contains(val) {
        if (this.head === null) return alert('List is empty');
        
        let currentNode = this.head;
        while(currentNode.nextNode !== null) {
            if (currentNode.value === val) return true;
            currentNode = currentNode.nextNode;
        }

        return currentNode.value === val? true: false;
    }

    find(val) {
        if (this.head === null) return alert('List is empty');

        let i = 0;
        let currentNode = this.head;
        while(currentNode.nextNode !== null) {
            if (currentNode.value === val) return i;
            i++;
            currentNode = currentNode.nextNode;
        }

        return currentNode.value === val? i: null;
    }

    toString() {
        if (this.head === null) return null;
        
        let string = '';
        let currentNode = this.head;

        while (currentNode.nextNode !== null ) {
            string += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        string += `( ${currentNode.value} ) -> null`;

        return string;
    }

    insertAt(val, index) {
        const newNode = new Node(val);

        let lastNode = this.head;
        let currentNode = this.head.nextNode;
        let i = 1;

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else if (index === 0) {
            newNode.nextNode = this.head;
            this.head = newNode;
        } else {
            while (currentNode.nextNode !== null) {
                if (index === i) {
                    newNode.nextNode = currentNode;
                    lastNode.nextNode = newNode;
                }

                i++;
                lastNode = lastNode.nextNode;
                currentNode = currentNode.nextNode;
            }

            if (index === i) {
                currentNode.nextNode = newNode;
                this.tail = newNode;
            }
        }  
    }

    removeAt(index) {
        let lastNode = this.head;
        let currentNode = this.head.nextNode;
        let i = 1;
        
        if (index === 0) {
            this.head = this.head.nextNode;
        } else {
            while (currentNode.nextNode !== null) {
                if (index === i) {
                    lastNode.nextNode = currentNode.nextNode;
                }

                lastNode = lastNode.nextNode;
                currentNode = currentNode.nextNode;
                i++;
            }

            if (index === i) {
                lastNode.nextNode = null;
                this.tail = lastNode;
            }
        }
    }
}

const linkedList = new List();

linkedList.append('qwe');
linkedList.append('asd');
linkedList.append('end');
linkedList.prepend('start');

linkedList.removeAt(3);
console.log(linkedList.toString());
console.log(linkedList.listTail());