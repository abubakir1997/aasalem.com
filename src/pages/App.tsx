import { AddToHomeScreen } from '../components/AddToHomeScreen'
import { AppFooter } from '../components/AppFooter'
import { AppNavbar } from '../components/AppNavbar'
import { HomeVideoHero } from '../components/HomeVideoHero'
import { useAppTheme } from '../hooks/useAppTheme'

export const App = () => {
  const [appTheme, toggleAppTheme] = useAppTheme()

  return (
    <>
      <AppNavbar appTheme={appTheme} toggleAppTheme={toggleAppTheme} />
      <HomeVideoHero />
      <AddToHomeScreen />
      <AppFooter />
    </>
  )
}
