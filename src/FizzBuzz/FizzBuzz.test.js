import { getFizzBuzz } from "./FizzBuzz.js"

test('testa o número 1', () => {
    const resultado = getFizzBuzz (1)  
    expect(resultado).toBe('1')
})
test('testa o número 3', () => {
    const resultado = getFizzBuzz (3)  
    expect(resultado).toBe('Fizz')
})
test('testa o número 5', () => {
    const resultado = getFizzBuzz (5)  
    expect(resultado).toBe('Buzz')
})
test('testa o número 15', () => {
    const resultado = getFizzBuzz (15)  
    expect(resultado).toBe('FizzBuzz')
})