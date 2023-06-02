import styled from "styled-components"
import mediaQueries from "styles/mediaQueries"

export const Wrapper = styled.div`
  padding: 70px 15px 0;
  background-color: #fff;

  main {
    min-height: 100vh;
  }

  ${ mediaQueries("medium") } {
    padding: 100px 50px 0;
  }

  ${ mediaQueries("large") } {
    padding: 100px 100px 0;
  }
`