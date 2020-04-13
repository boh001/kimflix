import styled from "styled-components";
import { color } from "Components/variable";
export const DetailFrame = styled.div`
  position: absolute;
  display: ${(props) => (props.detail ? "flex;" : "none;")};
  flex-direction: column;
  opacity: ${(props) => (props.detail ? "1;" : "0;")};
  top: 460px;
  width: 100%;
  height: 475px;
  transition: all ease 0.5s;

  background-color: red;
  background-image: url("https://esllab.b-cdn.net/wp-content/themes/yootheme/cache/intermediate-movieshowtimes-pex-72b72c82.jpeg");
  background-size: cover;
  &:before {
    content: "";
    background-color: black;
    position: absolute;
    width: 50%;
    height: 100%;
  }
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
