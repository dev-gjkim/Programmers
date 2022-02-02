const answer = [1, 3, 2, 4, 2];


const solution = (answers) => {
  const people1 = [1, 2, 3, 4, 5]
  const people2 = [2, 1, 2, 3, 2, 4, 2, 5]
  const people3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  const answerCnt = [0, 0, 0]
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === people1[i % 5]) {
      answerCnt[0]++
    }
    if (answers[i] === people2[i % 8]) {
      answerCnt[1]++
    }
    if (answers[i] === people3[i % 10]) {
      answerCnt[2]++
    }
  }

  const result = answerCnt.reduce((pre, cur, idx, arr) => {
    if (cur === Math.max(...arr)) {
      pre.push(idx + 1)
    }
    return pre;
  }, [])

  return result
}