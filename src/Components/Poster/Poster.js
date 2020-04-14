import React, { useCallback, useState } from "react";
import { PosterFrame, DetailBtn, Relative } from "./Poster.style";
import Detail from "./Detail/Detail";
import { useDispatch, useSelector } from "react-redux";
import { show_true } from "modules/reducers/boolean";

export default ({ poster_path, original_title, overview, release_date }) => {
  const [detail, setDetail] = useState(false);
  const dispatch = useDispatch();
  const {
    boolean: { show },
  } = useSelector((state) => state);

  const showDetail = useCallback((e) => {
    dispatch(show_true(true));
    setDetail(true);
  });
  return (
    <>
      <Relative show={show} detail={detail}>
        <PosterFrame src={poster_path} />
        <DetailBtn onClick={(e) => showDetail(e)}>></DetailBtn>
      </Relative>
      <Detail
        des={overview}
        name={original_title}
        date={release_date}
        detail={detail}
        setDetail={setDetail}
      />
    </>
  );
};
