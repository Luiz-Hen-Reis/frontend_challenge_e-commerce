"use client";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5rem;
  min-height: 100vh;
`;

const Spinner = styled(AiOutlineLoading3Quarters)`
  font-size: 4.8rem;
  animation: ${spin} 1s linear infinite;
`;

export default function Loading() {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}
