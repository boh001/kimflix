import MyContentsPresenter from "./MyContentsPresenter";
import React from "react";

export default () => {
  const myContents = Object.values(localStorage);
  return <MyContentsPresenter myContents={myContents} />;
};
