import styled from "styled-components";
import { center } from "Components/variable";
import { Link } from "react-router-dom";
export const PostrLink = styled(Link)``;
export const PosterFrame = styled.img.attrs((props) => ({
  src: `https://image.tmdb.org/t/p/w300${props.src}`,
}))`
  ${center};
  object-fit: cover;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  cursor: pointer;
`;
