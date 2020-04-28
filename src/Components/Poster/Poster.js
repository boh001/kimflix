import React from "react";
import { PosterFrame, PostrLink } from "./Poster.style";
import PropTypes from "prop-types";

const Poster = ({ poster_path, id }) => {
  return (
    <>
      <PostrLink to={`/detail/${id}`}>
        <PosterFrame src={poster_path} />
      </PostrLink>
    </>
  );
};
Poster.propTypes = {
  poster_path: PropTypes.string,
  id: PropTypes.number,
};
export default Poster;
