const numbers = [1, 2, 3, 4, 6, 7, 8, 0];


const solution = (numbers) => {
  let answer = numbers.reduce((pre, cur) => {
    return pre - cur
  }, 10 * 9 / 2)
  return answer;
}