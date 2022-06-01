import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './components/User/User'
import BeerInfo from './components/Beer/BeerInfo'
import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'
import style from './App.module.scss'

export default function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://random-data-api.com/api/users/random_user')
      setUser(result.data)
    }
    fetchData()
  }, [])

  if (!user) return <Loader />

  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.info}>
        <User user={user} />
        <BeerInfo />
      </div>
    </div>
  )
}
