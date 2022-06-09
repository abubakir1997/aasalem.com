import { Colors } from '@blueprintjs/core'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import MeccaImage from '../images/mecca.jpg'

const SignInContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`

const SignInContent = styled.div`
  padding: 4rem;
  min-width: 538px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SignInBackground = styled.div`
  width: 100%;
  height: 100%;
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
