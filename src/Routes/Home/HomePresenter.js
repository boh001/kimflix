import React from "react";
import TodayM from "Components/TodayM/TodayM";
import styled from "styled-components";

const Absolute = styled.div`
  width: 100%;
  height: 500px;
  background-color: red;
  position: absolute;
  opacity: 0.5;
  top: 500px;
  padding: 45px;
`;
export default () => {
  return (
    <>
      <TodayM />
      <Absolute></Absolute>
    </>
  );
};
