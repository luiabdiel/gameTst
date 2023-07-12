import { styled } from "styled-components";

export const ResetButton = styled.button`
  border-radius: 8px;

  border: none;
  outline: none;

  padding: 4px 6px;

  font-size: 0.875rem;

  &:hover {
    background-color: ${({ theme}) => theme.red};
    color: ${({ theme }) => theme.white};

    transition: 0.3s ease-in-out;

    cursor: pointer;
  }
`
