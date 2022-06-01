import React, { useState } from 'react'
import axios from 'axios'
import { useLang } from '../../hooks'
import { texts } from '../../texts'
import style from './BeerInfo.module.scss'

export default function BeerInfo() {
  const Lang = useLang()
  const [newBeer, setNewBeer] = useState(false)

  const fetchData = async () => {
    const result = await axios('https://random-data-api.com/api/beer/random_beer')
    setNewBeer(result.data)
  }

  return (
    <div className={style.beer}>
      {!newBeer ? (
        <h5>{texts[Lang.lang].beerInfo.callToAction}</h5>
      ) : (
        <div>
          <p>{texts[Lang.lang].title}</p>
          <ul>
            <li>
              <b>{newBeer.name}</b>
            </li>
            <li>{texts[Lang.lang].beerInfo.brand(newBeer.brand)}</li>
            <li className={style.small}>{texts[Lang.lang].beerInfo.info(newBeer.ibu, newBeer.alcohol, newBeer.blg)}</li>
          </ul>
        </div>
      )}
      <button onClick={() => fetchData()}>{texts[Lang.lang].beerInfo.button}</button>
    </div>
  )
}
