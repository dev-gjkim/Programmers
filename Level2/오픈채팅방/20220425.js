const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]

const solution = (record) => {

    const usersId = {}
    const recordData = record.reduce((pre, cur, idx, arr) => {
      const data = cur.split(' ');
      if (data[2]) {
        usersId[data[1]] = data[2]
      }
      pre.push({ id: data[1], action: data[0] });
     
      return pre
    }, [])
    const answer = []
    recordData.forEach(data => {
      if (data.action == 'Enter') {
        answer.push(`${usersId[data.id]}님이 들어왔습니다.`)
      } else if (data.action == 'Leave') {
        answer.push(`${usersId[data.id]}님이 나갔습니다.`)
      }
    })
  
    return answer;
  }