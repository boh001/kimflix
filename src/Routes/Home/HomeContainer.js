import HomePresenter from "./HomePresenter";
import { connect } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import { moviesApi } from "api";
import { add } from "modules/reducers/count";
const mapStateToProps = (state) => {
  return { number: state };
};
const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(add()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ number, add }) => {
  console.log(number);

  const [movies, setMovies] = useState([
    { nowPlaying: null, upcoming: null, popular: null, latest: null },
  ]);
  useEffect(() => {
    async function upData() {
      try {
        const {
          data: { results: nowPlaying },
        } = await moviesApi.nowPlaying();
        const {
          data: { results: upcoming },
        } = await moviesApi.upcoming();
        const {
          data: { results: popular },
        } = await moviesApi.popular();
        const {
          data: { results: latest },
        } = await moviesApi.popular();
        setMovies({
          upcoming,
          popular,
          latest,
          nowPlaying,
        });
      } catch (error) {
        console.log(error);
      }
    }
    upData();
  }, []);
  console.log(movies);

  return <HomePresenter movies={movies} />;
});
