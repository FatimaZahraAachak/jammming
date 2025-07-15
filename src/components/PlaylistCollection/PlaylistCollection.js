import { useState } from "react";
import Playlist from "../Playlist/Playlist";
import Track from "../Track/Track";
function PlaylistCollection({ handleAddNewPlaylist, myPlaylists,mytracks }) {
    const [playlistName, setPlaylistName] = useState("");
    const handleChange = (event) => {
        setPlaylistName(event.target.value);
    }
    const handleSavePlaylist = () => {
        handleAddNewPlaylist({ name: playlistName, songs: mytracks });
        setPlaylistName('');
    }
    console.log(myPlaylists)
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
            <Playlist mytracks={mytracks}/>
            <div>
                {myPlaylists.map((myPlaylist) => 
                    <div>
                        <p>{myPlaylist.name}</p>
                        {myPlaylist.songs.map((song) =>
                            <Track track={song}/>
                        )}
                    </div>

                )}
            </div>


        </div>
    );
}

export default PlaylistCollection;