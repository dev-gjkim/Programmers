const price = 3;
const money = 20;
const count = 4;

const solution = (price, money, count) => {

    for (let i = count; i > 0; i--) {
        const a = price * i;
        money -= a
    }
    return money < 0 ? Math.abs(money) : 0;
}