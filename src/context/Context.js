import { createContext } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  changeTheme: () => {}
})

export const LangContext = createContext({
  lang: 'en',
  changeLang: () => {}
})
