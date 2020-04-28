import React from "react";
import TodayM from "Components/TodayM/TodayM";
import Contents from "Components/Contents/Contents";
import Loading from "Components/Loading/Loading";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload";

export default ({ nowPlaying, upcoming, latest, popular }) => {
  const {
    loading: { home: loading },
  } = useSelector((state) => state.loading);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TodayM />
          <Contents title={"현재 상영작"} content={nowPlaying} />
          <LazyLoad height={100}>
            <Contents title={"상영 예정작"} content={upcoming} />
          </LazyLoad>
          <LazyLoad height={100}>
            <Contents title={"최신 상영작"} content={latest} />
          </LazyLoad>
          <LazyLoad height={100}>
            <Contents title={"인기 상영작"} content={popular} />
          </LazyLoad>
        </>
      )}
    </>
  );
};
