import styled, {keyframes} from 'styled-components';

const fillAnimation = keyframes`
  0% {
    fill: transparent;
  }
  100% {
    fill: white;
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
`
