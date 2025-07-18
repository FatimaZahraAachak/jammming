import { useState } from "react";
import Playlist from "../Playlist/Playlist";
import Track from "../Track/Track";
import './PlaylistCollection.css'
import { sampleTracks } from '../../App.js';

function PlaylistCollection({ handleAddNewPlaylist, handleRemoveNewTrack, myPlaylists, mytracks, handleDeletPlaylist, handleRemoveSongFromSavedPlaylist }) {
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
            <Playlist mytracks={mytracks} handleRemoveNewTrack={handleRemoveNewTrack} />
            <div className="saved-playlists">
                {myPlaylists.map((myPlaylist) =>
                    <div className="playlist-card">
                        <div className="playlist-nameremove">
                            <p className="playlist-name">{myPlaylist.name}</p>
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

                )}
            </div>


        </div>
    );
}

export default PlaylistCollection;