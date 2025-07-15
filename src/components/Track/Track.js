function Track({ track, onActionClick, buttonLabel }) {
    return (
        <div>
            <h2>{track.title}</h2>
            <p>{track.singer}</p>
            <button onClick={() => onActionClick(track)}>{buttonLabel}</button>
        </div>
    );
}

export default Track;