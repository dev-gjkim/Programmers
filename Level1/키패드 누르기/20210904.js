const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left"


const solution = (numbers, hand) => {
    let hansPosition = { 'L': [3, 0], 'R': [3, 2] }
    let result = ''
    while (numbers.length) {
        let num = numbers.shift();
        switch (num) {
            case 1:
            case 4:
            case 7:
                result += "L"
                hansPosition['L'] = [Math.max(5, num) % Math.min(5, num), 0]
                break;
            case 3:
            case 6:
            case 9:
                result += "R"
                hansPosition['R'] = [num / 3 - 1, 2]
                break;
            case 2:
            case 5:
            case 8:
            case 0: {
                let position = num === 0 ? [3, 1] : [Math.max(6, num) % Math.min(6, num), 1];
                let leftMove = Math.abs(hansPosition['L'][0] - position[0]) + Math.abs(hansPosition['L'][1] - position[1])
                let rightMove = Math.abs(hansPosition['R'][0] - position[0]) + Math.abs(hansPosition['R'][1] - position[1])
                let nowPosition = leftMove === rightMove ? hand.slice(0, 1).toUpperCase() : leftMove > rightMove ? 'R' : 'L'
                result += nowPosition
                hansPosition[nowPosition] = position
            }
        }
    }
    return result;
}