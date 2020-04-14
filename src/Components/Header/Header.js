import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scroll_true, search_true } from "modules/reducers/boolean";
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
  const dispatch = useDispatch();
  const {
    boolean: { scroll, search },
  } = useSelector((state) => state);

  const clickSearch = useCallback((e) => {
    e.preventDefault();
    dispatch(search_true(search));
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(typeof window.scrollY);
      if (window.scrollY !== 0) {
        dispatch(scroll_true(true));
      } else {
        dispatch(scroll_true(false));
      }
    });
    return window.removeEventListener("scroll", () => console.log("remove"));
  }, [scroll]);
  return (
    <HeaderFrame scroll={scroll}>
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
          <HeaderSearchBar search={search} />
        </HeaderSearch>
        <HeaderUser></HeaderUser>
      </HeaderSub>
    </HeaderFrame>
  );
};
