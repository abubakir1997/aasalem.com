import { AppAddToHomeScreen } from '../components/AppAddToHomeScreen'
import { AppFooter } from '../components/AppFooter'
import { AppNavbar } from '../components/AppNavbar'
import { AppVideoHero } from '../components/AppVideoHero'

export const App = () => {
  return (
    <>
      <AppNavbar />
      <AppVideoHero />
      <AppAddToHomeScreen />
      <AppFooter />
    </>
  )
}
