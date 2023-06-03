import styled from "styled-components"
import mediaQueries from "styles/mediaQueries"

export const StyledAppbar = styled.div`
  display: block;
  
  ${ mediaQueries("medium") } {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 20px;
  }
`

export const CardsGrid = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  ${ mediaQueries("medium") } {
    grid-template-columns: repeat(3, 1fr);
  }

  ${ mediaQueries("xlarge") } {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`