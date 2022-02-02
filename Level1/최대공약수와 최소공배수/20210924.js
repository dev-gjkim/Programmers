const n = 3;
const m = 12;


const solution = (n, m) => {
    const getGcd = (a, b) => {
        const nmg = a % b
        if (nmg === 0) {
            return b;
        } else {
            return getGcd(b, nmg)
        }
    }

    const gcd = getGcd(m, n)
    const lcm = n * m / gcd;
    return [gcd, lcm]
}