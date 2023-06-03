import styled from "styled-components"
import mediaQueries from "styles/mediaQueries"

export const Wrapper = styled.div`
  padding: 90px 15px 0;
  background-color: #fff;
  overflow-x: hidden;

  main {
    min-height: 100vh;
  }

  ${ mediaQueries("medium") } {
    padding: 110px 50px 0;
  }

  ${ mediaQueries("large") } {
    padding: 110px 100px 0;
  }
`