/* O problema "Jokenpô" do DojoPuzzles (também conhecido como "Pedra, Papel e Tesoura")
 propõe uma simulação desse jogo clássico entre dois jogadores. A ideia é criar um programa 
 que receba as jogadas de dois participantes e determine o vencedor com base nas regras tradicionais:

    Pedra ganha da Tesoura

    Tesoura ganha do Papel

    Papel ganha da Pedra

    Jogadas iguais resultam em empate
    */

    const getJokenpo = (jogador1, jogador2) => {


        if (jogador1 == 'pedra' && jogador2 == 'pedra')
            return 'Empate' 
        
        else if ( jogador1 == 'Pedra' && jogador2 == 'Tesoura' )
            return 'Pedra ganhou'

        else if ( jogador1 == 'Tesoura' && jogador2 == 'Papel')
            return 'Tesoura ganhou'

        else if ( jogador1 == 'Papel' && jogador2 == 'Pedra')
            return 'Papel ganhou'


    }


    export {
        getJokenpo
    }