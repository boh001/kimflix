import React from "react";
import TodayM from "Components/TodayM/TodayM";
import styled from "styled-components";
import Contents from "Components/Contents/Contents";
import { color } from "Components/variable";

const Absolute = styled.div`
  width: 100%;
  position: absolute;
  top: 450px;
  &:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }
`;
const Main = styled.div`
  width: 100%;
  padding-top: 130px;
  margin-top: ${(props) => `${props.top}px`};
  transition: all ease 0.5s;
`;
export default ({ nowPlaying, upcoming, latest, popular, top, setTop }) => {
  return (
    <>
      <TodayM />
      <Absolute>
        <Contents
          title={"Now Playing Contents"}
          content={nowPlaying}
          setTop={setTop}
        />
      </Absolute>
      <Main top={top}>
        <Contents title={"Upcoming Contents"} content={upcoming} />
        <Contents title={"Latest Contents"} content={latest} />
        <Contents title={"Popular Contents"} content={popular} />
      </Main>
    </>
  );
};
