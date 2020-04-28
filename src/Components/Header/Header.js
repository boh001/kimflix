import React, { useEffect, useCallback, useState, useRef } from "react";

import {
  HeaderFrame,
  HeaderLogo,
  HeaderLinks,
  HeaderLink,
  HeaderSub,
  HeaderSearch,
  HeaderSearchBar,
  HeaderIcon,
} from "./Header.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { onScroll, onSearch } from "modules/reducers/header";
export default React.memo(() => {
  const { scroll, search } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const clickSearch = useCallback((e) => {
    e.preventDefault();
    dispatch(onSearch(!search));
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY !== 0) {
        dispatch(onScroll(true));
      } else {
        dispatch(onScroll(false));
      }
    });
    return window.removeEventListener("scroll", () => console.log("remove"));
  }, [scroll]);
  return (
    <HeaderFrame scroll={scroll}>
      <HeaderLinks>
        <HeaderLogo to="/">KIMFLIX</HeaderLogo>
        <HeaderLink to="/">홈</HeaderLink>
        <HeaderLink to="/myContents">내가 찜한 콘텐츠</HeaderLink>
      </HeaderLinks>
      <HeaderSub>
        <HeaderSearch>
          <HeaderIcon onClick={(e) => clickSearch(e)} ref={inputRef}>
            <FontAwesomeIcon icon={faSearch} />
          </HeaderIcon>
          <HeaderSearchBar search={search} />
        </HeaderSearch>
      </HeaderSub>
    </HeaderFrame>
  );
});
