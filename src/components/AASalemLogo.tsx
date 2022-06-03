import { HTMLProps } from 'react'
import styled from 'styled-components'
import AASalemLogoImage from '../images/aasalem-logo.png'

const AASalemLogoImgElement = styled.img`
  max-height: 100%;
  max-width: 100%;
`

export interface AASalemLogoProps extends HTMLProps<HTMLImageElement> {}

export const AASalemLogo = (props: AASalemLogoProps) => (
  <AASalemLogoImgElement alt="Abu Bakr A.Salem" {...(props as any)} src={AASalemLogoImage} />
)
