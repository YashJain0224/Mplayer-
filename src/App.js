import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SongList from './components/SongList';
import Player from './components/Player';
import axios from 'axios';

function App() {
  const [activeTab, setActiveTab] = useState('foryou');
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    axios.get('https://cms.samespace.com/items/songs')
      .then(response => {
        setSongs(response.data.data);
        setSelectedSong(response.data.data[0]); // Set the first song as default
      });
  }, []);

  return (
    <div className="app">
      <Header onTabChange={setActiveTab} activeTab={activeTab} />
      <div className="main-content">
        <div className="left-content">
          <SongList songs={songs} onSelectSong={setSelectedSong} />
        </div>
        {selectedSong && <Player song={selectedSong} />}
      </div>
    </div>
  );
}

export default App;
