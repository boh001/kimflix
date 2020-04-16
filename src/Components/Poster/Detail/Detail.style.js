import styled from "styled-components";
import { center } from "Components/variable";
export const DetailFrame = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.detail ? "1;" : "0;")};
  top: 360px;
  width: 100%;
  margin-left: ${(props) => `${props.line}%`};
  height: ${(props) => (props.detail ? "550px;" : "0px;")};
  transition: all ease 0.5s;

  &:before {
    content: "";
    background: linear-gradient(to left, transparent, black 30%);
    position: absolute;
    width: 60%;
    height: 100%;
    z-index: 99;
  }
`;
export const DetailImg = styled.div`
  background-image: url(${(props) =>
    `https://image.tmdb.org/t/p/w300${props.url}`});
  background-size: cover;
  width: 70%;
  height: 100%;
  position: absolute;
  right: 0;
`;

export const DetailMain = styled.div`
  width: 50%;
  height: 100%;
  padding: 0px 0px 50px 50px;
  z-index: 999;
  position: relative;
`;
export const DetailName = styled.div`
  font-size: 0.6em;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  z-index: 999;
`;
export const DetailDes = styled.div`
  font-size: 0.2em;
  z-index: 999;
  line-height: 25px;
  color: #565656;
`;
export const DetailMore = styled.div`
  z-index: 999;
`;
export const DetailPage = styled.div`
  z-index: 999;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: red;
  ${center};
`;
export const DetailClose = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 999;
  font-size: 0.22em;
  cursor: pointer;
`;