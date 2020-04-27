import React from "react";
import TodayM from "Components/TodayM/TodayM";
import styled from "styled-components";
import Contents from "Components/Contents/Contents";
import { color } from "Components/variable";

export default ({ nowPlaying, upcoming, latest, popular, top, setTop }) => {
  return (
    <>
      <TodayM />
      <Contents title={"Now Playing Contents"} content={nowPlaying} />
      <Contents title={"Upcoming Contents"} content={upcoming} />
      <Contents title={"Latest Contents"} content={latest} />
      <Contents title={"Popular Contents"} content={popular} />
    </>
  );
};
