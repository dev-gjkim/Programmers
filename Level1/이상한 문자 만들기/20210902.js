const s = 'try hello world'


const solution = (s) => {
    const arr = s.split(' ');
    let result = '';
    arr.forEach((aa) => {
        result = aa.split('').reduce((pre, cur, idx) => {
            const replace = (str, isEven) => {
                return str === ' ' ? ' ' : isEven ? str.toUpperCase() : str.toLowerCase();
            };
            const replaceStr = replace(cur, idx % 2 === 0);
            return (pre += replaceStr);
        }, result);
        result += ' '
    });
    return result.slice(0, -1)
}