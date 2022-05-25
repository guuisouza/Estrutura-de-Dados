import Deque from "./lib/deque.mjs";

let listaCompras = new Deque();


console.log("A lista de compras está vazia?", listaCompras.isEmpty);

// adicionando itens na lista (alimentos)

listaCompras.insertFront('Arroz');
listaCompras.insertFront('Feijao');
listaCompras.insertFront('Macarrão');
console.log(listaCompras.print());

listaCompras.insertBack('Sabão');
listaCompras.insertBack('Água sanitária');
listaCompras.insertBack('Desinfetante');
listaCompras.insertBack('Desodorante');
console.log(listaCompras.print());

listaCompras.insertFront('Leite');
listaCompras.insertFront('Cafe');
console.log(listaCompras.print());

let removido = listaCompras.removeFront();
console.log(`Removido ${removido}`)

let prox = listaCompras.peekFront();
console.log(`Próximo ${prox}`);

let ultimo = listaCompras.peekBack();
console.log(`Último ${ultimo}`);