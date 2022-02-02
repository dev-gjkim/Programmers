const strings = ["sun", "bed", "car"]
const n = 1;


const solution = (strings, n) => {
  var answer = strings.sort((a, b) => {
    if (a[n] > b[n])
      return 1;
    if (a[n] < b[n])
      return -1;
    if (a[n] === b[n]) {
      if (a > b) {
        return 1
      } if (a < b) {
        return -1
      } if (a === b) {
        return 0
      }
    }
  })
  return answer;
}