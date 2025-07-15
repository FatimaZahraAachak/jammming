import Track from "../Track/Track";
function Playlist({ mytracks, handleRemoveNewTrack }) {
    const handleRemove = (mytrack)=>{
        handleRemoveNewTrack(mytrack);
    }
    return ( 
        <div>
            <h1>My Playlist</h1>
            {mytracks.map((mytrack) =>
            <div>
                    <Track track={mytrack} onActionClick={handleRemove} buttonLabel="-" />
            </div>
            )}
        </div>
     );
}

export default Playlist;