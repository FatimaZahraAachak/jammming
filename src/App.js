import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchResults from './components/SearchResults/SearchResults.js';
import Playlist from './components/Playlist/Playlist.js';
import PlaylistCollection from './components/PlaylistCollection/PlaylistCollection.js';
import  { searchTrackByTitle } from './api/Spotify.js';


function App() {
  const [filtredTracks, setFiltredTracks] = useState([]);
  const [myTracks, setMyTracks] = useState([]);
  const [myPlaylists, setPlayLists] = useState([]);
  const [allTracks, setAllTracks]=useState([])
  const handleSearchSubmit = async (text) => {
    const results = await searchTrackByTitle(text); 
    setAllTracks([...allTracks, ...results])
    setFiltredTracks(results); 
  };
  
  const handleAddNewTrack = (trackId) => {
    const hasTrack = myTracks.some((e) => e === trackId);
    if (hasTrack) {
      return;
    }
    setMyTracks([...myTracks, trackId]);
  }
  const handleRemoveNewTrack = (trackId) => {
    const newplaylist = myTracks.filter(item => item !== trackId);
    setMyTracks(newplaylist);
  }
  const handleAddNewPlaylist = (newPlaylist) => {
    setPlayLists([...myPlaylists, newPlaylist]);
    // clear the state of tracks after submitting the new playlist 
    setMyTracks([]);
  }
  const handleDeletPlaylist = (nameToDelete) => {
    const updatedPlaylist = myPlaylists.filter((Playlist) => Playlist.name !== nameToDelete);
    setPlayLists(updatedPlaylist);

  }
  const handleRemoveSongFromSavedPlaylist = (playlistName, trackToRemove) => {
    const updatedPlaylistsong = myPlaylists.map((Playlist) => {
      if (Playlist.name === playlistName) {

        const updatedsongs = Playlist.songs.filter((song) => song.title !== trackToRemove.title);
        return ({ ...Playlist, songs: updatedsongs });
      }
      return Playlist;
    });
    setPlayLists(updatedPlaylistsong);
  };

  const handleSaveNewNamePlaylist = (newName, index) => {
    const playlistToUpdate = myPlaylists[index];
    const newPlaylistToUpdate = {
      ...playlistToUpdate,
      name: newName
    }
    const newPlaylists = [...myPlaylists];
    newPlaylists[index] = newPlaylistToUpdate;
    setPlayLists(newPlaylists);
  }



  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar handleSubmit={handleSearchSubmit} />
      <div className="main-content">
        <div className="results-section">
          <h2> Search Results</h2>
          <SearchResults handleAddNewTrack={handleAddNewTrack} tracks={filtredTracks} />
        </div>
        <div className='PlaylistCollection'>
          <h2 className="collection-title">Your Playlist Collection</h2>
          <PlaylistCollection allTracks={allTracks} handleAddNewPlaylist={handleAddNewPlaylist} handleDeletPlaylist={handleDeletPlaylist} handleRemoveSongFromSavedPlaylist={handleRemoveSongFromSavedPlaylist} myPlaylists={myPlaylists} mytracks={myTracks} handleRemoveNewTrack={handleRemoveNewTrack} handleSaveNewNamePlaylist={handleSaveNewNamePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
