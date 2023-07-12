import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;

  height: 19.75rem;
  max-width: 15.625rem;

  border: 2px solid ${({ theme }) => theme['border-card']};
  border-radius: 8px;

  box-shadow: 20px 15px 45px -25px rgba(7,136,140,1);
  background-color: rgb(226 222 240 / 0.4);
  background-clip: padding-box;
  transition: 0.4s;

  &:hover {
    transform: scale(1.05);
  }

  .card-mask {
    position: absolute;

    height: 100%;
    width: 100%;

    z-index: 2;

    border-radius: 8px;

    background-image: linear-gradient(
      to bottom,
      rgba(2, 5, 0, 0.8),
      rgba(2, 5, 0, 0.2),
      rgba(2, 5, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
  }

  @media screen and (max-width: 531px){
    height: 23rem;
    max-width: 30rem;
  }
`
export const Content = styled.div`
  padding: 0.5rem;

  position: relative;

  .blur-smerald {
    position: absolute;

    background-color: rgb(16 185 129 / 0.6);

    top: 80%;

    width: 100px;
    height: 65px;

    filter: blur(40px);
    overflow: hidden;

    border-radius: 50%;

    z-index: 1;
  }

  .blur-blue {
    position: absolute;

    background-color: rgb(14 165 233 / 0.6);

    top: 70%;
    left: 60%;

    width: 100px;
    height: 65px;

    filter: blur(40px);
    overflow: hidden;

    border-radius: 50%;

    z-index: 1;
  }

  .rating {
    position: absolute;
    width: 100%;
    top: 13px;
    /* left: 20px; */

    z-index: 3;
  }

  .favorite-icon {
    position: absolute;

    right: 20px;
    top: 9px;

    z-index: 3;
  }

  svg {
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
