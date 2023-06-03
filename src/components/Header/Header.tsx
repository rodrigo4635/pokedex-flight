import { Link } from "react-router-dom"
import { Wrapper } from "./styles"

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={ require("assets/nav-buttons.png") }/>
      </Link>
    </Wrapper>
  )
}

export default Header