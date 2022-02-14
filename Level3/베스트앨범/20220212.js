const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];


const solution = (genres, plays) => {
    const album = new Map();

    genres.map((genere, idx) => ({
        genere, play: plays[idx]
    })).forEach((data, idx) => {
        const { genere, play } = data;
        const { songs, total } = album.get(genere) || { songs: [], total: 0 };
        album.set(genere, {
            songs: [...songs, { play, id: idx }].sort((a, b) => b.play - a.play).splice(0, 2),
            total: total + play
        })
    })
    const answer = [...album].sort((a, b) => b[1].total - a[1].total).flatMap(m => m[1].songs).map(song => song.id)
    return answer 
}
