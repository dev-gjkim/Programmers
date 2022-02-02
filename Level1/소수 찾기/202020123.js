const n = 10;

const solution = (n) => {
    const answer = [true, true];

    for (let i = 2; i <= n; i++) {
        if (answer[i]) continue; //이미 지워진 수 건너뛰기

        // 해당 숫자의 배수를 모두 true로
        for (let j = 2 * i; j <= n; j += i) {
            answer[j] = true;
        }
        answer[i] = false
    }


    return answer.filter(a => !a).length;

}

console.log(solution(n))