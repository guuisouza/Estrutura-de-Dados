function quicksort(vetor, ini = 0, fim = vetor.length - 1) {
    if (fim <= ini) {  
        return vetor;
    }
    const pivot = fim
    let div = ini -1
    for(let i = ini; i < fim; i ++) {
        if(vetor[pivot] > vetor[i]) {
            div++
            if(div !== i) {
                [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
            }
        }
    }
    div++
    if(vetor[div] > vetor[pivot] && div !== pivot) {
        [ vetor[div], vetor[pivot] ] = [ vetor[pivot], vetor[div] ] 
    }
    quicksort(vetor, ini, div -1)
    quicksort(vetor, div + 1, fim)
}

let nums = [ 2, 5, 7, 1, 6, 3, 4 ]
quicksort(nums)
console.log(nums)















/*  Como fiz:
function quickSort(vetor){
    let pivo = vetor.length - 1
    let vetEsq = []
    let vetDir = []

    for(let i=0;i<vetor.length - 1;i++){
        if(vetor[i] < pivo){
            vetEsq.push(vetor[i])
        }
        else{
            vetDir.push(vetor[i])
        }
    }
}*/ 
