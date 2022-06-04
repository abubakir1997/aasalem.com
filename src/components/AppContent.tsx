import { Colors } from '@blueprintjs/core'
import { BsPlusSquare } from 'react-icons/bs'
import { FiShare } from 'react-icons/fi'
import styled from 'styled-components'
import { MobileDeviceMaxSize } from '../config/MobileDeviceMaxSize'
import { PhoneMockup } from '../elements/PhoneMockup'
import AppContentPhoneMockupImage from '../images/aasalem-add-to-homescreen.png'

const AppContentContainer = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: ${MobileDeviceMaxSize.TABLET}px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
`

const AppContentDetails = styled.div`
  margin-right: 4rem;
  font-weight: 600;
  font-size: 28px;
  padding: 4em 0;

  svg {
    margin-bottom: -3px;
  }

  @media (max-width: ${MobileDeviceMaxSize.MOBILE_PORTRAIT}px) {
    margin-right: 0;
    margin-top: 4rem;
  }
`

const AppContentTitle = styled.div`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 2rem;
`

const AppContentDescription = styled.p`
  font-weight: 500;
  margin-top: 2rem;
`

const AppContentWebsite = styled.div`
  color: ${Colors.BLUE3};
`

const AppContentPhoneMockupImageElement = styled.img`
  width: 100%;
  object-fit: contain;
`

export const AppContent = () => (
  <AppContentContainer>
    <AppContentDetails>
      <AppContentTitle>Add to Home Screen</AppContentTitle>
      <p>
        Click the share button <FiShare size={28} color={Colors.BLUE3} />
      </p>
      <p>
        Select Add to Home Screen <BsPlusSquare size={28} color={Colors.BLUE3} />
      </p>
      <AppContentDescription>
        Stay up to date with all content from <AppContentWebsite>aasalem.com</AppContentWebsite>
      </AppContentDescription>
    </AppContentDetails>
    <PhoneMockup>
      <AppContentPhoneMockupImageElement src={AppContentPhoneMockupImage} alt="Add to Home Screen" />
    </PhoneMockup>
  </AppContentContainer>
)
