import React, { useState, useRef, useEffect } from 'react';

function Player({ song }) {
  const audioRef = useRef(new Audio(song.url));
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1); // Volume is from 0 to 1

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    // Update progress bar as the song plays
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener('timeupdate', updateProgress);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, [isPlaying, song]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleProgressClick = (e) => {
    const width = e.target.clientWidth;
    const offsetX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;
    const newTime = (offsetX / width) * duration;
    audioRef.current.currentTime = newTime;
    setProgress((newTime / duration) * 100);
  };
  
  

  return (
    <div className="player">
      <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.title} className="album-cover"/>
      <h2>{song.title}</h2>
      <h3>{song.artist}</h3>

      <div className="progress-container" onClick={handleProgressClick}>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="controls">
        <button className="control-btn previous">⏮</button>
        <button className="control-btn play-pause" onClick={handlePlayPause}>
          {isPlaying ? '⏸' : '▶️'}
        </button>
        <button className="control-btn next">⏭</button>
      </div>

      <div className="volume-control">
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
      </div>
    </div>
  );
}

export default Player;
