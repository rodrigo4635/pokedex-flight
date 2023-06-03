import { useEffect } from "react"
import { Wrapper } from "./styles"

interface ErrorBarProps {
  value: string
  onClose: () => void
}

const ErrorBar = (props: ErrorBarProps) => {
  const { value, onClose } = props

  useEffect(() => {
    if (value) {
      setTimeout(() => {
        onClose()
      }, 5000)
    }
  }, [value, onClose])

  return (
    <Wrapper visible={ Boolean(value) }>
      <p>⚠ { value.slice(0, 50) }</p>
      <button onClick={ onClose } aria-label="Close dialog">X</button>
    </Wrapper>
  )
}

export default ErrorBar