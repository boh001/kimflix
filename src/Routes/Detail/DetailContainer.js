import DetailPresenter from "./DetailPresenter";
import React, { useEffect } from "react";
import { movieApi } from "api";
import { useDispatch } from "react-redux";
import { onDetail } from "modules/reducers/data";
export default ({ match }) => {
  const {
    params: { id },
  } = match;
  const dispatch = useDispatch();
  useEffect(() => {
    async function upDetail() {
      try {
        const { data: detail } = await movieApi.detail(id);
        const {
          data: { results: similar },
        } = await movieApi.similar(id);
        const {
          data: { cast },
        } = await movieApi.cast(id);
        dispatch(
          onDetail({
            detail,
            similar: similar.slice(0, 5),
            cast: cast.slice(0, 3),
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    upDetail();
  }, []);

  return <DetailPresenter />;
};
