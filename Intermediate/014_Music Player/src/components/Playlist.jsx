import React from 'react';

const Playlist = ({ musicData, currentTrackIndex, onTrackSelect, isPlaying }) => {
  return (
    <div className="playlist">
      <h3>Playlist</h3>
      <div className="playlist-tracks">
        {musicData.map((track, index) => (
          <div
            key={track.id}
            className={`playlist-track ${index === currentTrackIndex ? 'active' : ''}`}
            onClick={() => onTrackSelect(track, index)}
          >
            <img src={track.cover} alt={track.title} className="track-cover" />
            <div className="track-info">
              <h4>{track.title}</h4>
              <p>{track.artist}</p>
            </div>
            <div className="track-duration">
              {index === currentTrackIndex && isPlaying ? (
                <div className="playing-animation">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : (
                <span>{track.duration}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;