import { Link } from "react-router-dom"
import { Img, InnerWrapper, Wrapper } from "./styles"
import ChipList from "../ChipList/ChipList"
import { formatter } from "utils"

interface SearchBarProps extends Pokemon {}

const PokeCard = (props: SearchBarProps) => {
  const { name, id, types, sprites } = props

  return (
    <Wrapper>
      <Link to={ `/${ name }`}>
      <Img
        src={ sprites.other.dream_world.front_default }
        alt={ name }
      />
      <InnerWrapper className="inner">
        <p className="number">#{ id }</p>
        <p className="name">{ formatter.idToName(name) }</p>
        <ChipList
          centered
          list={ formatter.typesToLabelColor(types) }
        />
      </InnerWrapper>
      </Link>
    </Wrapper>
  )
}

export default PokeCard