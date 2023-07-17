import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 350px;
`;

export const LoadingSpinner = styled.div`
  width: 30px;
  height: 30px;

  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme["blue-300"]};
  border-top-color: transparent;

  animation: ${spinAnimation} 1s linear infinite;
`
