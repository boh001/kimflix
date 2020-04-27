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
          genres,
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
        <DetailMain>
          <DetailTitle>{title}</DetailTitle>
          <DetailDate>({release_date})</DetailDate>
          <DetailBtn></DetailBtn>
        </DetailMain>
        <DetailSub>
          <DetailVote>{vote_average}</DetailVote>
          <DetailGenres>
            {genres.map((g, key) => {
              const { name } = g;
            })}
          </DetailGenres>
          <DetailRuntime>{runtime}</DetailRuntime>
        </DetailSub>
        <DetailDes>hu</DetailDes>
      </DetailInfo>
    </DetailFrame>
  );
};
