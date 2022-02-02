const arr = [4, 3, 2, 1];


const solution = (arr) => {
    var answer = arr.filter(a => a !== Math.min(...arr))
    return !!answer.length ? answer : [-1];
}