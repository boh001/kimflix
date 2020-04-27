import styled from "styled-components";
import { color } from "Components/variable";
import { Link } from "react-router-dom";
export const PostrLink = styled(Link)``;
export const PosterFrame = styled.img.attrs((props) => ({
  src: `https://image.tmdb.org/t/p/w300${props.src}`,
}))`
  object-fit: cover;
  width: 250px;
  height: 300px;
  border-radius: 10px;
  cursor: pointer;
`;
