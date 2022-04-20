const dartResult = '1S*2T*3S';

const solution = (dartResult) => {
    const scoreTable = { 'S': 1, 'D': 2, 'T': 3 }
    const scoreObj = dartResult.split('').reduce((pre, cur, idx) => {

        if (!Number.isNaN(Number(cur))) {
            if (!Number.isNaN(Number(pre[pre.length - 1]))) {
                pre[pre.length - 1] = `${pre[pre.length - 1]}${cur}`
            }
            else pre.push(cur)
        } else {
            pre[pre.length - 1] = `${pre[pre.length - 1]}/${cur}`
        }
        return pre
    }, [])
    const answer = scoreObj.reduce((pre, cur, idx) => {
        const arr = cur.split('/')
        let score = Math.pow(arr[0], scoreTable[arr[1]])
        if (arr.length === 3) {
            if (arr[2] === '*') {
                score *= 2
                pre[pre.length-1] = pre[pre.length-1] * 2
            } else if (arr[2] === '#') {
                score *= -1
            }
        }
        pre.push(score)
        return pre;
    }, [])
    return answer.reduce((pre,cur)=>{return pre+cur},0)

}
