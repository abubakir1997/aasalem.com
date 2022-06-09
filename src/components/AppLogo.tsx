import { HTMLProps } from 'react'
import styled, { css } from 'styled-components'
import AppLogoImage from '../images/aasalem-logo.png'

interface AppLogoImgElementProps extends HTMLProps<HTMLImageElement> {
  size?: number
  center?: boolean
}

const AppLogoImgElement = styled.img<AppLogoImgElementProps>`
  max-height: 100%;
  max-width: 100%;

  ${(props) => {
    if (typeof props.size === 'number') {
      return css`
        height: ${props.size}px;
      `
    }
  }}

  ${(props) => {
    if (props.center) {
      return css`
        margin: 0 auto;
        display: block;
      `
    }
  }}
`

export interface AppLogoProps extends AppLogoImgElementProps {}

export const AppLogo = (props: AppLogoProps) => (
  <AppLogoImgElement alt="Abu Bakr A.Salem" {...(props as any)} src={AppLogoImage} />
)
