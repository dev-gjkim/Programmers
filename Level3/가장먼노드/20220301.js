const n = 6;
const vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];


const solution = (n, vertex) => {
    const graph = Array.from(Array(n + 1), () => []);

    for (const [src, des] of vertex) {
        graph[src].push(des);
        graph[des].push(src);
    }
    const distance = Array(n + 1).fill(0);
    const arr = [1];
    distance[1] = 1;
    while (arr.length > 0) {
        const src = arr.shift();
        for (const des of graph[src]) {
            if (!distance[des]) {
                arr.push(des);
                distance[des] = distance[src] + 1
            }
        }
    }
    return distance.filter(des => Math.max(...distance) === des).length
}

console.log(solution(n, vertex))