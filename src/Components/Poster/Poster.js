import React, { useCallback, useState } from "react";
import { PosterFrame, DetailBtn, Relative } from "./Poster.style";
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
      <Relative show={show} detail={detail}>
        <PosterFrame src={poster_path} />
        <DetailBtn onClick={(e) => showDetail(e)}>></DetailBtn>
      </Relative>
      <Detail
        line={line}
        des={overview}
        name={original_title}
        date={release_date}
        detail={detail}
        setDetail={setDetail}
        setShow={setShow}
        setTop={setTop}
        backdrop_path={backdrop_path}
      />
    </>
  );
};
