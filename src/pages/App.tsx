import { AppContent } from '../components/AppContent'
import { AppFooter } from '../components/AppFooter'
import { AppNavbar } from '../components/AppNavbar'
import { AppVideoHero } from '../components/AppVideoHero'

export const App = () => {
  return (
    <>
      <AppNavbar />
      <AppVideoHero />
      <AppContent />
      <AppFooter />
    </>
  )
}
