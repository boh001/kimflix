import React, { useState, useEffect } from "react";
import {
  HeaderFrame,
  HeaderLogo,
  HeaderLinks,
  HeaderUser,
  HeaderLink,
  HeaderSub,
  HeaderSearch,
} from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [active, setActive] = useState(false);

  console.log(active);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(typeof window.scrollY);

      if (window.scrollY !== 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
    return window.removeEventListener("scroll", () => {
      console.log("remove");
    });
  }, [active]);
  return (
    <HeaderFrame active={active}>
      <HeaderLinks>
        <HeaderLogo to="#">KIMFLIX</HeaderLogo>
        <HeaderLink to="#">홈</HeaderLink>
        <HeaderLink to="#">TV프로그램</HeaderLink>
        <HeaderLink to="#">영화</HeaderLink>
        <HeaderLink to="#">최신 콘텐츠</HeaderLink>
        <HeaderLink to="#">내가 찜한 콘텐츠</HeaderLink>
      </HeaderLinks>
      <HeaderSub>
        <HeaderSearch>
          <FontAwesomeIcon icon={faSearch} />
        </HeaderSearch>
        <HeaderUser></HeaderUser>
      </HeaderSub>
    </HeaderFrame>
  );
};
