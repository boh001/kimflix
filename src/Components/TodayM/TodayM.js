import React, { useState, useEffect, useRef, useCallback } from "react";
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
  const [sound, setSound] = useState(false);
  const [end, setEnd] = useState(false);
  const [play, setPlay] = useState(false);
  const playRef = useRef();
  const replay = useCallback((e) => {
    playRef.current.play();
    setEnd(false);
  });
  const turnUp = useCallback((e) => {
    setSound(!sound);
  });
  useEffect(() => {
    setTimeout(() => {
      if (!play) {
        playRef.current.play();
      }
      playRef.current.onended = () => setEnd(true);
      setPlay(true);
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
            재생
          </ContentLink>
          <ContentLink>
            <FontAwesomeIcon icon={faQuestionCircle} />
            상세정보
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
