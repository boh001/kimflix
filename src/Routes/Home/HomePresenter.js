import React from "react";
import TodayM from "Components/TodayM/TodayM";
import styled from "styled-components";
import Contents from "Components/Contents/Contents";

const Absolute = styled.div`
  width: 100%;
  height: 500px;
  background-color: red;
  position: absolute;
  opacity: 0.5;
  top: 450px;
  padding: 45px;
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
