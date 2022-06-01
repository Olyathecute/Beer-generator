import React from 'react'
import { useTheme, useLang } from '../../hooks'
import Switch from '../Switch/Switch'
import { texts } from '../../texts'
import style from './Header.module.scss'

export default function Header() {
  const Theme = useTheme()
  const Lang = useLang()

  const checkedTheme = Theme.theme === 'dark' ? true : false
  const checkedLang = Lang.lang === 'en' ? true : false

  return (
    <header className={style.header}>
      <div className={style.title}>{texts[Lang.lang].header.logo}</div>
      <div className={style.switch}>
        <Switch id="theme" triggerSwitch={Theme.changeTheme} checkOn="dark" checkOff="light" checked={checkedTheme} />
        <Switch id="lang" triggerSwitch={Lang.changeLang} checkOn="en" checkOff="ru" checked={checkedLang} />
      </div>
    </header>
  )
}
