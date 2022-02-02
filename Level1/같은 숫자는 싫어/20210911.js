const arr = [1, 1, 3, 3, 0, 1, 1];


const solution = (arr) => {
  var answer = [];

  arr.forEach(v => {
    const l = answer[answer.length - 1];

    if (l !== v) {
      answer.push(v)
    }
  })

  return answer;
}