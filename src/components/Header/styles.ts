import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 12rem;

  background-image: url("/pxfuel3.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  .mask {
    position: absolute;
    width: 100%;
    height: 100%;

    position: absolute;

    overflow: hidden;

    height: 100%;
    width: 100%;

    z-index: 1;

    background-image: linear-gradient(
      to bottom,
      rgba(2, 55, 155, 0.8),
      rgba(2,55, 155, 0.6),
      rgba(2, 55, 155, 0.4),
      rgba(0, 55, 155, 0.2)
    );
  }

  @media screen and (max-width: 364px){
    height: 12rem;
  }
`

export const Content = styled.div`
  width: 100vw;
  max-width: 59.8125rem;

  z-index: 2;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;

    text-align: center;
  }

  svg {
    display: none;
  }

  @media screen and (max-width: 800px){
    flex-direction: column;
    gap: 0.50rem;
  }
`

export const BtnGroup = styled.div`
  display: flex;
  gap: 0.75rem;

  @media screen and (max-width: 434px){
    flex-direction: column-reverse;
    align-items: center;
    gap: 0.50rem;
  }
`
