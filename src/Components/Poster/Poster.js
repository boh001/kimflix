import React, { useCallback, useState } from "react";
import { PosterFrame, Relative } from "./Poster.style";
import Detail from "./Detail/Detail";

export default ({
  poster_path,
  backdrop_path,
  original_title,
  overview,
  release_date,
  show,
  setShow,
  setTop,
  line,
}) => {
  const [detail, setDetail] = useState(false);
  const showDetail = useCallback((e) => {
    setShow(true);
    setDetail(true);
    if (setTop) {
      setTop(550);
    }
  });
  return (
    <>
      <PosterFrame src={poster_path} />
    </>
  );
};
