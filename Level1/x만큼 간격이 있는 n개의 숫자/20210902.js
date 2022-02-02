const x = 2;
const n = 5;


const solution = (x, n) => {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(x * (i + 1));
    }
    return arr
}