const idToName = (val: string) => {
  const upper = val.charAt(0).toUpperCase() + val.slice(1)
  return upper.replace(/\-/, " ")
}

const typesToLabelColor = (types: PokemonTypes[]) => {
  return types.map(el => ({ color: el.type.name, label: idToName(el.type.name) }))
}

const statToPerc = (stat: number, max = 255) => {
  return (stat * 100) / max
}

const percToColor = (percent: number, start = 0, end = 100) => {
  const r = percent < 50 ? 255 : Math.floor(255 - (percent * 2 - 100) * 255 / 100)
  const g = percent > 50 ? 255 : Math.floor((percent * 2) * 255 / 100)
  
  return 'rgb('+r+','+g+',0)';
}

export default {
  idToName,
  typesToLabelColor,
  statToPerc,
  percToColor
}