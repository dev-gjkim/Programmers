const s = "Zbcdefg"


const solution = (s) => {
    const answer = s.split('').sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join('')
    return answer;
}