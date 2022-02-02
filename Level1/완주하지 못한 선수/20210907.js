const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];


const solution = (participant, completion) => {
    participant.sort();
    completion.sort()

    const result = participant.filter((p, i) => p !== completion[i])
    return result[0]
}