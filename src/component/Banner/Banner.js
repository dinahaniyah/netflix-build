import React, { useState, useEffect } from "react";
import {
  BannerHeader,
  BannerContent,
  BannerTitle,
  BannerButtons,
  BannerBtn,
  BannerDesc,
  BannerFade,
} from "./BannerStyled";

import instance from "../../axios";
import requests from "../../Request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  //change to ... for long description
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <BannerHeader
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <BannerContent>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitle>
        <BannerButtons>
          <BannerBtn>Play</BannerBtn>
          <BannerBtn>My List</BannerBtn>
        </BannerButtons>
        <BannerDesc>{truncate(movie?.overview, 150)}</BannerDesc>
      </BannerContent>
      <BannerFade></BannerFade>
    </BannerHeader>
  );
}

export default Banner;
