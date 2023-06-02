import styled from "styled-components"
import mediaQueries from "styles/mediaQueries"

export const Wrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  translate: -50% -50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50vw;

    ${ mediaQueries("medium") } {
      width: 20vw;
    }
  }
`