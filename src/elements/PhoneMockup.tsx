import { ReactNode } from 'react'
import styled from 'styled-components'

const PhoneMockupContainer = styled.div`
  display: inline-block;
  border: 4px solid #444;
  border-radius: 50px;
  background-color: #000;
  padding: 10px;
  width: 348px;
  min-width: 348px;
  max-width: 348px;
  overflow: hidden;
`

const PhoneMockupCamera = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background: #000;
  height: 25px;
  width: 150px;
  margin: 0 auto;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  z-index: 11;
`

const PhoneMockupDisplay = styled.div`
  overflow: hidden;
  border-radius: 40px;
  margin-top: -25px;
`

const PhoneMockupArtboard = styled.div`
  width: 320px;
  min-width: 320px;
  max-width: 320px;
  height: 690px;
  background-color: hsl(0, 0%, 100%);
  color: hsl(215, 28%, 17%);
  border-radius: 1rem;
  box-shadow: 0 1px 3px #0000001a, 0 1px 2px #0000000f;
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export interface PhoneMockupProps {
  children?: ReactNode
}

export const PhoneMockup = ({ children }: PhoneMockupProps) => (
  <PhoneMockupContainer>
    <PhoneMockupCamera />
    <PhoneMockupDisplay>
      <PhoneMockupArtboard>{children}</PhoneMockupArtboard>
    </PhoneMockupDisplay>
  </PhoneMockupContainer>
)
