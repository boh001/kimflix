import React, { useCallback, useState } from "react";
import { PosterFrame, DetailBtn, Relative } from "./Poster.style";
import Detail from "./Detail/Detail";
export default ({
  poster_path,
  original_title,
  overview,
  release_date,
  setShow,
  show,
}) => {
  const [detail, setDetail] = useState(false);
  const showDetail = useCallback((e) => {
    setShow(true);
    setDetail(true);
  });
  return (
    <>
      <Relative show={show}>
        <PosterFrame src={poster_path} />
        <DetailBtn onClick={(e) => showDetail(e)}>></DetailBtn>
      </Relative>
      <Detail
        des={overview}
        name={original_title}
        date={release_date}
        detail={detail}
      />
    </>
  );
};
