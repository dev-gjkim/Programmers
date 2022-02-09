const s = ")()(";


const solution = (s) => {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(1);
        } else {
            if (!stack.length) {
                return false;
            }
            stack.pop();
        }
    }
    return !stack.length;
}
console.log(solution(s))