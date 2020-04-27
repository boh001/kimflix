import styled from "styled-components";
import { color, center } from "Components/variable";
export const Frame = styled.div`
  width: 100%;
  ${center};
`;
export const DetailFrame = styled.div`
  width: 1400px;
  min-height: 100vh;
  font-size: 100px;
  ${center};
  flex-direction: column;
`;
export const DetailBg = styled.img.attrs((props) => ({
  src: `https://image.tmdb.org/t/p/w300${props.url}`,
}))`
  object-fit: cover;
  width: 100%;
  height: 700px;
  filter: grayscale(100%);
`;
export const DetailImg = styled.img.attrs((props) => ({
  src: `https://image.tmdb.org/t/p/w300${props.url}`,
}))`
  object-fit: cover;
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
  font-size: 0.35em;
  font-weight: bold;
`;
export const DetailTitle = styled.div``;

export const DetailDate = styled.div`
  padding: 0px 20px;
`;
export const DetailBtn = styled.div`
  height: 35px;
  border: 1px solid white;
  font-size: 0.7em;
  padding: 25px 10px;
  ${center};
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;
export const DetailSub = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0px;
  font-size: 0.2em;
`;
export const DetailVote = styled.div`
  padding: 0px 5px;
`;
export const DetailGenres = styled.div`
  padding: 0px 10px;
`;
export const DetailGenre = styled.span`
  padding-right: 5px;
  ::after {
    content: "|";
    padding-left: 5px;
  }
  :last-child {
    :after {
      content: "";
    }
  }
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
  font-size: 0.2em;
  line-height: 25px;
`;
export const DetailSubDes = styled.div`
  font-size: 0.3em;
  padding: 15px 0px;
`;
export const DetailCasts = styled.div`
  margin-top: 150px;
  padding: 20px 50px;
  width: 100%;
`;
export const DetailCast = styled.div`
  font-size: 0.3em;
  padding: 10px 0px;
  border-bottom: 2px solid ${color.red};
`;
export const DetailCasting = styled.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(100px, 1fr);
  grid-auto-flow: column;
  padding: 50px 0px;
`;
export const DetailWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const DetailCastImg = styled.img.attrs((props) => ({
  src: `https://image.tmdb.org/t/p/w300${props.url}`,
}))`
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;
export const DetailName = styled.div`
  ${center};
  width: 100%;
  padding: 10px 0px;
  font-size: 0.2em;
  text-align: center;
`;
