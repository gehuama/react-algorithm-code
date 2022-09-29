class Stack{
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(node){
        this.data[this.top++]=node;
    }
    pop(){
        return this.data[--this.top];
    }
    peek() {
        return this.data[this.top-1];
    }
    size(){
        return this.top;
    }
    clear() {
        this.top = 0;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size());
console.log(stack.peek());

stack.pop();
console.log(stack.peek());
