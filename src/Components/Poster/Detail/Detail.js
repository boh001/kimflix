import React from "react";
import {
  DetailFrame,
  DetailName,
  DetailDes,
  DetailMore,
  DetailPage,
} from "./Detail.style";
export default ({ url, des, name, date, detail }) => {
  return (
    <DetailFrame detail={detail} url={url}>
      <DetailName>{name}</DetailName>
      <DetailDes>{des}</DetailDes>
      <DetailMore>More</DetailMore>
      <DetailPage>page</DetailPage>
    </DetailFrame>
  );
};
