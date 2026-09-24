import { useState } from 'react'
import { useLang } from '../../hooks'
import { texts } from '../../texts'
import style from './MainPage.module.scss'

export default function Title({ data }) {
  const Lang = useLang()

  const [imgError, setImgError] = useState(false)

  return (
    <div className={`${style.column} ${style.bigGap}`}>
      <p>{texts[Lang.lang].beerInfo.title}</p>
      <div className={style.photo_container}>
        <img src={imgError ? '/beer.png' : data.beerImg} className={style.photo} onError={() => setImgError(true)} alt="beer_photo" />
      </div>

      <div>
        <p>{data.name}&nbsp;</p>
        <span className={style.transparent}>{texts[Lang.lang].beerInfo.brand(data.contributed_by)}</span>
      </div>
    </div>
  )
}
