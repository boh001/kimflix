import HomePresenter from "./HomePresenter";
import { useDispatch, useSelector } from "react-redux";

import React, { useEffect, useState } from "react";
import { moviesApi } from "api";
import { onData } from "modules/reducers/data";
import { onLoad } from "modules/reducers/loading";

export default () => {
  const [top, setTop] = useState();
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
        dispatch(onLoad(false));
      } catch (error) {
        console.log(error);
      }
    }
    upData();
  }, []);
  const {
    data: {
      content: { nowPlaying, upcoming, latest, popular },
    },
  } = useSelector((state) => state);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      latest={latest}
      popular={popular}
      top={top}
      setTop={setTop}
    />
  );
};
