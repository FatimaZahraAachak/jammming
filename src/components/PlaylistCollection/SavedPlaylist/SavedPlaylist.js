import Track from "../../Track/Track";
import { sampleTracks } from '../../../App';
import { useState } from "react";
function SavedPlaylist({ handleDelete, handleRemoveSong, myPlaylist, handleSaveNewNamePlaylist }) {
    const [editNameValue, setEditNameValue] = useState("");
    const [showEditName, setShowEditName] = useState(false);
    const handleShowEdit = () => {
        setShowEditName(true);
    }
    const handleEditNameChange = (e) => {
        setEditNameValue(e.target.value);
    }
    
    const handleSaveEditedName = () => {
        setShowEditName(false);
        handleSaveNewNamePlaylist(editNameValue);
    }
   

    return (
        <div className="playlist-card">
            <div className="playlist-nameremove">
                <p className="playlist-name">{myPlaylist.name}</p>
                {showEditName ? <div>
                    <input className="edit-input" value={editNameValue} onChange={(e) => handleEditNameChange(e)} />
                    <button className="save-button" onClick={() => handleSaveEditedName()}>save</button>
                </div> : null
                }
                <button className="edit-button" onClick={() => handleShowEdit()}>✏️</button>
                <button className="delete-button" onClick={() => handleDelete(myPlaylist.name)}> - </button>
            </div>
            <div className="playlist-track">
                {myPlaylist.songs.map((trackId) => {
                    const mytrack = sampleTracks.find((e) => e.id === trackId)

                    return <Track track={mytrack} onActionClick={() => handleRemoveSong(myPlaylist.name, mytrack)} buttonLabel="-" />

                }
                )}
            </div>
        </div>
    );
}

export default SavedPlaylist;