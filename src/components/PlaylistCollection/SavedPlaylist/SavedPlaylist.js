import Track from "../../Track/Track";
import { useState } from "react";
import './SavedPlaylist.css'
function SavedPlaylist({ handleDelete, handleRemoveSong, myPlaylist, handleSaveNewNamePlaylist, allTracks }) {
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
                {showEditName ? <div className="part-oneedit">
                    <input className="edit-input" value={editNameValue} onChange={(e) => handleEditNameChange(e)} />
                    <button className="playlist-button" onClick={() => handleSaveEditedName()}>save</button>
                </div> : null
                }
                <div className="part-twoedit">
                    <button className="playlist-button" onClick={() => handleShowEdit()}>✏️</button>
                    <button className="playlist-button" onClick={() => handleDelete(myPlaylist.name)}> - </button>
                </div>
            </div>
            <div className="playlist-track">
                {myPlaylist.songs.map((trackId) => {
                    const mytrack = allTracks.find((e) => e.id === trackId) // await getTrackById(trackId)

                    return <Track track={mytrack} onActionClick={() => handleRemoveSong(myPlaylist.name, mytrack)} buttonLabel="-" />

                }
                )}
            </div>
        </div>
    );
}

export default SavedPlaylist;