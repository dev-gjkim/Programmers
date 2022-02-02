const s = "Ppyy"


const solution = (s) => {
  let arr = 0;

  for (let i = 0; i < s.length; i++) {
    let str = s[i].toLowerCase();
    if (str === 'p') {
      arr++
    } else if (str === 'y') {
      arr--
    }
  }
  return !arr;
}