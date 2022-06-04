import { Colors } from '@blueprintjs/core'
import { BsPlusSquare } from 'react-icons/bs'
import { FiShare } from 'react-icons/fi'
import styled from 'styled-components'
import { MobileDeviceMaxSize } from '../config/MobileDeviceMaxSize'
import { PhoneMockup } from '../elements/PhoneMockup'
import AppAddToHomeScreenImage from '../images/aasalem-add-to-homescreen.png'

const AppAddToHomeScreenContainer = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: ${MobileDeviceMaxSize.TABLET}px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const AppAddToHomeScreenDetails = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 4rem;
  font-weight: 600;
  font-size: 28px;

  svg {
    margin-bottom: -3px;
  }

  @media (max-width: ${MobileDeviceMaxSize.TABLET}px) {
    margin-left: 0;
    margin-top: 4rem;
  }
`

const AppAddToHomeScreenTitle = styled.div`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 2rem;
`

const AppAddToHomeScreenDescription = styled.p`
  font-weight: 500;
  margin-top: 2rem;
`

const AppAddToHomeScreenImageElement = styled.img`
  width: 100%;
  object-fit: contain;
`

export const AppAddToHomeScreen = () => (
  <AppAddToHomeScreenContainer>
    <PhoneMockup>
      <AppAddToHomeScreenImageElement src={AppAddToHomeScreenImage} alt="Add to Home Screen" />
    </PhoneMockup>
    <AppAddToHomeScreenDetails>
      <AppAddToHomeScreenTitle>Add to Home Screen</AppAddToHomeScreenTitle>
      <p>
        Click the share button <FiShare size={28} color={Colors.BLUE3} />
      </p>
      <p>
        Select Add to Home Screen <BsPlusSquare size={28} color={Colors.BLUE3} />
      </p>
      <AppAddToHomeScreenDescription>
        Stay up to date with all content from <br />
        <a href="/">aasalem.com</a>
      </AppAddToHomeScreenDescription>
    </AppAddToHomeScreenDetails>
  </AppAddToHomeScreenContainer>
)
