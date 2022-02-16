const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];


const solution = (genres, plays) => {
    const album = new Map();

    genres.map((genre, index) => ({ genre, play: plays[index] })).forEach(((data, idx) => {
        const defautData = album.get(data.genre) || { songs: [], total: 0 }
        defautData.songs.push({ ...data, id: idx })
        album.set(data.genre, {
            songs: defautData.songs.sort((a, b) => b.play - a.play).slice(0, 2),
            total: defautData.total + data.play
        })
    }))

    const answer = [...album].sort((a, b) => b[1].total - a[1].total).reduce((pre, cur, idx) => {
        pre.push(...cur[1].songs.flatMap(({ id }) => id));
        return pre;
    }, [])
    return answer;
}
