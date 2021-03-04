import React, { useState, useEffect } from "react";
import instance from "../../axios";
import { RowContainer, RowPosters, RowImage } from "./RowStyled";

function Row({ title, fetchUrl, isLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

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
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </RowPosters>
    </RowContainer>
  );
}

export default Row;
