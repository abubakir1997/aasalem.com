import { Colors } from '@blueprintjs/core'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { MobileDeviceMaxSize } from '../config/MobileDeviceMaxSize'
import MeccaImage from '../images/mecca.jpg'

const SignInContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`

const SignInContent = styled.div`
  padding: 4rem;
  flex: 0 0 538px;
  width: 538px;
  max-width: 100%;
  display: flex;
  overflow-y: auto;

  @media (max-width: ${MobileDeviceMaxSize.MOBILE_LANDSCAPE}px) {
    padding: 2rem;
    width: 100%;
    flex: 0 0 100%;
  }
`

const SignInBackground = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  filter: brightness(75%);
  background-color: ${Colors.DARK_GRAY3};
  background-image: url(${MeccaImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`

export const SignIn = () => {
  return (
    <SignInContainer>
      <SignInContent>
        <Outlet />
      </SignInContent>
      <SignInBackground />
    </SignInContainer>
  )
}
