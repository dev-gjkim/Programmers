const N = 4;
const costs = [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]


// 최소신장트리 이용
const solution = (N, costs) => {
    let answer = 0;
    const parent = Array.from(Array(N), ((v, i) => i))
    costs.sort((a, b) => a[2] - b[2]);

    const find = (parent, x) => {
        if (parent[x] === x) {
            return x
        }

        return find(parent, parent[x])
    }
    const union = (parent, src, dst) => {
        const srcParent = find(parent, src);
        const dstParent = find(parent, dst);

        const index = Math.max(srcParent, dstParent)
        const newParent = Math.min(srcParent, dstParent)
        parent[index] = newParent
    }
    const checkCycle = (parent, src, dst) => {
        return find(parent, src) === find(parent, dst)
    }

    costs.forEach(([src, dst, cost]) => {
        if (!checkCycle(parent, src, dst)) {
            answer += cost;
            union(parent, src, dst)
        }
    })

    return answer
}

console.log(solution(N, costs))