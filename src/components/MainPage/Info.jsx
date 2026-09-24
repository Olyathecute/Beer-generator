import { useLang } from '../../hooks'
import { texts } from '../../texts'
import style from './MainPage.module.scss'

export default function Info({ data }) {
  const Lang = useLang()

  const dotIndex = data.description.indexOf('.')
  const description = data.description.slice(0, dotIndex + 1)

  return (
    <div className={`${style.column} ${style.smallGap}`}>
      <p>{description}</p>
      <div>
        <p>{texts[Lang.lang].beerInfo.pairing}</p>
        <ul>
          {data.food_pairing.map((pair, index) => {
            return <li key={index}>{texts[Lang.lang].beerInfo.pairingList(pair)}</li>
          })}
        </ul>
      </div>

      <div>
        <p>{texts[Lang.lang].beerInfo.params}</p>
        <ul>
          <li>{texts[Lang.lang].beerInfo.alcohol(data.abv)}</li>
          <li>{texts[Lang.lang].beerInfo.ibu(data.ibu)}</li>
          <li>{texts[Lang.lang].beerInfo.color(data.ebc)}</li>
        </ul>
      </div>
    </div>
  )
}
