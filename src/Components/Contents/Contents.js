import React, { useState } from "react";
import {
  ContentsFrame,
  ContentsName,
  ContentsBody,
  Relative,
} from "./Contents.style";
import Slider from "Components/Slider/Slider";
import Poster from "Components/Poster/Poster";
import { useSelector } from "react-redux";

export default () => {
  const {
    data: {
      content: { nowPlaying, upcoming, latest, popular },
    },
    boolean: { show },
  } = useSelector((state) => state);

  return (
    <Relative>
      <ContentsFrame>
        <Slider>
          <ContentsName>Popular contents</ContentsName>
          <ContentsBody show={show}>
            {popular.map((p, key) => {
              const {
                poster_path,
                backdrop_path,
                original_title,
                overview,
                release_date,
              } = p;
              return (
                <Poster
                  key={key}
                  poster_path={poster_path}
                  backdrop_path={backdrop_path}
                  original_title={original_title}
                  overview={overview}
                  release_date={release_date}
                />
              );
            })}
          </ContentsBody>
        </Slider>
      </ContentsFrame>
    </Relative>
  );
};
