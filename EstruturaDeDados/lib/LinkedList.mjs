class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

export default class LinkedList{
    #head
    #tail
    #count

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    get isEmpty(){
        return this.#count === 0
    }
    get count(){
        return this.#count
    }

    insert(pos, value){
        const inserted = new Node (value);

        if (this.isEmpty){

            this.#head = inserted;
            this.#tail = inserted;
        }
        
        else if(pos === 0){
            inserted.next = this.#head
            this.#head = inserted

        }

        else if(pos >= this.#count){
            this.#tail = inserted;
            this.#tail = inserted;
        }

        else {
            let before = this.#head

            for(let i=1;i<pos;i++){
                before = before.next;
            }

            let after = before.next;

            inserted.next = after;
            before.next = inserted
        }
        this.#count++
    }
}