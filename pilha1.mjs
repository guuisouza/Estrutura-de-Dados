let frase = 'Socorram-me, subi no ônibus em Marrocos';

let vetor = []

for(let i=0;i<frase.length;i++){
    vetor.push(frase.charAt(i))
}
console.log('Pilha original:',vetor)

// vetor.unshift('X');

// vetor.splice(11, 10, 'S', 'O', 'C', 'O', 'R', 'A', 'M', 'M', 'E');

// vetor.splice(23,2)

// vetor.pop()


let reverso = ''

while(vetor.length>0){
    reverso = reverso + vetor.pop();
}
console.log('Frase reverso', reverso)