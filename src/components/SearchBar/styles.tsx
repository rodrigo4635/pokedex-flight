import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: #FFF;
  color: #646464;
  padding: 15px 80px 15px 20px;
  border-radius: 30px;
  transition: all ease-in-out .5s;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #eee;
  transition: border .3s;

  &:hover, &:focus {
    box-shadow: 0 0 1em #00000013;
    border: 2px solid #d14444;
  }

  &:focus {
    outline: none;
    background-color: #FFF;
  }

  &::-webkit-input-placeholder {
    font-weight: 300;
    color: #555;
  }
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  top: 50%;
  translate: 0 -50%;
  
  &:hover {
    cursor: pointer;
  }

  .icon {
    height: 1.3rem;
    width: 1.3rem;
    fill: #b4b4b4;
  }

  &.close {
    right: 50px;
    font-size: 1.3rem;
    color: #b4b4b4;
  }
`