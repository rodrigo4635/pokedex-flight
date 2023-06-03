import { SmallCardWrapper } from "../styles"

interface SmallCardProps {
  label: string
  value: number | string
}

const SmallCard = (props: SmallCardProps) => {
  const { label, value } = props

  return (
    <SmallCardWrapper>
      <p className="label">{ label }</p>
      <p>{ value }</p>
    </SmallCardWrapper>
  )
}

export default SmallCard