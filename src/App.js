import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchResults from './components/SearchResults/SearchResults.js';
import Playlist from './components/Playlist/Playlist.js';
import PlaylistCollection from './components/PlaylistCollection/PlaylistCollection.js';

export const sampleTracks = [
  { id: 1, title: "Blinding Lights", singer: "The Weeknd" },
  { id: 2, title: "Levitating", singer: "Dua Lipa" },
  { id: 3, title: "Shape of You", singer: "Ed Sheeran" },
  { id: 4, title: "Good 4 U", singer: "Olivia Rodrigo" },
  { id: 5, title: "Stay", singer: "The Kid LAROI & Justin Bieber" },
  { id: 6, title: "Easy On Me", singer: "Adele" },
  { id: 7, title: "Peaches", singer: "Justin Bieber" },
  { id: 8, title: "As It Was", singer: "Harry Styles" },
  { id: 9, title: "Flowers", singer: "Miley Cyrus" },
  { id: 10, title: "Bad Habit", singer: "Steve Lacy" }
];


function App() {
  const [filtredTracks, setFiltredTracks] = useState([]);
  const [myTracks, setMyTracks] = useState([]);
  const [myPlaylists, setPlayLists] = useState([]);

  const handleSearchSubmit = (text) => {
    const results = sampleTracks.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()));
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

  const handleSaveNewNamePlaylist = (newName,index) => {
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
          <PlaylistCollection handleAddNewPlaylist={handleAddNewPlaylist} handleDeletPlaylist={handleDeletPlaylist} handleRemoveSongFromSavedPlaylist={handleRemoveSongFromSavedPlaylist} myPlaylists={myPlaylists} mytracks={myTracks} handleRemoveNewTrack={handleRemoveNewTrack} handleSaveNewNamePlaylist={handleSaveNewNamePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
