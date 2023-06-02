import { Label, List, Wrapper } from "./styles"

export interface DropdownProps {
  options: { label: string, value: string }[]
  selected: string
  label?: string
  onSelect: (value: string) => void
  open: boolean
  onClick: (e?: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void
}

const Dropdown = (props: DropdownProps) => {
  const { options, selected, onSelect, open, onClick, label } = props

  return (
    <Wrapper>
      { label && <p>{ label }</p> }
      <select style={{ display: "none" }} value={ selected } onChange={ () => {}}>
        { options.map(opt => (
          <option value={ opt.value } >
            { opt.label }
          </option>
        ))}
      </select>
      <Label onClick={ onClick } open={ open }>
        { options.find(el => el.value === selected)?.label || "Select a sorting" }
      </Label>
      <List open={ open }>
        { options.map(opt => (
          <li onClick={ () => onSelect(opt.value) } className={ selected === opt.value ? "selected" : "" } data-option-value={ opt.value }>
            { opt.label }
          </li>
        ))}
      </List>
    </Wrapper>
  )
}

export default Dropdown