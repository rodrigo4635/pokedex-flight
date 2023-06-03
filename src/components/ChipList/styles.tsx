import styled from "styled-components"
import pokemonTypeColor from "styles/pokemonTypeColor"

export const Wrapper = styled.div<{ centered?: boolean }>`
  display: flex;
  justify-content: ${ props => props.centered ? "center" : "left" };
  align-items: center;
  gap: 5px;
`

export const Label = styled.p<{ color?: string }>`
  background-color: ${ props => props.color ? pokemonTypeColor[props.color] : "white" };
  border: ${ props => props.color ? "none" : "1px solid #ddd" };
  color: ${ props => props.color ? "black" : "#555" };
  padding: 6px 8px;
  border-radius: 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: .8rem;
`