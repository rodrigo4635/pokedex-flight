import { Label, Wrapper } from "./styles"

interface ChipListProps {
  centered?: boolean
  list: {
    label: string
    color?: string
  }[]
}

const ChipList = (props: ChipListProps) => {
  const { list, centered } = props

  return (
    <Wrapper
      centered={ centered }
    >
      { list.map(el => (
        <Label color={ el.color }>
          { el.label }
        </Label>
      ))}
    </Wrapper>
  )
}

export default ChipList