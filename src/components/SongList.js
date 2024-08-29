import React from 'react';

function SongList({ songs, onSelectSong }) {
  return (
    <div className="song-list">
      <input type="text" className="search-bar" placeholder="Search Song, Artist" />
      {songs.map(song => (
        <div key={song.id} className="song-item" onClick={() => onSelectSong(song)}>
          <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.title} />
          <div className="song-info">
            <div className="song-title">{song.title}</div>
            <div className="song-artist">{song.artist}</div>
          </div>
          <div className="song-duration">{song.duration}</div>
        </div>
      ))}
    </div>
  );
}

export default SongList;
