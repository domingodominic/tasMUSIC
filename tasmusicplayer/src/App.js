import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import folkloreImg from "./img/folklore.jpg";
import theOne from "./musics/the1.mp3";
import cardigan from "./musics/cardigan.mp3";
import thelastamerican from "./musics/ThelastGreat.mp3";
import exile from "./musics/exile.mp3";
import tearsRicochet from "./musics/mytearsricochet.mp3";
import mirrorball from "./musics/mirrorball.mp3";
import seven from "./musics/seven.mp3";
import august from "./musics/august.mp3";
import trying from "./musics/thisismetrying.mp3";
import invisibleString from "./musics/invisiblestring.mp3";
import illicit from "./musics/illicit.mp3";
import madwoman from "./musics/madwoman.mp3";
import epiphany from "./musics/epiphany.mp3";
import betty from "./musics/betty.mp3";
import peace from "./musics/peace.mp3";
import hoax from "./musics/hoax.mp3";

function App() {
  const [musicIndex, setMusicIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isToggle, setToggle] = useState(false);

  function toggle() {
    setToggle(!isToggle);
  }

  const musicData = [
    {
      title: "The 1",
      url: theOne,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Cardigan",
      url: cardigan,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "The last great american dynasty",
      url: thelastamerican,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Exile",
      url: exile,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "My tears ricochet",
      url: tearsRicochet,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Mirrorball",
      url: mirrorball,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Seven",
      url: seven,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "August",
      url: august,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },

    {
      title: "This is me trying",
      url: trying,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Illicit affairs",
      url: illicit,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Invisible string",
      url: invisibleString,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Mad woman",
      url: madwoman,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Epiphany",
      url: epiphany,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Betty",
      url: betty,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Peace",
      url: peace,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Hoax",
      url: hoax,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
    },
  ];

  const audioRef = useRef(null);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSongHandler = () => {
    setIsPlaying(true);
    setMusicIndex((prevIndex) => (prevIndex + 1) % musicData.length);
  };

  const prevSongHandler = () => {
    setIsPlaying(true);
    setMusicIndex((prevIndex) =>
      prevIndex === 0 ? musicData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    audioRef.current.onloadedmetadata = () => {
      setDuration(audioRef.current.duration);
    };

    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  }, []);

  return (
    <div className="App">
      <button className="toggle--btn" onClick={toggle}>
        {isToggle ? <i class="bi bi-x-lg"></i> : <i class="bi bi-list"></i>}
      </button>
      <div
        className="musicList"
        style={{
          right: isToggle ? "0" : "-100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul className="list--music">
          {musicData.map((song, i) => (
            <li
              className="list--active"
              onClick={() => {
                setMusicIndex(i);
                setIsPlaying(true);
              }}
            >
              {song.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="music--container">
        <img
          className="image"
          src={musicData[musicIndex].img}
          alt={musicData[musicIndex].album + " Album"}
        />
        <h5>{musicData[musicIndex].title}</h5>
        <p className="artist">{musicData[musicIndex].artist}</p>
        <input
          type="range"
          value={currentTime}
          max={duration}
          id="range"
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }}
        />

        <div>
          <div className="buttons">
            <button className="rewind" onClick={prevSongHandler}>
              <i class="bi bi-rewind"></i>
            </button>
            <button className="playAndPause" onClick={playPauseHandler}>
              {isPlaying ? (
                <i class="bi bi-pause"></i>
              ) : (
                <i class="bi bi-play"></i>
              )}
            </button>
            <button className="forward" onClick={nextSongHandler}>
              {" "}
              <i class="bi bi-fast-forward"></i>
            </button>
          </div>
          <audio
            style={{ display: "none" }}
            ref={audioRef}
            src={musicData[musicIndex].url}
            controls
            autoPlay
          />
        </div>
      </div>
    </div>
  );
}

export default App;
