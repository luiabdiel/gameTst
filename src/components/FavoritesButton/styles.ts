import styled,{ keyframes } from "styled-components";

const pulse = keyframes`
  from {
    box-shadow: 0 0 25px #7effb2, 0 0 50px #2cd9ff;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.white};

  border-radius: 4px;
  border: none;
  padding: 0 0.5rem;

  outline: none;
  position: relative;

  cursor: pointer;

  &:focus {
    animation: ${pulse} 0.5s ease-in-out;
  }
`

export const Span = styled.span`
  background-color: ${({ theme }) => theme['red']};
  color: ${({ theme }) => theme.white};

  width: 17px;
  height: 17px;

  border-radius: 100%;
  padding: 1px 2.5px;

  font-size: 10px;

  position: absolute;

  right: -5px;
  top: -7px;
`
