//fazer uma estrutura de repeticao sem fazer um for ou while
//fatorial é um numero que colocamos e é uma multiplicacao de seus números anteriores
//funcao recursiva tem que ter uma condição de parada
function fatorial (num){
    let res = 1
    for(let i = num; i > 1; i--){
        res = res * i
    }  
    return res  
}
console.log("Fatorial de 5: ", fatorial(10))



