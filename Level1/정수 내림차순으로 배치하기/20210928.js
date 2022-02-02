const n = 118372;


const solution = (n) => {
    const answer = n.toString().split('').sort().reverse()
    return parseInt(answer.join(''))
}