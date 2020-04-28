import HomePresenter from "./HomePresenter";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { moviesApi } from "api";
import { onData } from "modules/reducers/data";
import { onLoadHome } from "modules/reducers/loading";

export default () => {
  const dispatch = useDispatch();
  const {
    data: {
      content: { nowPlaying, upcoming, latest, popular },
    },
  } = useSelector((state) => state);
  useEffect(() => {
    async function upData() {
      try {
        const {
          data: { results: nowPlaying },
        } = await moviesApi.nowPlaying();
        const {
          data: { results: upcoming },
        } = await moviesApi.upcoming();
        const {
          data: { results: popular },
        } = await moviesApi.popular();
        const {
          data: { results: latest },
        } = await moviesApi.popular();
        const data = {
          nowPlaying,
          upcoming,
          popular,
          latest,
        };
        dispatch(onData(data));
        dispatch(onLoadHome(false));
      } catch (error) {
        console.log(error);
      }
    }
    upData();
    return () => dispatch(onLoadHome(true));
  }, []);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      latest={latest}
      popular={popular}
    />
  );
};
