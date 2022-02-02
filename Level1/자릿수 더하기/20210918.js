const n = 987;


const solution = (n) => {
  const str = n.toString();
  let answer = 0
  for (let i = 0; i < str.length; i++) {
    answer += parseInt(str[i])
  }

  return answer;
}