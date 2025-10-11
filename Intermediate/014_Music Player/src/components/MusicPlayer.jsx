import React from 'react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { musicData } from '../utils/musicData';
import AudioControls from './AudioControls';
import ProgressBar from './ProgressBar';
import Playlist from './Playlist';

const MusicPlayer = () => {
  const {
    currentTrackIndex,
    setCurrentTrackIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    playPause,
    handleNext,
    handlePrevious,
    handleSeek,
    handleVolumeChange
  } = useAudioPlayer();

  const currentTrack = musicData[currentTrackIndex];

  const handleTrackSelect = (track, index) => {
    setCurrentTrackIndex(index);
    playPause(track);
  };

  return (
    <div className="music-player">
      <div className="player-main">
        <div className="current-track">
          <div className="album-art">
            <img src={currentTrack.cover} alt={currentTrack.title} />
            {isPlaying && <div className="rotate-animation"></div>}
          </div>
          <div className="track-details">
            <h2 className="track-title">{currentTrack.title}</h2>
            <p className="track-artist">{currentTrack.artist}</p>
          </div>
        </div>

        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
        />

        <AudioControls
          isPlaying={isPlaying}
          onPlayPause={() => playPause(currentTrack)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          volume={volume}
          onVolumeChange={handleVolumeChange}
        />
      </div>

      <Playlist
        musicData={musicData}
        currentTrackIndex={currentTrackIndex}
        onTrackSelect={handleTrackSelect}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default MusicPlayer;