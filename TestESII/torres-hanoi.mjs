/*
    1. Veja, na imagem "torres-hanoi.png", como funciona o jogo das Torres de Hanoi.

    2. Cada uma das torres do jogo se comporta como uma pilha. Importe a classe
        apropriada e crie três pilhas, representando as três torres.
*/

import Stack from './lib/Stack.mjs'

let pilha1 = new Stack()
let pilha2 = new Stack()
let pilha3 = new Stack()

/*
    3. Use os valores 1, 2 e 3 para representar os discos. Empilhe-os na primeira
        torre.
*/

pilha1.push(3)
pilha1.push(2)
pilha1.push(1)

/*
    4. Desempilhe um dos discos da primeira torre e empilhe-o na terceira.
*/

pilha1.pop()
pilha3.push(1)

/*
    5. Desempilhe o disco remanescente da primeira torre e coloque-o na segunda.
*/

pilha1.pop()
pilha2.push(2)

/*
    6. Desempilhe o disco da terceira torre e coloque-o sobre o disco da segunda torre.
*/

pilha3.pop()
pilha2.push(1)

/*
    7. Desempilhe o disco da primeira torre e coloque-o na terceira torre.
*/

pilha1.pop()
pilha3.push(3)

/*
    8. Desempilhe um dos discos da segunda torre e coloque-o na primeira torre.
*/

pilha2.pop()
pilha1.push(1)

/*
    9. Desempilhe o disco da segunda torre e coloque-o sobre o disco da terceira torre.
*/

pilha2.pop()
pilha3.push(2)

/*
    10.Finalmente, desempilhe o disco da primeira torre e coloque-o na terceira torre.
*/

pilha1.pop()
pilha3.push(1)

/*
    11.Use o método print() para exibir as três pilhas. As duas primeiras devem estar
        vazias e a terceira deve conter os três discos, na ordem (3 na base, 1 no topo).      
*/
console.log(`Pilha 1: ${pilha1.print()}`)
console.log(`Pilha 2: ${pilha2.print()}`)
console.log(`Pilha 3: ${pilha3.print()}`)