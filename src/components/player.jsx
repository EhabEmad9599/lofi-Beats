import React, { useRef, useState } from "react";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  //Ref
  const audioRef = useRef(null);
  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  // start check if the song is playing
  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }
  // End check if the song is playing


  // start change play icon 

  const getBadgeClass = () => {
    let classes = 'fas fa-2x fa-';
    classes += isPlaying === true ? 'pause' : 'play';
    return classes;
  }

  // End change play icon 


  // start update song time
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  //Start format Time
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  // End format Time

  // End update song time

  // start Input Slider Update 
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  }
  // End Input Slider Update 

  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  return (
    <article className="player">
      <section className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        ></input>
        <p>{getTime(songInfo.duration)}</p>
      </section>

      <section className="section play-control">
        <i className="fas fa-step-backward fa-2x"></i>
        <i onClick={playSongHandler} className={getBadgeClass()}></i>
        <i className="fas fa-step-forward fa-2x"></i>
      </section>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onLoadedData={autoPlayHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </article>
  );
};

export default Player;

