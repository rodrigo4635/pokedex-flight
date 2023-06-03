import { useState } from "react"
import { Label, List, Wrapper } from "./styles"

export interface DropdownProps {
  options: { label: string, value: string }[]
  selected: string
  label?: string
  onSelect: (value: string) => void
}

const Dropdown = (props: DropdownProps) => {
  const { options, selected, onSelect, label } = props
  const [open, setOpen] = useState(false)

  const handleChangeOpen = () => {
    setOpen(!open)
  }

  const handleSelect = (val: string) => {
    setOpen(false)
    onSelect(val)
  }
  
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
      <Label onClick={ handleChangeOpen } open={ open }>
        { options.find(el => el.value === selected)?.label || "Select a sorting" }
      </Label>
      <List open={ open }>
        { options.map(opt => (
          <li onClick={ () => handleSelect(opt.value) } className={ selected === opt.value ? "selected" : "" } data-option-value={ opt.value }>
            { opt.label }
          </li>
        ))}
      </List>
    </Wrapper>
  )
}

export default Dropdown