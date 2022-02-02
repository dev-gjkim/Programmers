const a = 5;
const b = 24;


const solution = (a, b) => {
    const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = 0;
    for (let i = 0; i < a; i++) {
        days += month[i]
    }
    days += b
    const dd = days % 7
    return week[dd ? dd - 1 : 6]
}
