import styled from "styled-components";
import { color, center } from "Components/variable";
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
  height: 450px;
  top: -80px;
  left: 50px;
  position: absolute;
`;
export const DetailInfo = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 20px 80px 0px 400px;
  position: relative;
`;
export const DetailMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
`;
export const DetailTitle = styled.div``;

export const DetailDate = styled.div`
  padding: 0px 10px;
`;
export const DetailBtn = styled.div`
  width: 50px;
  height: 30px;
  background-color: pink;
`;
export const DetailSub = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 10px;
`;
export const DetailVote = styled.div``;
export const DetailGenres = styled.div`
  padding: 0px 10px;
`;
export const DetailRuntime = styled.div`
  :after {
    content: "분";
  }
`;
export const DetailDes = styled.div`
  width: 100%;
  padding: 10px 0px 20px 0px;
  border-top: 2px solid ${color.red};
`;
export const DetailMainDes = styled.div`
  line-height: 20px;
`;
export const DetailSubDes = styled.div`
  margin-bottom: 10px;
`;
export const DetailCasts = styled.div`
  padding: 20px 80px;
`;
