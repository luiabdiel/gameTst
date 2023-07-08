import { styled } from 'styled-components';

export const Container = styled.div`
  height: 19.75rem;
  max-width: 15.625rem;

  border: 2px solid ${({ theme }) => theme['border-card']};
  border-radius: 8px;

  @media screen and (max-width: 531px){
    height: 23rem;
    max-width: 30rem;
  }
`
export const Content = styled.div`
  padding: 0.5rem;

  position: relative;

  svg {
    position: absolute;
    right: 20px;
    top: 20px;

    cursor: pointer;
  }

  img {
    width: 100%;
    height: 12.5rem;

    border-radius: 1.25rem;
    overflow: hidden;

    margin-bottom: 1.25rem;
  }

  h2 {
    font-size: 1.25rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 12.5rem;
  }

  p {
    font-size: 0.875rem;
  }
`
