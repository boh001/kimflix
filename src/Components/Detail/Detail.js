import React, { useCallback } from "react";
import {
  DetailFrame,
  DetailBg,
  DetailInfo,
  DetailImg,
  DetailTitle,
  DetailSub,
  DetailDes,
  DetailMain,
  DetailDate,
  DetailBtn,
  DetailVote,
  DetailGenres,
  DetailRuntime,
  DetailMainDes,
  DetailSubDes,
  DetailCasts,
} from "./Detail.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
export default () => {
  const {
    data: {
      details: {
        detail,
        detail: {
          poster_path,
          backdrop_path,
          overview,
          tagline,
          genres,
          runtime,
          title,
          vote_average,
          release_date,
        },
        similar,
        cast: { character, name, profile_path, gender },
      },
    },
  } = useSelector((state) => state);

  return (
    <DetailFrame>
      <DetailBg url={backdrop_path} />
      <DetailInfo>
        <DetailImg url={poster_path} />
        <DetailMain>
          <DetailTitle>{title}</DetailTitle>
          <DetailDate>({release_date})</DetailDate>
          <DetailBtn></DetailBtn>
        </DetailMain>
        <DetailSub>
          <DetailVote>{vote_average}</DetailVote>
          <DetailGenres></DetailGenres>
          <DetailRuntime>{runtime}</DetailRuntime>
        </DetailSub>
        <DetailDes>
          <DetailSubDes>{tagline}</DetailSubDes>
          <DetailMainDes>{overview}</DetailMainDes>
        </DetailDes>
      </DetailInfo>
      <DetailCasts></DetailCasts>
    </DetailFrame>
  );
};
