import './Track.css';
function Track({ track, onActionClick, buttonLabel }) {
    return (
        <div className="track-card">
            <div className="track-info">
                <h3 className="track-title">{track.title}</h3>
                <p className="track-singer">{track.singer}</p>
            </div>
            <button className="track-button" onClick={() => onActionClick(track.id)}>{buttonLabel}</button>
        </div>
    );
}

export default Track;