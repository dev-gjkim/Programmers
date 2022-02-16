const number = "98765432";
const k = 4;


const solution = (number, k) => {
    let count = 0;
    const stack = [];

    for (let item of number) {
        while (k > count && stack[stack.length - 1] < item) {
            stack.pop();
            count++
        }
        stack.push(item);
    }

    while (k > count) {
        stack.pop();
        count++
    }
    return stack.join('')
}