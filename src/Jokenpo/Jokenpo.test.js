import { getJokenpo } from "./Jokenpo.js"


test('testa a jogada de empate', () => {
    const resultado = getJokenpo ('pedra', 'pedra')
    expect(resultado).toBe('Empate')
})
test('testa se a Pedra ganhou', () => {
    const resultado = getJokenpo ('Pedra', 'Tesoura')
    expect(resultado).toBe('Pedra ganhou')
})
test('testa se a Tesoura ganhou', () => {
    const resultado = getJokenpo ('Tesoura', 'Papel')
    expect(resultado).toBe('Tesoura ganhou')
})
test('testa se o Papel ganhou', () => {
    const resultado = getJokenpo ('Papel', 'Pedra')
    expect(resultado).toBe('Papel ganhou')
})