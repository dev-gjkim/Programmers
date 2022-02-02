const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];


const solution = (array, commands) => {
    const result = commands.map(c => {
        const spliceArr = array.slice(c[0] - 1, c[1]);
        spliceArr.sort((a, b) => a - b)
        return spliceArr.splice(c[2] - 1, 1)[0]
    })
    return result
}