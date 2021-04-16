function Queue(){
    collection = [];
    this.print = function(){
        console.log(collection)
    }

    this.enqueue = function(element){
        collection.push(element)
    }

    this.dequeue = function(element){
        return collection.shift()
    }

    this.peek = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length === 0)
    }
}

var q = new Queue();

q.enqueue('alpha')
q.enqueue('bravo')
q.enqueue('charlie')
q.enqueue('delta')
q.enqueue('echo')
q.enqueue('foxtrot')

console.log(q.peek())

q.print()

q.dequeue()

q.print()

