const n = 121


const solution = (n) => {
    const sqrtNum = Math.sqrt(n);
    const result = Number.isInteger(sqrtNum) ? Math.pow(sqrtNum + 1, 2) : -1

    return result;
}