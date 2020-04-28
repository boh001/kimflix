import React, { useCallback, useState, useRef } from "react";
import {
  ContentsFrame,
  ContentsName,
  ContentsBody,
  Relative,
} from "./Contents.style";
import Poster from "Components/Poster/Poster";

export default ({ content, title }) => {
  return (
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
  );
};
