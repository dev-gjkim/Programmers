const absolutes = [1, 2, 3]
const signs = [false, false, true]


const solution = (absolutes, signs) => {
  const answer = absolutes.reduce((pre, cur, idx) => {
    const num = signs[idx] ? cur : -cur;
    return pre + num
  }, 0)
  return answer;
}