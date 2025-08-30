import {
    getConteudo, iterarObjetos, iterarObjetos1
} from "./maps.js"

test('testa mapa', () => {
    const resultado = getConteudo ("maicom")
    expect(resultado).toEqual({"nome": "maicom", "idade": 40})
    const resultado2 = getConteudo ("sergio")
    expect(resultado2).toEqual({"nome": "sergio", "idade": 40})
    const resultado3 = getConteudo ("fruta")
    expect(resultado3).toBe("banana")
})
test('testa mapa', () => {
    iterarObjetos1 ([1,2,3,4,5,6,7,8,9,10])
    iterarObjetos1 ("batata")
})

