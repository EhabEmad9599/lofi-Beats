import React from "react";

const LibrarySong = ({ songList, setCurrentSong }) => {

  const songSelectHandler = (song) => {
    setCurrentSong(song)
  }

  return (
    <>
      {songList.map((song) => (
        <section onClick={() => songSelectHandler(song)} key={song.id} className="library-song">
          <img src={song.cover} alt={song.name} />
          <div className="song-info">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
          </div>
        </section>
      ))}
    </>
  );
};

export default LibrarySong;
