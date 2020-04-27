import React, { useCallback } from "react";
import {
  DetailFrame,
  DetailBg,
  DetailInfo,
  DetailImg,
  DetailTitle,
  DetailSub,
  DetailDes,
} from "./Detail.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
export default () => {
  const {
    data: {
      details: {
        detail: {
          poster_path,
          backdrop_path,
          overview,
          runtime,
          title,
          vote_average,
          release_date,
        },
        similar,
      },
    },
  } = useSelector((state) => state);
  console.log(similar);

  return (
    <DetailFrame>
      <DetailBg url={backdrop_path} />
      <DetailInfo>
        <DetailImg url={poster_path} />
        <DetailTitle>{title}</DetailTitle>
        <DetailSub>hu</DetailSub>
        <DetailDes>hu</DetailDes>
      </DetailInfo>
    </DetailFrame>
  );
};
