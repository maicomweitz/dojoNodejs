

const mapa = {
    maicom: {nome: "maicom", idade: 40},
    sergio: {nome: "sergio", idade: 40},
    fruta: "banana"
}
const lista = [{nome: "maicom", idade: 40}, {nome: "sergio", idade: 40}, "banana"]    /* Para mapas declaro a variavel e atribuo Chaves {} para criar listas declaro a variavel e atribuo colchetes [] */


const getConteudo = (chave) => {
    console.log (mapa)
    return mapa[chave]  

}
const iterarObjetos1 = (mapa) => {
    let contador = 0
    for (const nome of mapa ) {     // quando eu usar "in" ele itera nas chaves, quando eu usar "of" ele itera nos valores.
    console.log (`posicao: ${nome}, valor: ${mapa[nome -1]}, valor: ${ mapa[contador] }`)
    contador ++
    // iterar na variavel mapa e imprimir cada elemento. 
    // iterar na variavel lista e imprimir cada elemento.
    }
}

const iterarObjetos = (lista) => {
    for (const nome in lista ) {
    console.log (nome, lista [nome])
    // iterar na variavel mapa e imprimir cada elemento. 
    // iterar na variavel lista e imprimir cada elemento.
    }
}


iterarObjetos (mapa)

export {
    getConteudo, iterarObjetos, iterarObjetos1
}