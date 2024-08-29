import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from '../components/SongList';

function ForYou({ onSelectSong }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('https://cms.samespace.com/items/songs')
      .then(response => {
        setSongs(response.data.data);
      });
  }, []);

  return (
    <div className="for-you-page">
      <SongList songs={songs} onSelectSong={onSelectSong} />
    </div>
  );
}

export default ForYou;
