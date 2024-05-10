import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap/gsap-core";

const MouseFollowerBlock = styled.span`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: 1;
`;

const MouseFollower = ({ isMouseOverHeader }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  console.log(isMouseOverHeader);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const moveFollower = () => {
      if (isMouseOverHeader) {
        gsap.to("#follower1", {
          duration: 2,
          x: position.x + 100,
          y: position.y - 100,
          opacity: 0.5,
          scale: 15,
          ease: "power2.out",
        });
        gsap.to("#follower2", {
          duration: 2,
          x: position.x - 100,
          y: position.y + 100,
          opacity: 0.5,
          scale: 15,
          ease: "power2.out",
        });
        document.getElementById("follower1").style.zIndex = "1";
        document.getElementById("follower2").style.zIndex = "1";
      } else {
        gsap.to("#follower1", {
          duration: 1,
          x: position.x,
          y: position.y,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        });
        gsap.to("#follower2", {
          duration: 1,
          x: position.x,
          y: position.y,
          scale: 0,
          ease: "power2.out",
        });
        document.getElementById("follower1").style.zIndex = "100000";
        // document.getElementById("follower2").style.zIndex = "99999";
      }
    };

    moveFollower();
  }, [position, isMouseOverHeader]);

  return (
    <>
      <MouseFollowerBlock
        id="follower1"
        style={{
          backgroundColor: "var(--blue)",
        }}
      />
      <MouseFollowerBlock
        id="follower2"
        style={{
          backgroundColor: "var(--yellow)",
        }}
      />
    </>
  );
};

export default MouseFollower;
