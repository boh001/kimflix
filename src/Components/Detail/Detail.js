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
  DetailGenre,
  DetailRuntime,
  DetailMainDes,
  DetailSubDes,
  DetailCasts,
  DetailCast,
  DetailCasting,
  DetailCastImg,
  DetailName,
  DetailWrap,
  Frame,
} from "./Detail.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
export default () => {
  const {
    data: {
      details: {
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
        cast,
      },
    },
  } = useSelector((state) => state);
  const addList = useCallback((e) => {
    e.preventDefault();
    const myContents = localStorage.getItem("myContents");
    console.log(JSON.parse(myContents));

    if (!myContents) {
      localStorage.setItem("myContents", [
        JSON.stringify({ title, poster_path }),
      ]);
    } else {
      localStorage.setItem("myContents", [
        myContents,
        JSON.stringify({ title, poster_path }),
      ]);
    }
  });
  return (
    <>
      <DetailBg url={backdrop_path} />
      <Frame>
        <DetailFrame>
          <DetailInfo>
            <DetailImg url={poster_path} />
            <DetailMain>
              <DetailTitle>{title}</DetailTitle>
              <DetailDate>({release_date})</DetailDate>
              <DetailBtn onClick={(e) => addList(e)}>좋아요</DetailBtn>
            </DetailMain>
            <DetailSub>
              <FontAwesomeIcon icon={faStar} />
              <DetailVote>{vote_average}</DetailVote>
              <DetailGenres>
                {genres &&
                  genres.map((g, key) => {
                    const { name } = g;
                    return <DetailGenre>{name}</DetailGenre>;
                  })}
              </DetailGenres>
              <DetailRuntime>{runtime}</DetailRuntime>
            </DetailSub>
            <DetailDes>
              <DetailSubDes>{tagline}</DetailSubDes>
              <DetailMainDes>{overview}</DetailMainDes>
            </DetailDes>
          </DetailInfo>
          <DetailCasts>
            <DetailCast>출연진</DetailCast>
            <DetailCasting>
              {cast.map((c, key) => {
                const { character, name, profile_path } = c;
                return (
                  <DetailWrap key={key}>
                    <DetailCastImg url={profile_path} />
                    <DetailName>{name}</DetailName>
                    <DetailName>{character}</DetailName>
                  </DetailWrap>
                );
              })}
            </DetailCasting>
          </DetailCasts>
          <DetailCasts>
            <DetailCast>비슷한 콘텐츠</DetailCast>
          </DetailCasts>
          <DetailCasting>
            {similar.map((s, key) => {
              const { poster_path, vote_average, title } = s;
              return (
                <DetailWrap key={key}>
                  <DetailCastImg url={poster_path} />
                  <DetailName>{title}</DetailName>
                  <DetailName>
                    <FontAwesomeIcon icon={faStar} />
                    {vote_average}
                  </DetailName>
                </DetailWrap>
              );
            })}
          </DetailCasting>
        </DetailFrame>
      </Frame>
    </>
  );
};
