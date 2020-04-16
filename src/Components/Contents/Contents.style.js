import styled from "styled-components";
import { color, center } from "Components/variable";

export const ContentsFrame = styled.div`
  width: 100%;
  z-index: 99;
  padding: 0px 45px 0px 45px;
`;
export const ContentsName = styled.div`
  width: 100%;
  font-size: 0.15em;
  font-weight: bold;
  position: absolute;
  top: 15px;
`;
export const ContentsBody = styled.div`
  width: 100%;
  min-height: ${(props) => (props.show ? "955px;" : "380px")};
  display: grid;
  grid-gap: 10px;
  grid-auto-columns: minmax(1fr, auto);
  grid-auto-flow: column;
  transition: all ease 0.5s;
  align-items: flex-start;
  z-index: 999;
  padding-top: 40px;
  margin-left: ${(props) => `${props.margin}%`};
`;
export const Relative = styled.div`
  font-size: 100px;
  position: relative;
`;
export const SlideBtn = styled.div`
  display: ${(props) => props.margin == 0 && "none;"};
  top: 40px;
  position: absolute;
  height: 300px;
  width: 45px;
  font-size: 0.4em;
  z-index: 999;
  ${center};
  cursor: pointer;
  transition: all ease 0.5s;
  opacity: 0;
  :hover {
    opacity: 1;
  }
  ${(props) => (props.next ? "right:0;" : "left:0")};
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${color.bg};
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
    z-index: -1;
  }
`;
