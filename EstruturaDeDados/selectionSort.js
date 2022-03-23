let num = [15,52,22,23,26,25,18,19,11]
function selectionSort(vetor){
    for(let i=0;i<vetor.length;i++){
        let menor = i
        for(let j=i+1;j<vetor.length;j++){
            if(vetor[j]<vetor[menor]){
                menor = j
            }
        }
        [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]]
        
    }
    return vetor;
}
console.log(selectionSort(num))

/* Teacher's mode resolution
    let nums = [77,44,22,33,99,55,88,0,66,11]

function selectionSort(vetor){
    for(let posSelect=0; posSelect<vetor.length -1;posSelect++){
        let posMenor = posSelect + 1
        for(let i = posMenor+1; i<vetor.length; i++){
            if(vetor[posMenor] > vetor[i]){
                posMenor = i
            }
        }
        if(vetor[posSel] > vetor[posMenor]){
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor] = vetor[posSel]
        }
    }
}
selectionSort(nums)
console.log(nums)
*/