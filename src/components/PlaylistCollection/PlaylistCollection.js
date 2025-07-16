import { useState } from "react";
import Playlist from "../Playlist/Playlist";
import Track from "../Track/Track";
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
        <div>
            <h1>Your Playlist collection</h1>
            <input type="text"
                name="name"
                id="name"
                value={playlistName}
                onChange={handleChange}
                placeholder="name your Playlist"
                required />
            <button onClick={handleSavePlaylist} >Save your playlist</button>
            <Playlist mytracks={mytracks} handleRemoveNewTrack={handleRemoveNewTrack}/>
            <div>
                {myPlaylists.map((myPlaylist) => 
                    <div>
                        <p>{myPlaylist.name}</p>
                        <button onClick={() => handleDelete(myPlaylist.name)}>Delete your playlist </button>
                        {myPlaylist.songs.map((song) =>
                            <Track track={song} onActionClick={() => handleRemoveSong(myPlaylist.name, song)} buttonLabel="-" />
                        )}
                        
                    </div>

                )}
            </div>


        </div>
    );
}

export default PlaylistCollection;