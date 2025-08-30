
const popular = (numero) => {

    let contador = 1
    const resultado = []

    while (contador <= numero) {
        resultado.push (contador)
        contador += 1 // outras formas equivalentes: contador ++ / contador = contador +1

    }
    
  
    return resultado

}

const soletrar = (palavra) => {

    const resultado= []
    for (const letra of palavra){
        resultado.push (letra)
    }

    return resultado
}

const removerItens2 = (lista) => {
    let contador = 1
    for (const posicao of lista ){ // Esse exemplo daria problema porque o For não permite que elementos sejam inseridos ou removidos durante a iteração 
        console.log (posicao)
        lista.pop ()  // pop remove o último elemento da lista
        lista [contador] = null  // remove o elemento na posicao informada. Funciona por conta do contador externo (let contador)
        contador = contador ++
    }

}

const removerItens = (lista) => {
    while (lista.length > 0 ) {
        const elemento = lista.pop ()
        console.log ("removendo elemento: " + elemento)
    }
    return lista

}


export {
    popular, soletrar, removerItens
}