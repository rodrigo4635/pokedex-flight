import styled from "styled-components"

const Message = styled.p`
  text-align: center;
  padding: 10px;
`

const Footer = () => {
  return (
    <div>
      <footer>
        <Message>Developer by Rodrigo Pasini de Souza :D</Message>
      </footer>
    </div>
  )
}

export default Footer