const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;


const solution = (priorities, location) => {
    const stack = [];
    const newPriorities = priorities.map((p, idx) => ({ idx, p }))

    while (newPriorities.length) {
        const item = newPriorities.shift();
        if (Math.max(...newPriorities.map(p => p.p)) > item.p) {
            newPriorities.push(item);
        } else {
            stack.push(item)
        }
    }
    return stack.findIndex(s => s.idx === location) +1
}


console.log(solution(priorities, location))