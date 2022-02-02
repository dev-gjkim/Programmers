const x = 13;


const solution = (x) => {
    const num = x.toString().split('').reduce((pre, cur) => pre + parseInt(cur), 0)
    return !(x % num)
}