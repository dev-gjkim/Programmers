const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']


const solution = (s) => {
    const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    let answer = '';
    let numStr = ''
    for (let i = 0; i < s.length; i++) {
        let isInt = /\d/.test(s[i]);
        if (isInt) {
            answer += s[i];
        } else {
            numStr += s[i]
            let n = numArr.findIndex(i => i === numStr)
            if (n !== -1) {
                answer += n.toString();
                numStr = ''
            }
        }
    }
    return parseInt(answer)
}