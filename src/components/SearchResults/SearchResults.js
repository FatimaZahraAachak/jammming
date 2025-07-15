import Track from "../Track/Track";
function SearchResults({ tracks, handleAddNewTrack }) {
    const handleClick=(t)=>{
        handleAddNewTrack(t);
    }
    return <div>
        {tracks.map((track)=><div>
            <Track track={track} onActionClick={handleClick} buttonLabel="+"/>
        </div>)}
    </div>;
}

export default SearchResults;