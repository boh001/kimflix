import styled from "styled-components";
import test from "assets/test.mp4";
import { Link } from "react-router-dom";
import { color, center } from "Components/variable";
export const Frame = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  font-size: 100px;
`;
export const Content = styled.video.attrs((props) => ({
  src: test,
  type: "video/mp4",
  muted: props.sound ? false : "muted",
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ContentInfo = styled.div`
  top: 90px;
  left: 45px;
  position: absolute;
  width: 450px;
  display: grid;
  grid-gap: 20px;
`;
export const ContentName = styled.div`
  font-size: 0.7em;
`;
export const ContentRank = styled.div`
  font-size: 0.2em;
  font-weight: bold;
`;
export const ContentDes = styled.div`
  font-size: 0.15em;
  line-height: 25px;
`;
export const ContentLinks = styled.div`
  font-size: 0.12em;
  display: flex;
`;

export const ContentSub = styled.div`
  position: absolute;
  height: 30px;
  right: 0px;
  bottom: 150px;
  display: flex;
  align-items: center;
`;
export const ContentControl = styled.div`
  ${(props) => (props.play ? center : "display:none;")}

  z-index: 1;
  position: relative;
  font-size: 0.15em;
  height: 30px;
  width: 30px;
  margin-right: 20px;
  border-radius: 50%;
  cursor: pointer;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${color.black};
    opacity: 0.5;
    top: 0;
    right: 0;
    z-index: -1;
    border: 1px solid ${color.white};
    border-radius: 50%;
  }
  &:hover {
    transform: scale(1.1);
    ::after {
    }
  }
`;
export const ContentOld = styled.div`
  width: 90px;
  height: 100%;
  position: relative;
  padding-left: 10px;
  z-index: 1;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border-left: 3px solid ${color.white};
    background-color: ${color.black};
    opacity: 0.5;
    top: 0;
    right: 0;
    z-index: -1;
  }
`;
export const Old = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 29px;
  background-color: #4fa855;
  font-size: 0.1em;
  ${center}
`;
export const Ptage = styled.p`
  transform: scale(0.5);
  color: black;
  text-align: center;
  line-height: 12px;
  font-weight: bold;
`;
