

const a = [1, 2, 3, 4]
const b = [-3, -1, 0, 2]

const solution = (a, b) => {

    let answer = 0

    for (let i = a.length - 1; i >= 0; i--) {
        answer += (a[i] * b[i])
    }
    return answer;
}

console.log(solution(a, b))