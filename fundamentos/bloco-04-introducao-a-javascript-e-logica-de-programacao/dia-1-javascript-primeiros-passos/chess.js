const chessPiece = 'dama';

switch (chessPiece.toLowerCase()) {
    case 'peão':
        console.log('Anda apenas uma casa para frente. Pode andar duas casas no seu primeiro movimento. Faz capturas em diagonal ou "en passant".');
        break;
    
    case 'torre':
        console.log("Movimenta-se em linhas retas (horizontal e vertical). Pode fazer roque pequeno (O-O) ou grande roque (O-O-O) com o rei sob certas circunstâncias.");
        break;

    case 'bispo':
        console.log('Movimenta-se diagonalmente pelo tabuleiro. DICA: bispos de casas de cores diferentes nunca irão se cruzar.');
        break;

    case 'cavalo':
        console.log('Movimento em forma de L (duas casas para frente e uma para o lado). É a única peça que pode passar por cima das outras peças).');
        break;

    case 'rei':
        console.log('Pode se movimentar em todas as direções, mas apenas uma casa por vez. É a peça mais importante do xadrez. Perdê-la significa xeque-mate e o adversário vence a partida. Sua proteção geralmente é uma prioridade no início da partida.');
        break;
    
    case 'dama':
        console.log('Peça mais forte do jogo. Tem os movimentos combinados do bispo e da torre, por isto perdê-la gratuitamente ou por trocas menores resulta em eminentes derrotas. Normalmente movimentá-la no início do jogo causa problemas de desenvolvimento nas peças.');
        break;

    default:
        console.log('ERRO. Peça inválida.');
        break;
}