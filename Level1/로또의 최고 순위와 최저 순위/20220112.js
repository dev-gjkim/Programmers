
const lottos = [44, 1, 0, 0, 31, 25]
const win_nums = [31, 10, 45, 1, 6, 19]

const solution = (lottos, win_nums) => {
    const rank = [6, 6, 5, 4, 3, 2, 1]
    const correctCnt = lottos.filter(l => win_nums.includes(l)).length
    const zeroCnt = lottos.filter(l => !l).length

    return [rank[correctCnt + zeroCnt], rank[correctCnt]]

}



console.log(solution(lottos, win_nums))