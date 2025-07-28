import Track from "../Track/Track";
import './Playlist.css'
function Playlist({ mytracks, handleRemoveNewTrack,allTracks }) {
    const handleRemove = (trackId) => {
        handleRemoveNewTrack(trackId);
    }
    return (
        <div className="playlist">
            {mytracks.map((trackId) => {
                const mytrack = allTracks.find((e)=> e.id === trackId)
                return <div key={mytrack.id} className="track-container">
                    <Track track={mytrack} onActionClick={handleRemove} buttonLabel="-" />
                </div>
            }
            )}
        </div>
    );
}

export default Playlist;