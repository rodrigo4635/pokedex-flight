import { formatter } from "utils"
import { StatBar, StatsTable, Subtitle } from "../styles"

interface SmallCardProps {
  stats: PokemonStat[]
}

const Stats = (props: SmallCardProps) => {
  const { stats } = props

  return (
    <div>
      <Subtitle>Stats</Subtitle>
      <StatsTable>
        <tbody>
          { stats.map(stat => (
            <tr>
              <th>{ formatter.idToName(stat.stat.name) }</th>
              <td className="val">{ stat.base_stat }</td>
              <StatBar perc={ formatter.valueToPerc(stat.base_stat) }>
                <div/>
                <div className="filled"/>
              </StatBar>
            </tr>
          ))}
        </tbody>
      </StatsTable>
    </div>
  )
}

export default Stats