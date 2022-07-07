// Question :
// Implement Enqueue and Dequeue using only two stacks
// ----------------------------------------------------------------

// Answer:
// Enqueue means to add an element, dequeue means to remove an element
// A stack is a linear DS that follows the principle LIFO
// Unlike stacks, queue is open at both ends. One end is always used for
// inserting data (enqueue), the other is used for deleting data (dequeue).
// It follows the principle FIFO

var inputStack = []; // first stack
let outputStack = []; // second stack

function enqueue(stackInput, item) {
    // just push the item to the end
    return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
    // reverse the stack such that the first element of the output stack is 
    // the last element of the input stack. After that, pop the top of the output to
    // get the first element that was ever pushed into the stack
    if (stackOutput.length <= 0) {
        while (stackInput.length > 0) {
            var elementToOutput = stackInput.pop();
            stackOutput.push(elementToOutput);
        }
    }
    return stackOutput.pop();
}