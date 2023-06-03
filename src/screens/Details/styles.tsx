import styled from "styled-components"
import mediaQueries from "styles/mediaQueries"
import { formatter } from "utils"

export const Wrapper = styled.div`
  .go-back {
    position: relative;
    color: #d14444;
    text-decoration: none;
    font-weight: bold;
    padding-left: 15px;

    &:after {
      position: absolute;
      left: 0;
      top: 5px;
      content: "";
      border: 2px solid #d14444;
      width: 8px;
      height: 8px;
      border-top-width: 0;
      border-left-width: 0;
      transform: rotate(135deg);
    }
  }

  .content {
    display: block;
  
    ${ mediaQueries("medium") } {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 40px;
    }
  }
  
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  
  h3 {
    margin-left: 10px;
    color: #999;
  }
`

export const Subtitle = styled.h3`
  font-weight: bold;
  font-size: 1.3rem;
  margin: 25px 0 15px;
`

export const PokemonImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 20px;

  img {
    width: 50%;
  }
`

export const SmallCardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  ${ mediaQueries("large") } {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const SmallCardWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  max-width: 100px;

  p {
    text-align: center;
    white-space: nowrap;
  }

  .label {
    font-weight: bold;
    margin-bottom: 10px;
  }
`

export const StatsTable = styled.table`
  width: 100%;

  th, .val {
    white-space: nowrap;
    min-width: 40px;
    font-weight: normal;
    padding: 10px 0;
    text-align: left;
  }

  .val {
    font-weight: bold;
    text-align: right;
    padding: 10px;
  }
`

export const StatBar = styled.td<{ perc: number }>`
  width: 100%;
  position: relative;

  div {
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background-color: #eee;
  }

  .filled {
    background-color: ${ props => formatter.percToColor(props.perc) };
    width: ${ props => props.perc }%;
    top: 50%;
    translate: 0 -50%;
    position: absolute;
  }
`

export const StoryWrapper = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    margin: 0;
  }
`