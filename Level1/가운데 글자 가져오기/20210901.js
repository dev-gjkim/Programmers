const s = "abcde"


const solution = (s) => {
    const leng = s.length;
    return s.slice(Math.floor((leng - 1) / 2), Math.floor(leng / 2) + 1);
}