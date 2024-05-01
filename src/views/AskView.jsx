import React from "react";
import styled from "styled-components";
import AskTitle from "@/components/ask/AskTitle";
import AskForm from "@/components/ask/AskForm";

const AskViewBlock = styled.div`
  section {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    place-items: center;

    place-content: center;
    .homeRow {
      /* top: 200px; */
      padding: 20vh 0;
      position: relative;
      display: grid;
      grid-template-columns: auto 3fr;
      gap: 80px;
      width: 1450px;
      transition: all 0.3s;
      .컴포넌트두번째 {
        width: 100%;
      }
    }
  }
`;

const AskView = () => {
  return (
    <AskViewBlock>
      <section>
        <ul className="homeRow">
          <li>
            <AskTitle />
          </li>
          <li className="컴포넌트두번째">
            <AskForm />
          </li>
        </ul>
      </section>
    </AskViewBlock>
  );
};

export default AskView;
