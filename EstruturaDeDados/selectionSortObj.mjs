function selectionSortObj(vetor, fnComp){
    for(let posSelect=0;posSelect<vetor.length -1;posSelect++){
        let posMenor = posSelect + 1 
        for(let i=posMenor+1;i<vetor.length;i++){
            if(fnComp(vetor[posMenor], vetor[i]))
            posMenor = i
        }
        if(fnComp(vetor[posSelect], vetor[posMenor])){
            [vetor[posSelect], vetor[posMenor]] = [vetor[posMenor], vetor[posSelect]]
        }
    }
}
import { objMotoristas } from './data/motoristas-obj-desord.mjs'

/*selectionSortObj(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)
console.log(objMotoristas)*/

selectionSortObj(objMotoristas, (elem1,elem2) => {
    if(elem1.razao_social === elem2.razao_social){
        return elem1.nome_motorista > elem2.nome_motorista
    }
    else {
        return elem1.razao_social > elem2.razao_social
    }
})
console.log(objMotoristas) 

/* Essa situação vai trazer as empresas iguais e desempatar ordenando pela ordem alfabetica dos nomes*/