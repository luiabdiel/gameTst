import styled, {keyframes} from 'styled-components';

const fillAnimation = keyframes`
  0% {
    fill: transparent;
  }
  100% {
    fill: red;
  }
`;

const pulse = keyframes`
  from {
    box-shadow: 0 0 25px #ff5592, 0 0 50px #da2a2a;
  }
`;

export const Svg = styled.svg`
  background-color: ${({ theme }) => theme['bg-icon']};

  border-radius: 50%;

  line-height: 0;

  height: 1.875rem;
  width: 1.875rem;

  path {
    transition: fill 0.3s;
    fill: transparent;
    animation: ${fillAnimation} 0.5s ease-in-out forwards;
  }

  &:hover {
    animation: ${pulse} 0.5s ease-in-out;
  }
`
