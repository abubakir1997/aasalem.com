import { HTMLProps } from 'react'
import styled from 'styled-components'
import AppLogoImage from '../images/aasalem-logo.png'

const AppLogoImgElement = styled.img`
  max-height: 100%;
  max-width: 100%;
`

export interface AppLogoProps extends HTMLProps<HTMLImageElement> {}

export const AppLogo = (props: AppLogoProps) => (
  <AppLogoImgElement alt="Abu Bakr A.Salem" {...(props as any)} src={AppLogoImage} />
)
