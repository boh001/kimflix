import React, { useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Frame,
  Content,
  ContentInfo,
  ContentName,
  ContentRank,
  ContentDes,
  ContentLinks,
  ContentSub,
  ContentControl,
  ContentOld,
  Old,
  Ptage,
} from "./TodayM.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from "Components/Btn/Btn";
import {
  faPlay,
  faVolumeMute,
  faVolumeUp,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { onPlay, onSound, onEnd } from "modules/reducers/video";
export default () => {
  const {
    btn: { sound, end, play },
  } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const playRef = useRef();
  const replay = useCallback((e) => {
    playRef.current.play();
    dispatch(onEnd(false));
  });
  const turnUp = useCallback((e) => {
    dispatch(onSound(!sound));
  });
  useEffect(() => {
    const { current } = playRef;
    setTimeout(() => {
      if (!play) {
        current.play();
      }
      current.onended = () => dispatch(onEnd(true));
      dispatch(onPlay(true));
    }, 3000);
    return () => {
      clearTimeout();
      dispatch(onEnd(false));
    };
  }, []);
  return (
    <Frame>
      <Content ref={playRef} sound={sound} />
      <ContentInfo>
        <ContentName>한라산 위의 친구들</ContentName>
        <ContentRank>오늘 영화 순위 4위</ContentRank>
        <ContentDes>
          먼 서울에서 비행기를 타고 온 서울과학기술대학교 학생 4명, 27살이 된
          지금 이 동영상을 보고 있다.
        </ContentDes>
        <ContentLinks>
          <Btn>
            <FontAwesomeIcon icon={faPlay} />
            <span>재생</span>
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span>상세정보</span>
          </Btn>
        </ContentLinks>
      </ContentInfo>
      <ContentSub>
        {!end ? (
          <ContentControl play={play} onClick={(e) => turnUp(e)}>
            <FontAwesomeIcon icon={sound ? faVolumeUp : faVolumeMute} />
          </ContentControl>
        ) : (
          <ContentControl play={play} onClick={(e) => replay(e)}>
            <FontAwesomeIcon icon={faRedo} />
          </ContentControl>
        )}
        <ContentOld>
          <Old>
            <Ptage>전제 관람가</Ptage>
          </Old>
        </ContentOld>
      </ContentSub>
    </Frame>
  );
};
