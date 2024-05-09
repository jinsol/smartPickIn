import React from "react";
import styled from "styled-components";
import {
  MdPlace,
  MdManageHistory,
  MdOutlineTrendingUp,
  MdOutlineScience,
  MdOutlineTraffic,
  MdAddLink,
  MdOutlineWebAsset,
  MdOutlineSettings,
  MdCalendarMonth,
  Md30Fps,
  MdOutlineReceiptLong,
  MdOutlineAddToHomeScreen,
  MdOutlineSearch,
  MdAccessTime,
  MdOutlineBalance,
  MdExposurePlus1,
} from "react-icons/md";

const TagWrapBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  .TagIcon {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    .TagIcon_text {
      font-size: 0.8em;
      line-height: 180%;
    }
    .TagIcon_icon {
      display: inline-flex;
      place-content: center;
      place-items: center;

      width: 30px;
      height: 30px;
      border: 1px solid var(--gray02);
      border-radius: 50%;
    }
  }
`;

const TagWrap = ({ tag }) => {
  const tagIconMap = {
    플레이스: <MdPlace />,
    통합관리: <MdManageHistory />,
    지수상승: <MdOutlineTrendingUp />,
    테크니컬: <MdOutlineScience />,
    트래픽: <MdOutlineTraffic />,
    백링크: <MdAddLink />,
    사이트: <MdOutlineWebAsset />,
    최적화: <MdOutlineSettings />,
    "30일": <Md30Fps />,
    보장형: <MdCalendarMonth />,
    영수증: <MdOutlineReceiptLong />,
    블로그: <MdOutlineAddToHomeScreen />,
    검색유입: <MdOutlineSearch />,
    실시간: <MdAccessTime />,
    순위확인: <MdOutlineBalance />,
    "1건당": <MdExposurePlus1 />,
  };

  return (
    <TagWrapBlock>
      {tag &&
        // Array.isArray(tag) &&
        tag.map((item, index) => (
          <div key={index} className="TagIcon">
            <span className="TagIcon_icon">{tagIconMap[item]}</span>
            <span className="TagIcon_text">{item}</span>
          </div>
        ))}
    </TagWrapBlock>
  );
};

export default TagWrap;
