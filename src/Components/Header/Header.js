import React, { useState, useEffect, useCallback } from "react";
import {
  HeaderFrame,
  HeaderLogo,
  HeaderLinks,
  HeaderUser,
  HeaderLink,
  HeaderSub,
  HeaderSearch,
  HeaderSearchBar,
  HeaderIcon,
} from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [active, setActive] = useState(false);
  const [showBar, setShowbar] = useState(false);
  const clickSearch = useCallback((e) => {
    e.preventDefault();
    setShowbar(!showBar);
  });

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
          <HeaderIcon onClick={(e) => clickSearch(e)}>
            <FontAwesomeIcon icon={faSearch} />
          </HeaderIcon>
          <HeaderSearchBar showBar={showBar} />
        </HeaderSearch>
        <HeaderUser></HeaderUser>
      </HeaderSub>
    </HeaderFrame>
  );
};
