import { Wrapper } from "./styles"

const Loading = () => {
  return (
    <Wrapper>
      <img src={ require("assets/images/loading.gif") } alt="Loading animation"/>
    </Wrapper>
  )
}

export default Loading