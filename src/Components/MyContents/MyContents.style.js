import styled from "styled-components";
import { center } from "Components/variable";
import { Link } from "react-router-dom";
export const Frame = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Main = styled.div`
  width: 1400px;
  display: grid;
  padding: 300px 50px;
  justify-content: center;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 300px);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 200px);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(200px, auto));
  }
  @media screen and (max-width: 478px) {
    grid-template-columns: minmax(auto, 200px);
  }
`;
export const Name = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  ${center};
  opacity: 0;
  z-index: 2;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 0.8em;
  }
`;
export const MyBg = styled(Link)`
  background-image: url(${(props) =>
    `https://image.tmdb.org/t/p/w300${props.url}`});
  background-size: cover;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  :hover {
    ::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.5;
    }
    ${Name} {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1200px) {
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;
