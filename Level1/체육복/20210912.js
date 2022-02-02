const n = 5
const lost = [3, 4]
const reserve = [1, 3, 5];


const solution = (n, lost, reserve) => {
  return n - lost.filter(a => {
    const b = reserve.find(r => Math.abs(r - a) <= 1)
    if (!b) return true
    reserve = reserve.filter(r => r !== b)
  }).length
}