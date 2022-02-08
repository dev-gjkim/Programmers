const citations = [3, 0, 6, 1, 5]


const solution = (citations) => {
  let answer = 0;
  citations.sort((a,b) => b-a)
  for (let i = 1; i <= citations.length; i++) {
    if (citations[i-1] >= i) {
      answer = i
    }

  }
  return answer;
}