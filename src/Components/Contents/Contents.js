import React from "react";
import { ContentsFrame, ContentsName, ContentsBody } from "./Contents.style";
import Slider from "Components/Slider/Slider";

export default () => {
  return (
    <ContentsFrame>
      <ContentsName>오늘 한국의 top 10 콘텐츠</ContentsName>
      <Slider>
        <ContentsBody>hi</ContentsBody>
      </Slider>
    </ContentsFrame>
  );
};
