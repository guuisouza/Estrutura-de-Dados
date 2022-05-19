import Queue from "./lib/Queue.mjs";

let fila = new Queue();

//Inserções na fila
fila.enqueue("Alexandre");
fila.enqueue("Jõao");
fila.enqueue("Maria")
fila.enqueue("José")
fila.enqueue("Pedro")

console.log(fila.print())

//remocao da fila

let atendido = fila.dequeue();
console.log(`Atendido: ${atendido}`)
console.log(fila.print())

//novas insercoes
fila.enqueue("José");
fila.enqueue("Joquim")
console.log(fila.print())

//observando o inicio da fila
let prox = fila.peek();
console.log(`Próximo ${prox}`);
console.log(fila.print());

//nova remocao
atendido = fila.dequeue();
console.log(`Atendido: ${atendido}`)
console.log(fila.print())
console.log(`Fila está vazia? ${fila.isEmpty}`)

