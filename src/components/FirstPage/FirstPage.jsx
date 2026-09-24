import { useLang } from '../../hooks'
import { texts } from '../../texts'
import style from './FirstPage.module.scss'
import Button from '../Button/Button'

export default function FirstPage({ fetchData }) {
  const Lang = useLang()

  return (
    <div className={style.wrapper}>
      <h5>{texts[Lang.lang].callToAction}</h5>
      <Button fetchData={fetchData} />
    </div>
  )
}
