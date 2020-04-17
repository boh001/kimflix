import React, { useCallback } from "react";
import Btn from "Components/Btn/Btn";
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
import { faTimes, faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
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
    <DetailFrame detail={detail}>
      <DetailImg url={backdrop_path}></DetailImg>
      <DetailMain>
        <DetailName>{name}</DetailName>
        <DetailDes>{des}</DetailDes>
        <DetailMore>
          <Btn>
            <FontAwesomeIcon icon={faPlay} />
            <span>재생</span>
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={faPlus} />
            <span>내가 찜한 콘텐츠</span>
          </Btn>
        </DetailMore>
      </DetailMain>
      <DetailClose onClick={(e) => close(e)}>
        <FontAwesomeIcon icon={faTimes} />
      </DetailClose>
    </DetailFrame>
  );
};
