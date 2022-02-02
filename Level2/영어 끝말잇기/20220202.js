const n = 3;
const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
const solution = (n, words) => {
    let gameEnd = true;
    let turn = 1;
    while (gameEnd && turn < words.length) {
        const preTurn = words[turn - 1];
        const nowTurn = words[turn];

        if (words.indexOf(nowTurn) !== -1 && words.indexOf(nowTurn) < turn) {
            gameEnd = false;
        }
        if (preTurn[preTurn.length - 1] !== nowTurn[0]) {
            gameEnd = false;
        }
        turn++;
    }
    return gameEnd ? [0, 0] : [turn % n || n, Math.ceil(turn / n)]
}

console.log(solution(n, words))
