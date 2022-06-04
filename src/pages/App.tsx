import { AppAddToHomeScreen } from '../components/AppAddToHomeScreen'
import { AppFooter } from '../components/AppFooter'
import { AppNavbar } from '../components/AppNavbar'
import { AppVideoHero } from '../components/AppVideoHero'
import { useAppTheme } from '../hooks/useAppTheme'

export const App = () => {
  const [appTheme, toggleAppTheme] = useAppTheme()

  return (
    <>
      <AppNavbar appTheme={appTheme} toggleAppTheme={toggleAppTheme} />
      <AppVideoHero />
      <AppAddToHomeScreen />
      <AppFooter />
    </>
  )
}
