/*
Exercício: FizzBuzz

Escreva um programa que imprima os números de 1 a 100, mas com as seguintes regras:

    Para múltiplos de 3, imprima "Fizz" em vez do número.

    Para múltiplos de 5, imprima "Buzz" em vez do número.

    Para números que são múltiplos tanto de 3 quanto de 5, imprima "FizzBuzz".

    Para todos os outros números, apenas imprima o próprio número.

*/


const getFizzBuzz = (numero) =>{

    
    const divisivelPor3 = numero % 3 
    const divisivelPor5 = numero % 5 

        if (divisivelPor3 == 0 && divisivelPor5 ==0 ){
            return 'FizzBuzz'
        }

        if (divisivelPor3 == 0) {
            return 'Fizz'
        }
        if (divisivelPor5 ==0){
            return 'Buzz'
        }
        return String (numero)


}

    export {
        getFizzBuzz
    }