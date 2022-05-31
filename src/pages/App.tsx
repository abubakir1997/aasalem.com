import { useEffect } from 'react'
import { useTheme } from 'react-daisyui'
import { Feature } from '../components/Feature'
import { Navbar } from '../components/Navbar'

export const App = () => {
  const { setTheme } = useTheme()

  useEffect(() => setTheme('light'), [])

  return (
    <>
      <Navbar />
      <Feature />
    </>
  )
}
