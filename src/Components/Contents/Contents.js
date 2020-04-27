import React, { useCallback, useState, useRef } from "react";
import { useSelector } from "react-redux";
import {
  ContentsFrame,
  ContentsName,
  ContentsBody,
  Relative,
} from "./Contents.style";
import Loading from "Components/Loading/Loading";
import Poster from "Components/Poster/Poster";

export default ({ content, title, setTop }) => {
  const { loading } = useSelector((state) => state.loading);
  const [show, setShow] = useState(false);
  const [margin, setMargin] = useState(0);
  const sliderRef = useRef();
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
      <ContentsFrame>
        <ContentsName>{title}</ContentsName>

        {loading ? (
          <Loading />
        ) : (
          <>
            <ContentsBody show={show} margin={margin} ref={sliderRef}>
              {content.map((p, key) => {
                const { poster_path, id } = p;
                return <Poster key={key} id={id} poster_path={poster_path} />;
              })}
            </ContentsBody>
          </>
        )}
      </ContentsFrame>
    </Relative>
  );
};
