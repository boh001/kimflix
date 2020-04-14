import styled from "styled-components";

export const ContentsFrame = styled.div`
  width: 100%;
  z-index: 99;
  position: relative;
  padding: 45px;
`;
export const ContentsName = styled.div`
  width: 100%;
  font-size: 0.15em;
  font-weight: bold;
  position: absolute;
  top: 50px;
`;
export const ContentsBody = styled.div`
  width: 100%;
  min-height: ${(props) => (props.show ? "955px;" : "480px")};
  display: grid;
  grid-gap: 10px;
  grid-auto-columns: minmax(1fr, auto);
  grid-auto-flow: column;
  transition: all ease 0.5s;
  align-items: flex-start;
  padding-top: 80px;
  z-index: 999;
  position: relative;
`;
export const Relative = styled.div`
  font-size: 100px;
  position: relative;
`;
