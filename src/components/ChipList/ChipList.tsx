import { Label, Wrapper } from "./styles"

interface PokeTypeListProps {
  centered?: boolean
  list: {
    label: string
    color?: string
  }[]
}

const PokeTypeList = (props: PokeTypeListProps) => {
  const { list, centered } = props

  return (
    <Wrapper centered={ centered }>
      { list.map(el => <Label color={ el.color }>{ el.label }</Label>) }
    </Wrapper>
  )
}

export default PokeTypeList;