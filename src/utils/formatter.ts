const idToName = (val: string) => {
  const upper = val.charAt(0).toUpperCase() + val.slice(1)
  return upper.replace(/-/, " ")
}

const typesToLabelColor = (types: PokemonType[]) => {
  return types.map(el => ({ color: el.type.name, label: idToName(el.type.name) }))
}

const valueToPerc = (val: number, max = 255) => {
  return (val * 100) / max
}

const percToColor = (percent: number) => {
  const r = percent < 50 ? 255 : Math.floor(255 - (percent * 2 - 100) * 255 / 100)
  const g = percent > 50 ? 255 : Math.floor((percent * 2) * 255 / 100)
  
  return `rgb(${ r }, ${ g }, 0)`
}

const formatter = {
  idToName,
  typesToLabelColor,
  valueToPerc,
  percToColor
}

export default formatter