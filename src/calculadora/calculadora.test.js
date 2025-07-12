import { soma, subtracao, multiplicacao, divisao } from './calculadora.js'

test('adds 1 + 2 to equal 3', () => {
    const resultado = soma(1, 2)
    expect(resultado).toBe(3)
})

test('subtract 3 - 1 to equal 2', () => {
    expect(subtracao(3, 1)).toBe(2)
})

test('adds 2 * 2 to equal 4', () => {
    expect(multiplicacao(2, 2)).toBe(4)
})

test('adds 6 / 2 to equal 3', () => {
    expect(divisao(6, 2)).toBe(3)
})
