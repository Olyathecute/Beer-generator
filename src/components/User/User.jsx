import React, { useState } from 'react'
import moment from 'moment'
import { useLang } from '../../hooks'
import { texts } from '../../texts'
import style from './User.module.scss'

export default function User({ user }) {
  const Lang = useLang()

  const [imgError, setImgError] = useState(false)

  const birthDate = moment(user.date_of_birth)
  const years = moment().diff(birthDate, 'years')

  return (
    <div className={style.user}>
      <div className={style.photo_container}>
        <img src={imgError ? '/beer.png' : user.avatar} className={style.photo} onError={() => setImgError(true)} alt="user_photo" />
      </div>

      <div className={style.name}>
        <h5>
          {user.first_name}&nbsp;<span>({texts[Lang.lang].userInfo.years(years)})</span>
        </h5>
        <p>{user.employment.title}</p>
      </div>
    </div>
  )
}
