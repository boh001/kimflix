import { color, center } from "Components/variable";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BtnLink = styled(Link)`
  border: none;
  ${center};
  padding: 10px 30px;
  height: 35px;
  position: relative;
  margin-right: 10px;
  border-radius: 2px;
  font-weight: bold;
  display: flex;
  align-content: center;
  color: black;
  transition: all ease 0.1s;
  z-index: 1;
  & > svg {
    margin-right: 10px;
  }
  :hover {
    transform: scale(1.05);
  }
  &:after {
    content: "";

    background-color: ${color.black};
    opacity: 0.4;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
  @media screen and (max-width: 768px) {
    height: 25px;
    padding: 5px 15px;
    & > span {
      display: none;
    }
  }
  @media screen and (max-width: 478px) {
    height: 20px;
    padding: 5px 10px;
    & > span {
      display: none;
    }
  }
`;
