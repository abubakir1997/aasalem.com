import { Outlet } from 'react-router-dom'
import { AppFooter } from '../components/AppFooter'
import { AppNavbar } from '../components/AppNavbar'
import { useAppTheme } from '../hooks/useAppTheme'

export const App = () => {
  const [appTheme, toggleAppTheme] = useAppTheme()

  return (
    <>
      <AppNavbar appTheme={appTheme} toggleAppTheme={toggleAppTheme} />
      <Outlet />
      <AppFooter />
    </>
  )
}
