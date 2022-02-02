const seoul = ["Jane", "Kim"]


const solution = (seoul) => {
    var answer = `김서방은 ${seoul.findIndex(s => s === 'Kim')}에 있다`;
    return answer
}