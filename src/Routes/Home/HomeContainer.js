import HomePresenter from "./HomePresenter";
import React, { useState } from "react";
import { useEffect } from "react";
import { popular, latest, nowPlaying, upcoming } from "api";

export default () => {
  const [movies, setMovies] = useState([
    { nowPlaying: null, upcoming: null, popular: null, latest: null },
  ]);
  useEffect(() => {
    async function upData() {
      try {
        const nowPlayingD = await nowPlaying();
        const upcomingD = await upcoming();
        const popularD = await popular();
        const latestD = await latest();
        setMovies({
          nowPlaying: nowPlayingD.data.results,
          upcoming: upcomingD.data.results,
          popular: popularD.data.results,
          latest: latestD.data.results,
        });
      } catch (error) {
        console.log(error);
      }
    }
    upData();
  }, []);
  console.log(movies);

  return <HomePresenter movies={movies} />;
};
