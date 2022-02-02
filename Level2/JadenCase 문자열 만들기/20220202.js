

const s = "for the last week"

const solution = (s) => {

    const answer = s.split(' ').map(ss => ss[0] ? `${ss[0].toUpperCase()}${ss.slice(1).toLowerCase()}` : '').join(' ');
    return answer; 
}

console.log(solution(s))
