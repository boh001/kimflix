import React, { useCallback } from "react";
import { show_true } from "modules/reducers/boolean";
import { useDispatch } from "react-redux";
import {
  DetailFrame,
  DetailName,
  DetailDes,
  DetailMore,
  DetailPage,
  DetailMain,
  DetailClose,
} from "./Detail.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default ({ url, des, name, date, detail, setDetail }) => {
  const dispatch = useDispatch();
  const close = useCallback((e) => {
    e.preventDefault();
    dispatch(show_true(false));
    setDetail(false);
  });
  return (
    <DetailFrame detail={detail} url={url}>
      <DetailMain>
        <DetailName>{name}</DetailName>
        <DetailDes>{des}</DetailDes>
        <DetailMore>More</DetailMore>
        <DetailPage>page</DetailPage>
        <DetailClose onClick={(e) => close(e)}>
          <FontAwesomeIcon icon={faTimes} />
        </DetailClose>
      </DetailMain>
    </DetailFrame>
  );
};
