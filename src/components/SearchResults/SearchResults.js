import './SearchResults.css'
import Track from "../Track/Track";
function SearchResults({ tracks, handleAddNewTrack }) {
    const handleClick=(trackId)=>{
        handleAddNewTrack(trackId);
    }
    return <div className='search-results'>
        {tracks.map((track) =>
            <div className='result-item'>
            <Track track={track} onActionClick={handleClick} buttonLabel="+"/>
        </div>)}
    </div>;
}

export default SearchResults;