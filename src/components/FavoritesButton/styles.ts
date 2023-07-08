import { styled } from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.white};

  border-radius: 4px;
  border: none;
  padding: 0 0.5rem;

  outline: none;
  position: relative;

  cursor: pointer;
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
