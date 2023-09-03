import React, { useState, useRef, useEffect, useContext } from "react";
import "./App.css";
import MyContext from "./MyContext";

function MusicPlayer() {
  const musicData = useContext(MyContext);
  const [musicIndex, setMusicIndex] = useState(1);

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isImgToggle, setImgToggle] = useState(false);

  function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    return formattedTime;
  }

  let onTime = formatTime(Math.floor(currentTime));
  let inTime = Math.floor(currentTime);

  const [filteredMusic, setFilteredMusic] = useState(musicData);
  const audioRef = useRef(null);

  const playPauseHandler = (e) => {
    e.stopPropagation();
    document.querySelector(".image").classList.toggle("show--img--scale");
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const checkAudioState = () => {
    let audioElement = document.querySelector(".audio");

    // Check if the audio is paused and toggle play/pause accordingly
    if (audioElement.paused) {
      setIsPlaying(false);
    }
  };
  window.onload = () => {
    checkAudioState();
  };

  const nextSongHandler = (event) => {
    event.stopPropagation();
    setIsPlaying(true);
    setMusicIndex((prevIndex) => (prevIndex % musicData.length) + 1);
  };

  const prevSongHandler = (event) => {
    event.stopPropagation();
    setIsPlaying(true);
    setMusicIndex((prevIndex) =>
      prevIndex === 1 ? musicData.length : prevIndex - 1
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

  const imageToggle = () => {
    setImgToggle(!isImgToggle);
    document.querySelector(".lyrics").classList.toggle("lyrics--show");
    document.querySelector(".image").classList.toggle("img--float");
  };
  let bgStyles, bgAppStyles;

  function checkImgUrl() {
    let currentAlbum =
      musicData.find((song) => song.id === musicIndex)?.album || "";

    if (currentAlbum === "Lover") {
      bgStyles = {
        boxShadow: `inset 0 0 0 100vw rgba(0, 0, 0, 0.2)`,
        background:
          "linear-gradient(90deg, rgba(236,169,212,1) 0%, rgba(139,194,228,1) 11%, rgba(193,185,222,1) 27%, rgba(202,192,217,1) 30%, rgba(255,236,185,1) 48%, rgba(193,185,222,1) 70%, rgba(254,170,194,1) 100%)",
      };

      // bgAppStyles = { background: `#eca9d4` };
    } else if (currentAlbum === "Fearless") {
      bgStyles = {
        background: ` linear-gradient(90deg, rgba(91,60,32,1) 0%, rgba(120,87,46,1) 51%, rgba(222,188,125,1) 100%)`,
      };
    } else if (currentAlbum === "Speaknow") {
      bgStyles = {
        background: `linear-gradient(90deg, rgba(71,42,80,1) 0%, rgba(141,89,141,1) 51%, rgba(134,78,136,1) 100%)`,
      };
    } else if (currentAlbum === "Midnights") {
      bgStyles = {
        background: ` linear-gradient(90deg, rgba(29,26,54,1) 0%, rgba(74,80,95,1) 23%, rgba(115,94,93,1) 59%, rgba(119,82,88,1) 100%)`,
      };
    } else if (currentAlbum === "reputation") {
      bgStyles = {
        background: ` linear-gradient(90deg, rgba(16,16,16,1) 0%, rgba(73,73,73,1) 37%, rgba(108,108,108,1) 76%, rgba(192,192,192,1) 100%)`,
      };
    } else {
      bgAppStyles = {
        background: `lightgray`,
      };
      bgStyles = {
        background: "rgb(72, 72, 72)",
        background: `linear-gradient(
        90deg,
        rgba(72, 72, 72, 1) 1%,
        rgba(160, 160, 160, 1) 48%,
        rgba(255, 255, 255, 1) 100%
      )`,
      };
    }
  }

  // Call the function to set bgStyles
  checkImgUrl();

  // Use the correct variable name in the style attribute
  <div style={bgStyles}>Content with dynamic background</div>;

  checkImgUrl();
  // let time = Math.floor(currentTime - audioRef.current.duration);

  function bringdown() {
    let img = document.querySelector(".image");
    let imgWidth = window.getComputedStyle(img).width;

    if (imgWidth === "320px" || imgWidth === "270px") {
      let app = document.querySelector(".App");

      let btn = document.querySelector(".buttons");
      let title = document.querySelector(".title");
      let dash = document.querySelector(".dash");
      dash.style.opacity = "0";

      img.classList.add("showImg");
      btn.style.position = "absolute";
      btn.style.right = "10%";
      btn.style.bottom = "47%";

      title.style.position = "absolute";
      title.style.bottom = "48%";
      title.style.left = "20%";
      title.style.width = "100px";
      app.classList.remove("checkHeight");
      app.classList.add("bringdown");
      let range = document.getElementById("range");

      range.style.opacity = "0";
    }
  }

  function checkHeight() {
    const appElement = document.getElementById("myApp");

    if (window.getComputedStyle(appElement).height === "100px") {
      let btn = document.querySelector(".buttons");
      let range = document.getElementById("range");
      let title = document.querySelector(".title");

      title.style.position = "static";
      title.style.marginTop = "30px";
      title.style.width = "100%";

      range.style.opacity = "1";

      btn.style.display = "block";
      btn.style.position = "relative";
      btn.style.right = "0";
      btn.style.display = "flex";
      let img = document.querySelector(".image");
      appElement.classList.add("checkHeight");
      img.classList.remove("showImg");

      let dash = document.querySelector(".dash");
      dash.style.opacity = "1";
      dash.style.top = "90px";
    }
  }
  //for search input
  function searchIt(musicD, input) {
    let filtered = musicD.filter((song) =>
      song.title.toLowerCase().includes(input.toLowerCase())
    );

    if (filtered.length > 0) {
      setFilteredMusic(filtered);
    }
  }

  return (
    <div>
      <div
        className="musicList"
        style={{
          ...bgAppStyles,
          right: "0%",
          display: "flex",
          justifyContent: "center",
          zIndex: "-2",
        }}
      >
        <div className="music--header">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              id="search"
              onChange={(e) => {
                searchIt(musicData, e.target.value);
              }}
            />
            <i class="bi bi-search"></i>
          </div>
        </div>

        <ul className="list--music">
          {filteredMusic.map((song) => (
            <div className="music--item" key={song.id}>
              <p>{song.id}</p>
              <li
                className="list--active"
                onClick={() => {
                  setMusicIndex(song.id);
                  setIsPlaying(true);
                }}
              >
                {song.title}
              </li>
              <i class="bi bi-music-note"></i>
            </div>
          ))}
        </ul>
      </div>
      <div id="myApp" onClick={checkHeight} className="App" style={bgStyles}>
        <div className="dash" onClick={bringdown}>
          <i class="bi bi-dash"></i>
        </div>

        <div className="music--container">
          <img
            className="image"
            onClick={imageToggle}
            style={{
              width: "320px",
            }}
            src={musicData.find((song) => song.id === musicIndex)?.img || ""}
            alt={
              musicData.find((song) => song.album === musicIndex)?.album +
              " Album"
            }
          />
          <p className="lyrics">
            <pre className="pre--lyrics">
              {" "}
              {musicData.find((song) => song.id === musicIndex)?.lyrics || ""}
            </pre>
          </p>
          <h5
            className="title"
            style={{
              color: "lightgray",
              textShadow: ` 0 0 10px rgba(0,0,0,0.7)`,
              marginTop: "30px",
            }}
          >
            {musicData.find((song) => song.id === musicIndex)?.title || ""}
          </h5>
          <p className="artist">
            {musicData.find((song) => song.id === musicIndex)?.artist || ""}
          </p>
          <input
            type="range"
            value={currentTime}
            max={duration}
            title="music time range"
            id="range"
            onChange={(e) => {
              audioRef.current.currentTime = e.target.value;
              setCurrentTime(e.target.value);
            }}
          />

          <div>
            <p
              style={{
                marginLeft: "250px",
                fontSize: "12px",
                color: "white",
              }}
            >
              {onTime}
            </p>
            {/* <div className="for--volume">
              <input
                className="volume"
                style={{ height: "3px" }}
                type="range"
                step="0.1"
                min="0"
                max="1"
                onChange={(e) => {
                  let val = e.target.value;
                  let audio = document.querySelector(".audio");
                  audio.volume = val;
                }}
              />
              <i
                class="bi bi-volume-up-fill"
                id="volumeUp"
                onClick={() => {
                  let vol = document.querySelector(".volume");
                  vol.classList.toggle("vol--hide");
                }}
              ></i>
            </div> */}
            <div className="buttons">
              <button className="rewind" onClick={prevSongHandler}>
                <i class="bi bi-rewind-fill"></i>
              </button>
              <button className="playAndPause" onClick={playPauseHandler}>
                {isPlaying ? (
                  <i class="bi bi-pause-fill"></i>
                ) : (
                  <i class="bi bi-play-fill"></i>
                )}
              </button>
              <button className="forward" onClick={nextSongHandler}>
                {" "}
                <i class="bi bi-fast-forward-fill"></i>
              </button>
            </div>
            <audio
              className="audio"
              onEnded={nextSongHandler}
              id="audio"
              style={{ display: "none" }}
              ref={audioRef}
              src={musicData.find((song) => song.id === musicIndex)?.url || ""}
              controls
              autoPlay
              preload="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
