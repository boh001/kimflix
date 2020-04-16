import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import {
  ContentsFrame,
  ContentsName,
  ContentsBody,
  Relative,
  SlideBtn,
} from "./Contents.style";
import Loading from "Components/Loading/Loading";
import Slider from "Components/Slider/Slider";
import Poster from "Components/Poster/Poster";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default ({ content, title, setTop }) => {
  const { loading } = useSelector((state) => state.loading);
  const [show, setShow] = useState(false);
  const [margin, setMargin] = useState(0);
  const next = useCallback((e) => {
    e.preventDefault();
    setMargin(margin - 100);
  });
  const prev = useCallback((e) => {
    e.preventDefault();
    setMargin(margin + 100);
  });
  return (
    <Relative>
      <SlideBtn onClick={(e) => prev(e)} next={false} margin={margin}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </SlideBtn>
      <ContentsFrame>
        <Slider>
          <ContentsName>{title}</ContentsName>

          <ContentsBody show={show} margin={margin}>
            {loading ? (
              <Loading />
            ) : (
              <>
                {content.map((p, key) => {
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
                      line={key}
                      poster_path={poster_path}
                      backdrop_path={backdrop_path}
                      original_title={original_title}
                      overview={overview}
                      release_date={release_date}
                      show={show}
                      setShow={setShow}
                      setTop={setTop}
                    />
                  );
                })}
              </>
            )}
          </ContentsBody>
        </Slider>
      </ContentsFrame>
      <SlideBtn onClick={(e) => next(e)} next={true} margin={margin}>
        <FontAwesomeIcon icon={faChevronRight} />
      </SlideBtn>
    </Relative>
  );
};
