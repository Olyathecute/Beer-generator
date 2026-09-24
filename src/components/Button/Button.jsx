import { useLang } from '../../hooks'
import { texts } from '../../texts'

export default function Button({ fetchData }) {
  const Lang = useLang()

  return <button onClick={() => fetchData()}>{texts[Lang.lang].generateBeer}</button>
}
