import { formatter } from "utils"
import { StatBar, StatsTable, StatsWrapper, Subtitle } from "../styles"

interface SmallCardProps {
  stats: PokemonStat[]
}

const Stats = (props: SmallCardProps) => {
  const { stats } = props

  return (
    <StatsWrapper>
      <Subtitle>Stats</Subtitle>
      <StatsTable>
        <tbody>
          { stats.map(stat => (
            <tr>
              <th>{ formatter.idToName(stat.stat.name) }</th>
              <td className="val">{ stat.base_stat }</td>
              <StatBar perc={ formatter.statToPerc(stat.base_stat) }>
                <div/>
                <div className="filled"/>
              </StatBar>
            </tr>
          ))}
        </tbody>
      </StatsTable>
    </StatsWrapper>
  )
}

export default Stats;