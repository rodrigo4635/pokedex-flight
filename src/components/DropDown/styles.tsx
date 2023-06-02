import styled from "styled-components"
import mediaQueries from "styles/mediaQueries"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-height: 50px;
  margin-top: 10px;

  ${ mediaQueries("medium") } {
    margin-top: 0;
  }

  select {
    display: none;
  }

  p {
    white-space: nowrap;
    margin-right: 5px;
  }
`

export const Label = styled.label<{ open: boolean }>`
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  padding-right: 10px;
  
  &:after {
    position: absolute;
    right: 6px;
    content: "";
    border: 1px solid black;
    width: 10px;
    height: 10px;
    border-top-width: 0;
    border-left-width: 0;
    translate: ${ props => props.open ? "0 5px" : "0" };
    transform: ${ props => props.open ? "rotate(225deg)" : "rotate(45deg)" };

    ${ mediaQueries("medium") } {
      right: 0;
    }
  }
`

export const List = styled.ul<{ open: boolean }>`
  display: ${ props => props.open ? "block" : "none" };
  position: absolute;
  width: -webkit-fill-available;
  list-style: none;
  margin: 0;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  top: 45px;
  padding: 10px;
  background-color: white;
  z-index: 8;
  
  ${ mediaQueries("medium") } {
    top: 50px;
  }

  li {
    padding: 10px 5px;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`