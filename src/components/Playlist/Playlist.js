import Track from "../Track/Track";
import './Playlist.css'
import { sampleTracks } from '../../App.js';
function Playlist({ mytracks, handleRemoveNewTrack }) {
    const handleRemove = (trackId) => {
        handleRemoveNewTrack(trackId);
    }
    return (
        <div className="playlist">
            {mytracks.map((trackId) => {
                const mytrack = sampleTracks.find((e)=> e.id === trackId)
                return <div key={mytrack.id} className="track-container">
                    <Track track={mytrack} onActionClick={handleRemove} buttonLabel="-" />
                </div>
            }
            )}
        </div>
    );
}

export default Playlist;