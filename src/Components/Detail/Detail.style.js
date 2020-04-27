import styled from "styled-components";
import { center } from "Components/variable";
export const DetailFrame = styled.div`
  with:100%;
  min-height:100vh;
  }
`;
export const DetailBg = styled.div`
  background-image: url(${(props) =>
    `https://image.tmdb.org/t/p/w300${props.url}`});
  background-size: fill;
  width: 100%;
  height: 500px;
`;
export const DetailImg = styled.div`
  background-image: url(${(props) =>
    `https://image.tmdb.org/t/p/w300${props.url}`});
  background-size: cover;
  width: 300px;
  height: 400px;
  top: -80px;
  left: 50px;
  position: absolute;
`;
export const DetailInfo = styled.div`
  width: 100%;
  height: 300px;
  padding: 20px 0px 0px 400px;
  position: relative;
`;
export const DetailTitle = styled.div`
  font-size: 0.6em;
  display: flex;
  align-items: center;
  padding: 40px 0px;
  background-color: blue;
`;
export const DetailSub = styled.div`
  width: 100%;
  background-color: green;
`;

export const DetailDate = styled.div`
  font-size: 0.6em;
  display: flex;
  align-items: center;
  padding: 40px 0px;
  background-color: blue;
`;

export const DetailDes = styled.div`
  width: 100%;
  font-size: 0.2em;
  background-color: yellow;
`;
export const DetailMore = styled.div`
  z-index: 999;
  font-size: 0.15em;
  display: flex;
`;

export const DetailClose = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 999;
  font-size: 0.22em;
  cursor: pointer;
`;
