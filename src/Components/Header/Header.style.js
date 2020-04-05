import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, center } from "Components/variable";

export const HeaderFrame = styled.div`
  width: 100%;
  height: 65px;
  position: fixed;
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5));
  padding: 10px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 100px;
  transition: all ease 0.5s;
  ${(props) => props.active && `background-color: ${color.black}`}
`;
export const HeaderLinks = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-auto-flow: column;
`;
export const HeaderLink = styled(Link)`
  font-size: 0.14em;
  ${center}
`;
export const HeaderLogo = styled(Link)`
  padding-right: 15px;
  color: ${color.red};
  font-size: 0.3em;
  font-weight: bold;
  ${center};
`;
export const HeaderSub = styled.div`
  font-size: 0.15em;
`;
export const HeaderSearch = styled.div``;
export const HeaderUser = styled.div``;
