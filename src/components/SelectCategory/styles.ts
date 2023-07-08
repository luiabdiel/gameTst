import { styled } from 'styled-components';

export const Select = styled.select`
  border: 2px solid ${({ theme }) => theme['blue-300']};

  padding: 0.50rem 0.25rem;
  border-radius: 4px;

  @media screen and (max-width: 330px){
    padding: 0.10rem 0.25rem;
  }
`
