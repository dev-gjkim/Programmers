
const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo", "apeach frodo", "muzi frodo", "frodo neo", "muzi neo", "apeach muzi"];
const k = 2;

const solution = (id_list, report, k) => {
    const newReport = new Set(report);
    const result = id_list.map(id => ({ id, reporter: new Set() }))
    report.forEach((item) => {
        const user = item.split(' ');
        const userIdx = result.findIndex(u => user[1] === u.id);
        result[userIdx].reporter.add(user[0])
    })

    const stopUserReporter = result.filter(r => r.reporter.size >= k).reduce((pre, cur, idx) => {
        pre.push(...[...cur.reporter])
        return pre
    }, [])

    const answer = id_list.map(id => stopUserReporter.filter(user => user === id).length)
    return answer;
}
