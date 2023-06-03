import { Link } from "react-router-dom"
import { StyledHeader } from "./styles"

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={ require("assets/nav-buttons.png")}/>
      </Link>
    </StyledHeader>
  )
}

export default Header