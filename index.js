// Node class representing an element in the linked stack
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Stack class managing the linked list of nodes
class Stack {
    constructor() {
        this.top = null;
        this._count = 0;
    }

    // Pushes a new value onto the top of the stack
    push(val) {
        const newNode = new Node(val);
        newNode.next = this.top;
        this.top = newNode;
        this._count++;
    }

    // Removes and returns the top element of the stack
    pop() {
        if (this.top === null) {
            return null;
        }
        const val = this.top.data;
        this.top = this.top.next;
        this._count--;
        return val;
    }

    // Returns the top element without removing it
    peek() {
        if (this.top === null) {
            return null;
        }
        return this.top.data;
    }

    // Removes all elements from the stack
    clear() {
        this.top = null;
        this._count = 0;
    }

    // Returns the total count of elements in the stack
    count() {
        return this._count;
    }

    // Returns the total count of elements in the stack (alias for count)
    size() {
        return this._count;
    }

    // Returns a string representation of the stack contents without modifying it
    toString() {
        const elements = [];
        let curr = this.top;
        while (curr !== null) {
            elements.push(curr.data);
            curr = curr.next;
        }
        return elements.length > 0 ? "Top -> " + elements.join(" -> ") : "Stack is Empty";
    }
}

// Function to find the nearest smaller element on the left using a monotonic stack
function nearestSmallerElement(arr) {
    const stack = new Stack();
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const x = arr[i];

        // Pop elements from the stack that are greater than or equal to current element
        while (stack.count() > 0 && stack.peek() >= x) {
            stack.pop();
        }

        // If stack is empty, no smaller element exists on the left
        if (stack.count() === 0) {
            result.push(-1);
        } else {
            result.push(stack.peek());
        }

        // Push current element into the stack
        stack.push(x);
    }

    return result;
}

// Example usage
const inputArray = [4, 5, 2, 10, 8];
const outputArray = nearestSmallerElement(inputArray);

console.log("Вхідний масив:", inputArray);
console.log("Результат:    ", outputArray);
