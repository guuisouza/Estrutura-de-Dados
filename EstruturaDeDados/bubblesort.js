let num = [77,44,22,33,99,55,88,0,66,11]
function bubbleSort(vetor){
    let contador = 0
    let comparacoes = 0
    size = vetor.length -1
    do{
        for (i=0;i<vetor.length -1;i++){
            comparacoes++
            if(vetor[i] > vetor[i+1]){
                [vetor[i], vetor[i+1]]= [vetor[i+1], vetor[i]]
                contador ++
            }
            else{
                vetor[i+1]
            }
        }
        size--;
    }
    while(size > 0)
    console.log(num)
    console.log({contador, comparacoes})
}
bubbleSort(num)

/*
let nums = [77,44,22,33,99,55,88,0,66,11]
function bubleSort(vetor){
    let trocou
    do{
        trocou = false
        for(let i=0; i<vetor.length -1;i++){
            if(vetor[i] > vetor[i+1]){
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                trocou = true
            }
        }
    }
    while(trocou)
}
*/