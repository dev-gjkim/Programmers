const arr = [2, 36, 1, 3];
const divisor = 1


const solution = (arr, divisor) => {

  const result = arr.sort((a, b) => a - b).reduce((pre, cur) => {

    if (cur % divisor === 0) {
      pre.push(cur)
    }
    return pre
  }, [])
  return result.length ? result : [-1];
}