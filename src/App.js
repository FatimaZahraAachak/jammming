import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchResults from './components/SearchResults/SearchResults.js';
import Playlist from './components/Playlist/Playlist.js';
import PlaylistCollection from './components/PlaylistCollection/PlaylistCollection.js';

const sampleTracks = [
  { title: "Blinding Lights", singer: "The Weeknd" },
  { title: "Levitating", singer: "Dua Lipa" },
  { title: "Shape of You", singer: "Ed Sheeran" },
  { title: "Good 4 U", singer: "Olivia Rodrigo" },
  { title: "Stay", singer: "The Kid LAROI & Justin Bieber" },
  { title: "Easy On Me", singer: "Adele" },
  { title: "Peaches", singer: "Justin Bieber" },
  { title: "As It Was", singer: "Harry Styles" },
  { title: "Flowers", singer: "Miley Cyrus" },
  { title: "Bad Habit", singer: "Steve Lacy" }
];

const samplePlayLists = [
  {
    name: 'love',
    songs: [{ title: "Blinding Lights", singer: "The Weeknd" },
    { title: "Levitating", singer: "Dua Lipa" },
    { title: "Shape of You", singer: "Ed Sheeran" }]
  },
  {
    name: 'friends',
    songs: [{ title: "Flowers", singer: "Miley Cyrus" },
    { title: "Bad Habit", singer: "Steve Lacy" }]
  }
]

function App() {
  const [filtredTracks, setFiltredTracks] = useState([]);
  const [myTracks, setMyTracks] = useState([]);
  const [myPlaylists, setPlayLists] = useState([]);

  const handleSearchSubmit = (text) => {
    const results = sampleTracks.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()));
    setFiltredTracks(results);
  };

  const handleAddNewTrack = (t) => {
    const hasTrack = myTracks.some((e) => e.title === t.title);
    if (hasTrack) {
      return;
    }
    setMyTracks([...myTracks, t]);
  }
  const handleRemoveNewTrack = (mytrack) => {
    const newplaylist = myTracks.filter(item => item.title !== mytrack.title);
    setMyTracks(newplaylist);
  }
  const handleAddNewPlaylist = (newPlaylist) => {
    setPlayLists([...myPlaylists, newPlaylist]);
    setMyTracks([]);
  }
 
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar handleSubmit={handleSearchSubmit} />
      <h2>Results</h2>
      <SearchResults handleAddNewTrack={handleAddNewTrack} tracks={filtredTracks} />
      <PlaylistCollection handleAddNewPlaylist={handleAddNewPlaylist} myPlaylists={myPlaylists} mytracks={myTracks} />
    </div>
  );
}

export default App;
