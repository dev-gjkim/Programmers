const n = 12345


const solution = (n) => {
    return n.toString().split('').map(a => parseInt(a)).reverse();
}