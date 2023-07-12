import { styled } from 'styled-components';

export const Container = styled.div`
  width: 19.5rem;
  background-color: #fff;

  overflow: hidden;
  border-radius: 4px;

  @media screen and (max-width: 330px){
    width: 15.5rem;
    padding: 0 0.3rem;
  }
`

export const Form = styled.form`
  position: relative;
  width: 19.5rem;

  svg {
    display: block;

    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 330px){
    width: 15.5rem;
  }
`

export const Input = styled.input`
  width: 90%;

  border: none;
  padding: 0.5rem;

  outline: none;

  font-size: 0.875rem;

  &::placeholder {
    color: ${({ theme }) => theme['input-placeholder']};
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
`
