import React, { useCallback, useState, useRef } from "react";
import { useSelector } from "react-redux";
import {
  ContentsFrame,
  ContentsName,
  ContentsBody,
  Relative,
} from "./Contents.style";
import Loading from "Components/Loading/Loading";
import Poster from "Components/Poster/Poster";

export default ({ content, title }) => {
  const { loading } = useSelector((state) => state.loading);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Relative>
            <ContentsFrame>
              <ContentsName>{title}</ContentsName>
              <ContentsBody>
                {content.map((p, key) => {
                  const { poster_path, id } = p;
                  return <Poster key={key} id={id} poster_path={poster_path} />;
                })}
              </ContentsBody>
            </ContentsFrame>
          </Relative>
        </>
      )}
    </>
  );
};
