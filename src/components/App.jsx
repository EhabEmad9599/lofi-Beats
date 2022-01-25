import Song from "./song";
import Player from "./player";
import Library from './library';
import data from "../data";
import { useState } from "react";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library setCurrentSong={setCurrentSong} songs={songs}/>
    </div>
  );
}

export default App;
