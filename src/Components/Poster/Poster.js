import React, { useCallback } from "react";
import { PosterFrame, PostrLink } from "./Poster.style";
import { withRouter } from "react-router-dom";

export default ({ poster_path, id }) => {
  return (
    <>
      <PostrLink to={`/detail/${id}`}>
        <PosterFrame src={poster_path} />
      </PostrLink>
    </>
  );
};
