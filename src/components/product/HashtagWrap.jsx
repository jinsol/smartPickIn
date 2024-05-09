import React from "react";
import styled from "styled-components";

const HashtagWrapBlock = styled.div``;

const HashtagWrap = ({ hashtag }) => {
  return (
    <HashtagWrapBlock className="HashtagWrap">
      {hashtag.map((item, index) => {
        {
          return (
            <span key={index} className="Hashtag">
              #{item}
            </span>
          );
        }
      })}
    </HashtagWrapBlock>
  );
};

export default HashtagWrap;
