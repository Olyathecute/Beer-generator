import { useContext } from 'react'
import { ThemeContext, LangContext } from '../context/Context'

export const useTheme = () => useContext(ThemeContext)
export const useLang = () => useContext(LangContext)
