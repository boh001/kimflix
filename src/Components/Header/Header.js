import React, { useEffect, useCallback, useState, useRef } from "react";

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

export default React.memo(() => {
  const [scroll, setScroll] = useState(false);
  const [search, setSearch] = useState(false);
  const inputRef = useRef();

  const clickSearch = useCallback((e) => {
    e.preventDefault();
    setSearch(!search);
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY !== 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    return window.removeEventListener("scroll", () => console.log("remove"));
  }, [scroll]);
  return (
    <HeaderFrame scroll={scroll}>
      <HeaderLinks>
        <HeaderLogo to="/">KIMFLIX</HeaderLogo>
        <HeaderLink to="/">홈</HeaderLink>
        <HeaderLink to="#">내가 찜한 콘텐츠</HeaderLink>
      </HeaderLinks>
      <HeaderSub>
        <HeaderSearch>
          <HeaderIcon onClick={(e) => clickSearch(e)} ref={inputRef}>
            <FontAwesomeIcon icon={faSearch} />
          </HeaderIcon>
          <HeaderSearchBar search={search} />
        </HeaderSearch>
        <HeaderUser></HeaderUser>
      </HeaderSub>
    </HeaderFrame>
  );
});
