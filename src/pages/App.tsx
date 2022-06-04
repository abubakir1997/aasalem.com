import { AppFooter } from '../components/AppFooter'
import { AppNavbar } from '../components/AppNavbar'
import { AppVideoHero } from '../components/AppVideoHero'
import { useDisclosure } from '../hooks/useDisclosure'

export const App = () => {
  const [isContentOpen, toggleContentOpen] = useDisclosure(true)

  return (
    <>
      <AppNavbar isContentOpen={isContentOpen} toggleContentOpen={toggleContentOpen} />
      <AppVideoHero isContentOpen={isContentOpen} />
      <AppFooter />
    </>
  )
}
