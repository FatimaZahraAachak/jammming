function Track({ track, onActionClick, buttonLabel }) {
    return (
        <div className="track-card">
            <div className="track-info">
                <h2 className="track-title">{track.title}</h2>
                <p className="track-singer">{track.singer}</p>
                <button className="track-button" onClick={() => onActionClick(track)}>{buttonLabel}</button>
            </div>
        </div>
    );
}

export default Track;