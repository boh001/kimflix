import React from "react";
import {
  ContentsFrame,
  ContentsName,
  ContentsBody,
  Relative,
} from "./Contents.style";
import Poster from "Components/Poster/Poster";
import PropTypes from "prop-types";

const Contents = React.memo(({ content, title }) => {
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
});
Contents.propTypes = {
  content: PropTypes.array,
  title: PropTypes.string,
};
export default Contents;
