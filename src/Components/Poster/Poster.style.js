import styled from "styled-components";
import { color } from "Components/variable";

export const PosterFrame = styled.img.attrs((props) => ({
  src: `https://image.tmdb.org/t/p/w300${props.src}`,
}))`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const DetailBtn = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: rotate(90deg) scaleY(3.5);
  font-size: 0.2em;
  opacity: 0;
  visibility: hidden;
  transition: all ease 0.5s;
  &:hover {
    color: ${color.red};
  }
`;
export const Relative = styled.div`
  display: flex;
  transition: all ease 0.5s;
  width: 200px;
  position: relative;
  cursor: pointer;
  pointer-events: ${(props) => (props.show ? "none;" : "auto;")};
  &:hover {
    margin: 0px 50px;
    transform: scale(1.5);
  }
  &:hover ${DetailBtn} {
    opacity: 1;
    visibility: visible;
  }
`;
