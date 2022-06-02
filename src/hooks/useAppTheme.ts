import { useCallback, useEffect, useState } from 'react'

export type AppTheme = 'light' | 'dark'

export const useAppTheme = () => {
  const getDefaultTheme = useCallback(() => (window.localStorage.getItem('aasalem-theme') as AppTheme) || 'light', [])
  const [theme, setTheme] = useState<AppTheme>(getDefaultTheme())
  const toggleTheme = useCallback(() => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark')), [])

  useEffect(() => {
    const currentTheme = theme || getDefaultTheme()
    document.getElementsByTagName('html')[0].setAttribute('data-theme', currentTheme)
    window.localStorage.setItem('aasalem-theme', currentTheme)
    setTheme(currentTheme)
  }, [theme, getDefaultTheme])

  return [theme, toggleTheme, setTheme] as const
}
