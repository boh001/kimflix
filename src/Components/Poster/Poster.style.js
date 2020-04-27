import styled from "styled-components";
import { color } from "Components/variable";

export const PosterFrame = styled.img.attrs((props) => ({
  src: `https://image.tmdb.org/t/p/w300${props.src}`,
}))`
  object-fit: cover;
  width: 250px;
  height: 300px;
  border-radius: 10px;
  position: relative;
`;

export const Relative = styled.div`
  display: flex;
  transition: all ease 0.5s;
  height: 300px;
  position: relative;
  z-index: 999;
  cursor: pointer;
  pointer-events: ${(props) => (props.show ? "none;" : "auto;")};
`;
