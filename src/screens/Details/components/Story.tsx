import { useState } from "react"
import { StoryWrapper, Subtitle } from "../styles"
import { DropDown } from "components"
import { formatter } from "utils"

interface StoryProps {
  entries: PokemonFlavourText[]
}

const Story = (props: StoryProps) => {
  const { entries } = props
  const enEntries = entries.filter(el => el.language.name === "en")
  const dropDownOptions = enEntries.map(el => ({ label: formatter.idToName(el.version.name), value: el.version.name }))
  const [selectedType, setSelectedType] = useState(enEntries[0].version.name)
  const text = enEntries.find(el => el.version.name === selectedType)?.flavor_text || "Nothing to show here"

  return (
    <StoryWrapper>
      <div>
        <Subtitle>Story</Subtitle>
        <DropDown
          onSelect={ val => setSelectedType(val) }
          selected={ selectedType }
          options={ dropDownOptions }
        />
      </div>
      <p>{ text }</p>
    </StoryWrapper>
  )
}

export default Story