import styled from "styled-components"
import mediaQueries from "styles/mediaQueries"

export const Wrapper = styled.nav`
  height: 40px;
  background-color: #d14444;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  ${ mediaQueries("medium") } {
    height: 50px;
  }

  &:before {
    border-top: 60px solid #d14444;
    border-right: 40px solid transparent;
    height: 0;
    width: 50%;
    position: absolute;
    content: "";
    margin-top: 25px;
    margin-left: -20px;
    box-sizing: border-box;
    z-index: -1;

    ${ mediaQueries("medium") } {
      margin-top: 35px;
    }
  }

  a {
    margin-left: 5px;
    margin-top: 5px;
  }

  img {
    height: 50px;
    
    ${ mediaQueries("medium") } {
      height: 60px;
    }
  }
`