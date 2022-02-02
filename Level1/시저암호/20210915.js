const s = "a";
const n = 1;


const solution = (s, n) => {
  let result = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      result += ' '
    } else {
      let code = s.charCodeAt(i);
      let newCode = code + n
      if (code > 64 && code < 91 && newCode > 90) {
        newCode = 65 + newCode - 91
      } if (code > 96 && code < 123 && newCode > 122) {
        newCode = 97 + newCode - 123
      }
      result += String.fromCharCode(newCode)
    }
  }
  return result
}