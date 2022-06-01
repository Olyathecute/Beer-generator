import { useState, useEffect } from 'react'
import { ThemeContext, LangContext } from '../context/Context'
import { changeCssRootVariables } from '../model/ChangeCssRootVariables'
import { storage } from '../model/storage'

export const Provider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(storage.getItem('theme') || 'light')
  const [lang, setLang] = useState(storage.getItem('lang') || 'en')

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const changeLang = () => {
    setLang(lang === 'en' ? 'ru' : 'en')
  }

  useEffect(() => {
    changeCssRootVariables(theme)
    storage.setItem('theme', theme)
    storage.setItem('lang', lang)
  }, [theme, lang])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      <LangContext.Provider value={{ lang, changeLang }} {...props}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  )
}
