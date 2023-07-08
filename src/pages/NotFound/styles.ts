import { styled } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme}) => theme.black};

  p {
    color: ${({ theme}) => theme.white};
  }
`
