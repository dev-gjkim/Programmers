const n = 78


const solution = (n) => {

    const binary = n.toString(2);
    const nLength = binary.split('').filter(nn => nn ==='1').length;

    let num = n+1;
    while(true){
        const numLength = num.toString(2).split('').filter(a=> a ==='1').length;
        if(numLength === nLength){
            break;
        }
        num++
    }
    return num
}

console.log(solution(n))