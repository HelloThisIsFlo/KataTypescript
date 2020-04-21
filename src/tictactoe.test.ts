import TicTacToe from './tictactoe';

describe('Tic Tac Toe', () =>{
    it('DEBUG return hello', () => {
        var ticTacToe = new TicTacToe();
        var result = ticTacToe.hello();
        expect(result).toBe("hello");
    })
})
