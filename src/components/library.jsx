import React from 'react';
import LibrarySong from './librarySong';


const Library = ({ songs, setCurrentSong }) => {
  return (
    <article className="library">
      <h2>Library</h2>
      <section className="library-songs">
        <LibrarySong setCurrentSong={setCurrentSong} songList={songs} />
      </section>
    </article>
  )
}

export default Library;