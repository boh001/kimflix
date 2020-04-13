import HomePresenter from "./HomePresenter";
import { useDispatch } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { moviesApi } from "api";
import { onData } from "modules/reducers/data";

export default () => {
  const dispatch = useDispatch();
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
      } catch (error) {
        console.log(error);
      }
    }
    upData();
  }, []);

  return <HomePresenter />;
};
