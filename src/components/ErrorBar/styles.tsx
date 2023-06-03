import styled from "styled-components"
import mediaQueries from "styles/mediaQueries"

export const Wrapper = styled.div<{ visible: boolean }>`
  padding: 20px;
  background-color: #d14444;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 20px;
  width: calc(92% - 40px);
  left: 4%;
  display: ${ props => props.visible ? "flex" : "none" };

  ${ mediaQueries("medium") } {
    width: calc(80% - 40px);
    left: 10%;
  }

  p {
    color: white;
    font-size: 1.2rem;
  }

  button {
    background: none;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`