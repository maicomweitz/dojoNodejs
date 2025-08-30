import {popular,soletrar, removerItens} from "./looping.js"

test('testa laco de repeticao', () => {
    const resultado = popular (10)
    expect(resultado).toEqual([1,2,3,4,5,6,7,8,9,10])
})
test('testa laco de soletrar', () => {
    const resultado = soletrar ("batata")
    expect(resultado).toEqual(["b","a","t","a","t","a"])
})
test('testa laco removendo itens', () => {
    const resultado = removerItens ([1,2,3,4,5])
    expect(resultado).toEqual([])
})
test('testa laco removendo letras', () => {
    const resultado = removerItens ("batata")
    expect(resultado).toEqual("")
})