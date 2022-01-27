import Song from "./song";
import Player from "./player";
import Library from "./library";
import Nav from "./nav";
import data from "../data";
import { useState } from "react";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library libraryStatus={libraryStatus} setCurrentSong={setCurrentSong} songs={songs} />
    </div>
  );
}

export default App;
