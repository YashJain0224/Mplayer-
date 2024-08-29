import React from 'react';
import logo from '../assets/logo.png'; // Ensure this path is correct

function Header({ onTabChange, activeTab }) {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="Spotify Logo" className="logo" />
        <span className="spotify-text">Spotify</span>
      </div>
      <div className="header-center">
        <button className={activeTab === 'foryou' ? 'active-tab' : ''} onClick={() => onTabChange('foryou')}>For You</button>
        <button className={activeTab === 'toptracks' ? 'active-tab' : ''} onClick={() => onTabChange('toptracks')}>Top Tracks</button>
      </div>
    </div>
  );
}

export default Header;
