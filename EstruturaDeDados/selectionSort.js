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