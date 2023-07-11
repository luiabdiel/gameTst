import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    position: relative;
    width: 90%;
    max-width: 420px;
    height: 670px;

    background-color: #1c1c1c;
    overflow: hidden;
    border-radius: 8px;
  }
`;

export const Form = styled.form`
  position: absolute;
  inset: 4px;

  background-color: #222;
  padding: 50px 40px;
  border-radius: 8px;

  z-index: 2;

  display: flex;
  flex-direction: column;

  h2 {
    color: #fff;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.1rem;
  }

  .input-box {
    position: relative;
    width: 300px;
    margin-top: 35px;

    input {
      position: relative;
      width: 100%;
      padding: 20px 10px 10px;
      background-color: transparent;
      outline: none;
      border: none;
      box-shadow: none;
      color: #23242a;
      font-size: 1rem;
      letter-spacing: 0.05rem;
      transition: 0.5s;
      z-index: 10;

      &:not(:placeholder-shown) ~ span,
      &:focus ~ span {
        color: #fff;
        font-size: 0.75rem;
        transform: translateY(-34px);
      }

      &:not(:placeholder-shown) ~ i,
      &:focus ~ i {
        height: 44px;
      }
    }

    span {
      position: absolute;
      left: 0;
      padding: 20px 0px 10px;
      pointer-events: none;
      color: #8f8f8f;
      font-size: 1rem;
      letter-spacing: 0.05rem;
      transition: 0.5s;
    }

    i {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      border-radius: 4px;
      overflow: hidden;
      transition: 0.5s;
      pointer-events: none;
    }
  }

  .links {
    display: flex;
    justify-content: space-between;

    p {
      margin: 10px 0px;
      color: #8f8f8f;
      font-size: 0.75rem;
      text-decoration: none;

      &:hover,
      &:nth-child(2) {
        color: #fff;
        cursor: pointer;
      }
    }
  }

  .error-text {
    margin-top: 4px;
    color: red;
    font-size: 12px;
  }
`;

export const SubmitButton = styled.input`
  border: none;
  outline: none;
  padding: 9px 25px;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #fff;
  width: 100px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }
`;

export const BeforeElement = styled.div`
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 680px;
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #45f3ff,
    #45f3ff,
    #45f3ff
  );
  z-index: 1;
  transform-origin: bottom right;
  animation: ${rotateAnimation} 6s linear infinite;
`;

export const AfterElement = styled.div`
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 680px;
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #45f3ff,
    #45f3ff,
    #45f3ff
  );
  z-index: 1;
  transform-origin: bottom right;
  animation: ${rotateAnimation} 6s linear infinite;
  animation-delay: -3s;
`;

export const BorderLine = styled.span`
  position: absolute;
  top: 0;
  inset: 0;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 680px;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #ff2770,
      #ff2770,
      #ff2770
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: ${rotateAnimation} 6s linear infinite;
    animation-delay: -1.5s;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 680px;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #ff2770,
      #ff2770,
      #ff2770
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: ${rotateAnimation} 6s linear infinite;
    animation-delay: -4.5s;
  }
`;
