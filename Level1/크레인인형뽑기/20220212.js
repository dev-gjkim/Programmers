const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];


const solution = (board, moves) => {
    let answer = 0;
    const stack = [];

    moves.forEach((move) => {
        const idxx = board.findIndex(b => b[move - 1] !== 0)
        if (idxx !== -1) {
            const lastItem = stack[stack.length - 1];
            if (lastItem === board[idxx][move - 1]) {
                stack.pop();
                answer += 2
            } else {
                stack.push(board[idxx][move - 1])
            }
            board[idxx][move - 1] = 0;
        }

    })
    return answer;
}
