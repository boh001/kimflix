import styled from "styled-components";
import { color } from "Components/variable";
export const DetailFrame = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.detail ? "1;" : "0;")};
  top: 390px;
  width: 100%;
  height: ${(props) => (props.detail ? "475px;" : "0px;")};
  transition: all ease 0.5s;
  background-image: url("https://esllab.b-cdn.net/wp-content/themes/yootheme/cache/intermediate-movieshowtimes-pex-72b72c82.jpeg");
  background-size: cover;
  &:before {
    content: "";
    background: linear-gradient(to left, transparent, black 30%);
    position: absolute;
    width: 50%;
    height: 100%;
  }
`;
export const DetailMain = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 50px 90px 50px;
  z-index: 999;
  position: relative;
`;
export const DetailName = styled.div`
  font-size: 0.5em;
  z-index: 999;
`;
export const DetailDes = styled.div`
  font-size: 0.2em;
  z-index: 999;
`;
export const DetailMore = styled.div`
  z-index: 999;
`;
export const DetailPage = styled.div`
  z-index: 999;
`;
export const DetailClose = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 0.22em;
  cursor: pointer;
`;
