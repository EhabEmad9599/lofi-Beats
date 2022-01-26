import React, { useState } from "react";

const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo }) => {

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

  // start change play icon 

  const getBadgeClass = () => {
    let classes = 'fas fa-2x fa-';
    classes += isPlaying === true ? 'pause' : 'play';
    return classes;
  }

  // End change play icon 

  //Start format Time
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  // End format Time


  // start Input Slider Update 
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  }
  // End Input Slider Update 

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

    </article>
  );
};

export default Player;

