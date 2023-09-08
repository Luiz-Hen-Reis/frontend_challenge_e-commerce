"use client";

import styled, { keyframes, css } from "styled-components";

const PulseAnimation = keyframes`
    0% {
        background-color: var(--skeleton-color-1);
    }

    100% {
        background-color: var(--skeleton-color-2);
    }
`;

const animation = css`
  animation: ${PulseAnimation} 1s linear infinite alternate;
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25.6rem;
  background-color: var(--bg-secondary);
  margin-bottom: 1.4rem;
  border-radius: 1rem;

  .img {
    width: inherit;
    height: 30rem;
    border-radius: inherit;
    background-color: var(--skeleton-color-1);
    ${animation}
  }

  .h3 {
    width: 20%;
    padding: 0.8rem 1.2rem;
    background-color: var(--skeleton-color-1);
    ${animation}
  }

  .bottom-part-container {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 0.8rem 0;
  }

  .p {
    width: 10%;
    background-color: var(--skeleton-color-1);
    padding-left: 1.2rem;
    ${animation}
  }

  .line {
    width: 22.8rem;
    height: 1px;
    margin: 8px 0;
    padding: 0px;
    background-color: var(--skeleton-color-1);
    ${animation}
  }
`;

export default function SkeletonCard() {
  return (
    <SkeletonContainer>
      <div className="img"></div>
      <div className="bottom-part-container">
        <div className="h3"></div>
        <div className="line"></div>
        <div className="p"></div>
      </div>
    </SkeletonContainer>
  );
}
