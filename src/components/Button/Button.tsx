import { StyledButton } from "./styles"

export interface ButtonProps {
  label: string
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}

const Dropdown = (props: ButtonProps) => {
  const { label, onClick, disabled } = props

  return (
    <StyledButton onClick={ onClick } disabled={ disabled }>
      <span>{ label }</span>
    </StyledButton>
  )
}

export default Dropdown