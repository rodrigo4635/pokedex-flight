import { Link } from "react-router-dom"
import { Wrapper } from "./styles"

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={ require("assets/images/nav-buttons.png") } alt="Pokedex buttons"/>
      </Link>
    </Wrapper>
  )
}

export default Header