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

}



//LIFO

const stack = new Stack()

stack.push(100)
stack.push(200)

stack.peek()

stack.push(300)

stack.pop()

