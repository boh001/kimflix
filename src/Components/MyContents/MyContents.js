import React from "react";
import { Frame, Main, MyBg, Name } from "./MyContents.style";

export default ({ myContents }) => {
  return (
    <Frame>
      <Main>
        {myContents.map((c, key) => {
          const { id, title, backdrop_path } = JSON.parse(c);
          return (
            <MyBg to={`/detail/${id}`} key={key} url={backdrop_path}>
              <Name>{title}</Name>
            </MyBg>
          );
        })}
      </Main>
    </Frame>
  );
};
