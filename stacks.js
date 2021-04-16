/*stack practice
-create stack class (including functions push, pop)
-create stack called starTrek and add Kirk, Spock, McCoy, Scotty
-add additional helper funcs. peek(), isEmpty(), display()
-remove McCoy from stack, then display stack
*/

class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    //add element to top of stack
    push(element){
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }

    //delete top of stack element
    pop(){
        if (this.count == 0) return undefined
        //deletes item at array position (array position == count - 1 )
        let deletedItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deletedItem} removed`)
        return deletedItem
    }

    //check top element in stack
    peek(){
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }


    //check if stack is empty
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
    
        //returns true or false if this.count is == 0 
        return this.count == 0
    }
}



//LIFO

const stack = new Stack()

stack.push("Kirk")
stack.push("Spock")
stack.push("McCoy")
stack.push("Scotty")

stack.peek()

stack.pop()
stack.pop()
stack.push('Scotty')

stack.peek()


stack.isEmpty()

