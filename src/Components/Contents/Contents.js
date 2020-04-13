import React, { useCallback, useState } from "react";
import {
  ContentsFrame,
  ContentsName,
  ContentsBody,
  Relative,
} from "./Contents.style";
import Slider from "Components/Slider/Slider";
import Poster from "../Poster/Poster";
import { useSelector } from "react-redux";

export default () => {
  const {
    data: {
      content: { nowPlaying, upcoming, latest, popular },
    },
  } = useSelector((state) => state);
  const [scale, setScale] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Relative>
      <ContentsFrame>
        <Slider>
          <ContentsName>오늘 한국의 top 10 콘텐츠</ContentsName>
          <ContentsBody show={show}>
            {popular.map((p, key) => {
              console.log(p);
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
                  setShow={setShow}
                  show={show}
                />
              );
            })}
          </ContentsBody>
        </Slider>
      </ContentsFrame>
    </Relative>
  );
};
