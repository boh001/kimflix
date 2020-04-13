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
export default () => {
  return (
    <>
      <TodayM />
      <Absolute>
        <Contents />
      </Absolute>
    </>
  );
};
