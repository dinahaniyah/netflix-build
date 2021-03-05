import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import instance from "../../axios";
import { RowContainer, RowPosters, RowImage } from "./RowStyled";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=UocrDN4_cQU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <RowContainer>
      <h2>{title}</h2>
      <RowPosters>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <RowImage
                style={isLargeRow ? { maxHeight: "250px" } : {}}
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </RowPosters>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </RowContainer>
  );
}

export default Row;
