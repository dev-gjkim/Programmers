const progresses = [2, 2, 1, 2];
const speeds = [1, 1, 1, 1]


const solution = (progresses, speeds) => {
    let working = 0;
    const stack = progresses.reduce((pre, cur, idx) => {
        const workday = Math.ceil((100 - cur) / speeds[idx]);
        if (!working) {
            working = workday;
            return pre;
        }

        if (working >= workday) {
            pre[pre.length - 1]++;
        } else {
            pre.push(1);
            working = workday;
        }
        return pre;
    }, [1])
    return stack;
}