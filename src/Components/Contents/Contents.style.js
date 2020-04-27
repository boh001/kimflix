import styled from "styled-components";
import { color, center } from "Components/variable";

export const ContentsFrame = styled.div`
  width: 100%;
  z-index: 99;
  padding: 0px 45px 0px 45px;
  padding-bottom: 20px;
`;
export const ContentsName = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 0.15em;
  font-weight: bold;
`;
export const ContentsBody = styled.div`
  width: 100%;
  min-height: ${(props) => (props.show ? "955px;" : "380px")};
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  transition: all ease 0.5s;
  align-items: flex-start;
  z-index: 999;
  margin-left: ${(props) => `${props.margin}%`};
`;
export const Relative = styled.div`
  font-size: 100px;
  position: relative;
`;
