import React from 'react';


const Song = ({currentSong}) => {
  return (
    <section className="song-container">
      <img src={currentSong.cover} alt={currentSong.name}></img>
      <h2>{currentSong.name}</h2>
      <h4>{currentSong.artist}</h4>
    </section>
  )
}

export default Song;