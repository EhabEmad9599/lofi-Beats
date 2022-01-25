import React from "react";

const LibrarySong = ({ songList }) => {
  return (
    <>
      {songList.map((song) => (
        <section className="library-song">
          <img src={song.cover} alt={song.name} srcset="" />
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
