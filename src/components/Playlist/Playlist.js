import Track from "../Track/Track";
import './Playlist.css'
function Playlist({ mytracks, handleRemoveNewTrack }) {
    const handleRemove = (mytrack) => {
        handleRemoveNewTrack(mytrack);
    }
    return (
        <div className="Playlist">
            <h1 className="Playlist-title" >My Playlist</h1>
            {mytracks.map((mytrack) =>
                <div key={mytrack.id} className="track-container">
                    <Track track={mytrack} onActionClick={handleRemove} buttonLabel="-" />
                </div>
            )}
        </div>
    );
}

export default Playlist;