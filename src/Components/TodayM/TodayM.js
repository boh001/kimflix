import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sound_true, end_true, play_true } from "modules/reducers/boolean";
import {
  Frame,
  Content,
  ContentInfo,
  ContentName,
  ContentRank,
  ContentDes,
  ContentLinks,
  ContentLink,
  ContentSub,
  ContentControl,
  ContentOld,
  Old,
  Ptage,
} from "./TodayM.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faVolumeMute,
  faVolumeUp,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
export default () => {
  const dispatch = useDispatch();
  const {
    boolean: { sound, end, play },
  } = useSelector((state) => state);
  const playRef = useRef();
  const replay = useCallback((e) => {
    playRef.current.play();
    dispatch(end_true(false));
  });
  const turnUp = useCallback((e) => {
    dispatch(sound_true(!sound));
  });
  useEffect(() => {
    setTimeout(() => {
      if (!play) {
        playRef.current.play();
      }
      playRef.current.onended = () => dispatch(end_true(true));
      dispatch(play_true(true));
    }, 3000);
    return clearTimeout();
  });
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
          <ContentLink>
            <FontAwesomeIcon icon={faPlay} />
            <span>재생</span>
          </ContentLink>
          <ContentLink>
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span>상세정보</span>
          </ContentLink>
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
