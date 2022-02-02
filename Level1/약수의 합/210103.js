

const n = 12


const solution = (n) => {
    let result = 0
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            result += i
        }
    }
    return result + n
}

console.log(solution(n))