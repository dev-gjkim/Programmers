const s = "bddddb";


const solution = (s) => {
  const strArr = s.split('');
  const stack = [strArr[0]];
  for (let i = 1; i < strArr.length; i++) {
    if (stack[stack.length - 1] === strArr[i]) {
      stack.pop();
    } else stack.push(strArr[i])
  }
  return !stack.length ? 1 : 0;
}