const arr = [1, 2, 3, 4]


const solution = (arr) => {
    const r = arr.reduce((pre, cur, idx) => {
        return pre + cur
    }, 0)

    return r / arr.length

}