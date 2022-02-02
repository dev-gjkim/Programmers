const arr1 = [
    [1, 2],
    [2, 3],
];
const arr2 = [
    [3, 4],
    [5, 6],
];

const solution = (arr1, arr2) => {
    const result = arr1.reduce((pre, cur, idx) => {
        const subResult = cur.reduce((subPre, subCur, subIdx) => {
            subPre.push(subCur + arr2[idx][subIdx]);
            return subPre;
        }, []);
        pre.push(subResult);
        return pre
    }, []);
    return result;
}