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
  padding: 20px 80px 0px 400px;
  position: relative;
`;
export const DetailMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: red;
  padding: 10px 0px;
`;
export const DetailTitle = styled.div``;

export const DetailDate = styled.div`
  padding: 0px 10px;
`;
export const DetailBtn = styled.div`
  background-color: pink;
  width: 50px;
  height: 30px;
`;
export const DetailSub = styled.div`
  width: 100%;
  background-color: green;
`;
export const DetailVote = styled.div``;
export const DetailGenres = styled.div``;
export const DetailRuntime = styled.div``;
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
