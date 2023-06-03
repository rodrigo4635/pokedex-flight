import { Wrapper } from "./styles"

interface ErrorBarProps {
  value: string
  onClose: () => void
}

const ErrorBar = (props: ErrorBarProps) => {
  const { value, onClose } = props

  return (
    <Wrapper>
      <p>{ value }</p>
      <button onClick={ onClose }>Close</button>
    </Wrapper>
  )
}

export default ErrorBar