import { useState } from "react";
import Playlist from "../Playlist/Playlist";
import Track from "../Track/Track";
import './PlaylistCollection.css'
import SavedPlaylist from "./SavedPlaylist/SavedPlaylist.js";

function PlaylistCollection({ handleAddNewPlaylist, handleRemoveNewTrack, myPlaylists, mytracks, handleDeletPlaylist, handleRemoveSongFromSavedPlaylist, handleSaveNewNamePlaylist, allTracks }) {
    const [playlistName, setPlaylistName] = useState("");
    const handleChange = (event) => {
        setPlaylistName(event.target.value);
    }
    const handleSavePlaylist = () => {
        handleAddNewPlaylist({ name: playlistName, songs: mytracks });
        setPlaylistName('');
    }
    const handleDelete = (nameToDelete) => {
        handleDeletPlaylist(nameToDelete);
    }
    const handleRemoveSong = (playlistName, trackToRemove) => {
        handleRemoveSongFromSavedPlaylist(playlistName, trackToRemove);
    };

    return (
        <div className="playlist-collection">
            <div className="playlist-card">
                <input type="text"
                    name="name"
                    id="name"
                    value={playlistName}
                    onChange={handleChange}
                    className="playlist-input"
                    placeholder="name your Playlist"
                    required />
                <button onClick={handleSavePlaylist} className="save-playlist-button" >Save</button>
            </div>
            <Playlist allTracks={allTracks} mytracks={mytracks} handleRemoveNewTrack={handleRemoveNewTrack} />
            <div className="saved-playlists">
                {myPlaylists.map((myPlaylist, index) =>
                    <SavedPlaylist allTracks={allTracks} myPlaylist={myPlaylist} handleDelete={handleDelete} handleRemoveSong={handleRemoveSong} handleSaveNewNamePlaylist={(newName) =>handleSaveNewNamePlaylist(newName,index)} />

                )}
            </div>


        </div>
    );
}

export default PlaylistCollection;