import styled,{ keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100%;

  padding: 15px 40px;
  border-radius: 4px;
  border-left: 8px solid ${({ theme }) => theme["border-color"]};

  background-color: ${({ theme }) => theme["bg-error"]};
  animation: ${fadeIn} 0.4s ease-in-out;

  p {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }
`;
