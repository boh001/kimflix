import React from "react";
import TodayM from "Components/TodayM/TodayM";
import styled from "styled-components";
import Contents from "Components/Contents/Contents";
import { color } from "Components/variable";

export default ({ nowPlaying, upcoming, latest, popular, top, setTop }) => {
  return (
    <>
      <TodayM />
      <Contents title={"현재 상영작"} content={nowPlaying} />
      <Contents title={"상영 예정작"} content={upcoming} />
      <Contents title={"최신 상영작"} content={latest} />
      <Contents title={"인기 상영작"} content={popular} />
    </>
  );
};
