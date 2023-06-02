import styled from "styled-components"

export const StyledButton = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0.8em;
  border: none;
  background: linear-gradient(to right, #d14444, #b82c2c);
  color: ghostwhite;
  overflow: hidden;
  cursor: pointer;
  width: fit-content;

  span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 0.8em 1.2em 0.8em 1.05em;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &::before {
    content: "";
    background: #000;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }
  
  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: .5;
    cursor: default;
  }
`
