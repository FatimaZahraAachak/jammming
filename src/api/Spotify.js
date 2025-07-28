export async function searchTrackByTitle(text) {
    const response = await fetch(
        `http://192.168.1.6:5100/song/?query=${text}`,
    );

    const jsonResponse = await response.json();
    const tracks = jsonResponse.map(track => ({
        id: track.id,
        title: track.song,
        singer: track.singers,
        
    }))
    return tracks;
}

export async function getTrackById(trackId) {
    const response = await fetch(
        `http://192.168.1.6:5100/song/id=${trackId}`,
    );
    const track = await response.json()
    return track
}