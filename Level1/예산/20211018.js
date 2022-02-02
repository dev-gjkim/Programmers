const d = [1, 3, 2, 5, 4]
const budget = 9


const solution = (d, budget) => {
  let answer = 0;
  d.sort((a, b) => a - b)

  while (true) {
    budget -= d.shift();
    if (budget >= 0) {
      answer++
    } else {
      break
    }
  }
  return answer
}