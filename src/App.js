import { useState } from 'react'
import axios from 'axios'
import FirstPage from './components/FirstPage/FirstPage'
import Info from './components/MainPage/Info'
import Title from './components/MainPage/Title'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'
import style from './App.module.scss'

export default function App() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)

    try {
      const result = await axios('https://punkapi-alxiw.amvera.io/v3/beers/random')
      const beerImg = await axios(`https://punkapi-alxiw.amvera.io/v3/images/${result.data.image}`, {
        responseType: 'blob'
      })

      const imageUrl = URL.createObjectURL(beerImg.data)
      setData({ ...result.data, beerImg: imageUrl })
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={style.wrapper}>
      <Header />
      {loading ? (
        <div className={style.firstPage}>
          <Loader />
        </div>
      ) : data ? (
        <div className={style.firstPage}>
          <Title data={data} />
          <Info data={data} />
          <div className={style.button}>
            <Button fetchData={fetchData} />
          </div>
        </div>
      ) : (
        <div className={style.firstPage}>
          <FirstPage fetchData={fetchData} />
        </div>
      )}
    </div>
  )
}
