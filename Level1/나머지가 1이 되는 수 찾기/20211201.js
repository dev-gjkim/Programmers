const n = 10;


const solution = (n) => {
    let answer = 1
    while (n % answer !== 1) {
        answer++
    }
    return answer;
}