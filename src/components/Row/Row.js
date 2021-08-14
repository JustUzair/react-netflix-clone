import axios from "../Axios";
import React, { useEffect, useState } from "react";
import "./row.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Row({ fetchURL, title, isLargeRow = false }) {
  const baseURL = `https://image.tmdb.org/t/p/original/`;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies &&
          movies.map(
            movie =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <div key={movie.id} style={{ position: "relative" }}>
                  <LazyLoadImage
                    visibleByDefault={false}
                    useIntersectionObserver={true}
                    effect="blur"
                    style={{
                      transitionProperty: "transform",
                      transitionDuration: ".45s",
                    }}
                    className={`row__poster ${
                      isLargeRow && "row__posterLarge"
                    }`}
                    src={`${baseURL}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name || "poster"}
                    title={
                      movie.name ||
                      movie.title ||
                      movie.original_title ||
                      "movie poster"
                    }
                  />
                  <div className="info">
                    {movie.name ||
                      movie.title ||
                      movie.original_title ||
                      "movie"}
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
}

export default Row;
