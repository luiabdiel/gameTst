import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10rem;

  background-color: ${({ theme }) => theme['blue-300']};

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 364px){
    height: 12rem;
  }
`

export const Content = styled.div`
  width: 100vw;
  max-width: 59.8125rem;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;

    text-align: center;
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
