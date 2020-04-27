import styled from "styled-components";
import { color, center } from "Components/variable";

export const ContentsFrame = styled.div`
  width: 1400px;
  padding: 0px 45px;
  padding-bottom: 20px;
  ${center};
  font-size: 100px;
  flex-direction: column;
`;
export const ContentsName = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 40px 0px;
  align-items: center;
  font-size: 0.35em;
  font-weight: bold;
  border-bottom: 2px solid ${color.red};
`;
export const ContentsBody = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  transition: all ease 0.5s;
  padding: 40px 0px;
`;
export const Relative = styled.div`
  width: 100%;

  position: relative;
  ${center};
  flex-direction: column;
`;
