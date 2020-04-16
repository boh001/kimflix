import React, { useCallback } from "react";
import {
  DetailFrame,
  DetailName,
  DetailDes,
  DetailMore,
  DetailPage,
  DetailMain,
  DetailClose,
  DetailImg,
} from "./Detail.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default ({
  line,
  des,
  name,
  date,
  detail,
  setDetail,
  setShow,
  setTop,
  backdrop_path,
}) => {
  const close = useCallback((e) => {
    e.preventDefault();
    setShow(false);
    setDetail(false);
    if (setTop) {
      setTop(0);
    }
  });
  return (
    <DetailFrame line={parseInt(line / 7) * 100} detail={detail}>
      <DetailImg url={backdrop_path}></DetailImg>
      <DetailMain>
        <DetailName>{name}</DetailName>
        <DetailDes>{des}</DetailDes>
        <DetailMore>More</DetailMore>
      </DetailMain>
      <DetailPage></DetailPage>
      <DetailClose onClick={(e) => close(e)}>
        <FontAwesomeIcon icon={faTimes} />
      </DetailClose>
    </DetailFrame>
  );
};
