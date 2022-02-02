
const num = 626331;

const solution = (num) => {
    let n = 0;

    while (num > 1 && n <= 500) {
        if (num % 2 === 0) {
            num = num / 2
        } else {
            num = num * 3 + 1
        }
        n++;
    }
    return n > 500 ? -1 : n
}