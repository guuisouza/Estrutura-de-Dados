/*
    1. O Professor Alexandre saiu para fazer compras com uma lista em mãos.
    Abaixo segue a lista de compras:
    - Sabonete
    - Detergente   
    - Cebola
    - Leite
    - Sabão em pó
    - Arroz
    - Feijão
    - Macarrão
    - Creme dental

    2. Iremos organizar a lista de compras, onde os produtos alimentícios ficarão
    entre os primeiros itens, e os produtos de limpeza e higiene pessoal ficarão no
    final da lista.
    O primeiro passo é importar a classe apropriada e depois criar o nosso "objeto" lista.
*/
import Deque from './lib/Deque.mjs'

let listadeCompras = new Deque ()

/*
    3. Faça com que a lista de compras do Professor Alexandre fique na seguinte sequência:
    
    // Produtos Alimentícios
    1º Arroz
    2º Feijão
    3º Macarrão
    4º Cebola
    5º Leite

    // Produtos de limpeza/higiene pessoal
    6º Sabonete
    7º Detergente   
    8º Sabão em pó
    9º Creme dental
*/

listadeCompras.insertFront('Leite')
listadeCompras.insertFront('Cebola')
listadeCompras.insertFront('Macarrao')
listadeCompras.insertFront('Feijão')
listadeCompras.insertFront('Arroz')

listadeCompras.insertBack('Sabonete')
listadeCompras.insertBack('Detergente')
listadeCompras.insertBack('Sabão em pó')
listadeCompras.insertBack('Creme Dental')

/*
    4. Imprima a lista na ordem correta.
*/

console.log(listadeCompras.print())

/*
    5. A esposa do Professor Alexandre ligou pedindo que ele adicionasse mais 2 (dois)
    produtos alimentícios e 3 (três) produtos de limpeza e higiene pessoal na sua lista. São eles:

    // Produtos Alimentícios
    - Banana (ficará como o primeiro item da lista)
    - Maçã (ficará como o segundo item da lista)

    // Produtos de limpeza/higiene pessoal
    //(adicione os itens nesta sequência)
    - Água sanitária
    - Condicionador de cabelo
    - Álcool
*/

listadeCompras.insertFront('Maça')
listadeCompras.insertFront('Banana')

listadeCompras.insertBack('Água Sanitária')
listadeCompras.insertBack('Condicionador de cabelo')
listadeCompras.insertBack('Álcool')

/*
    6. Imprima a lista na ordem correta depois de adicionar os novos produtos.
*/

console.log(listadeCompras.print())

/*
    7. O Professor Alexandre observou que 2 (dois) produtos já tinham na sua casa e decidiu
    removê-los da sua lista. São eles:
    - Banana
    - Álcool
*/

let removidoFront = listadeCompras.removeFront()
let removidoBack = listadeCompras.removeBack()

/*
    8. Mostre apenas os itens removidos da lista.
*/

console.log({removidoFront}, {removidoBack})

/*
    9. Consulte quem é o primeiro e o último item da lista atual.
*/

let primeiroDaListaAtual = listadeCompras.peekFront()
let ultimoDaListaAtual = listadeCompras.peekBack()
console.log({primeiroDaListaAtual})
console.log({ultimoDaListaAtual})

/*
    10. Imprima a lista correta depois de todas as alterações que foram feitas.
*/

console.log(listadeCompras.print())
