import styled from "styled-components"
import mediaQueries from "styles/mediaQueries"

export const StyledHeader = styled.header`
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  img {
    height: 30px;

    ${ mediaQueries("medium") } {
      height: 40px;
    }
  }
`