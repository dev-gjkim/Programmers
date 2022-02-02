const s = 'a234'


const solution = (s) => {
    return (s.length === 4 || s.length === 6) && s.split('').every(nn => !Number.isNaN(parseInt(+nn)));
}