import React, { useState, useEffect } from "react";
import { FaPlay, FaThList } from "react-icons/fa";
import "./banner.css";
import axios from "../Axios";
import requests from "../Request";
function Banner({ children }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${
            movie && movie?.backdrop_path
          }')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">
              <FaPlay className="btn-icon" />
              Play
            </button>
            <button className="banner__button">
              {" "}
              <FaThList className="btn-icon" />
              My List
            </button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 170)}
          </h1>
        </div>
        <div className="banner--fadeBottom" /> {children}
      </header>
    </>
  );
}

export default Banner;
