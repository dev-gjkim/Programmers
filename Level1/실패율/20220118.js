const stages = [4, 4, 4, 4, 4, 4];
const N = 4;


const solution = (N, stages) => {
    const stageUser = [];

    for (let i = 1; i <= N; i++) {
        const tryStage = stages.filter(s => s >= i).length;
        const fail = stages.filter(s => s === i).length;
        stageUser.push({ stage: i, s: parseFloat(fail / tryStage) });
    }
    const answer = stageUser.sort((a, b) => b.s - a.s).map((value, idx) => value.stage);
    return answer;
}