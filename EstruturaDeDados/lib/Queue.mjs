export default class Queue {
    #data

    constructor(){
        this.#data = []  
    }
    enqueue(value){
        this.#data.push(value)
    }

    dequeue(){
        return this.#data.shift()
    }

    peek(){
        return this.#data[0]
    }

    get isEmpty() {
        return this.#data.length===0
    }

    print(){
        let output = '['
        for(let i=0;i<this.#data.length;i++){
            if(output !== '[') output += ','
                output += `(${i+1}) ${this.#data[i]}`
        }
        return output + ']'
    }
}    
