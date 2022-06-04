import { Colors } from '@blueprintjs/core'
import { FaEnvelope, FaFacebookF, FaGithub, FaHome, FaLinkedinIn, FaPhone, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'
import { MobileDeviceMaxSize } from '../config/MobileDeviceMaxSize'
import { NavigationConfig } from '../config/NavigationConfig'
import { Container } from '../elements/Container'
import AppLogoImage from '../images/aasalem-logo.png'

export const AppFooterContainer = styled.footer`
  background-color: rgb(243, 244, 246);
  color: rgb(75, 85, 99);
  text-align: left;
`

export const AppFooterSocialMediaContainer = styled.div`
  border: 1px solid rgb(209, 213, 219);
  padding: 1.5rem;

  > ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${MobileDeviceMaxSize.MOBILE_LANDSCAPE}px) {
      justify-content: center;
    }
  }
`

const AppFooterSocialMediaText = styled.div`
  display: block;
  margin-right: 3rem;
  font-size: 16px;

  @media (max-width: ${MobileDeviceMaxSize.MOBILE_LANDSCAPE}px) {
    display: none;
  }
`

const AppFooterSocialMedia = styled.div`
  display: flex;
  justify-content: center;
`

const AppFooterSocialMediaLink = styled.a`
  color: rgb(75, 85, 99);
  transition: color 300ms ease;

  &:hover {
    color: ${Colors.BLUE3};
  }

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`

const AppFooterContentContainer = styled.div`
  padding: 2.5rem 1.5rem;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.1;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-image: url(${AppLogoImage});
    background-repeat: no-repeat;
    background-size: 256px;
    filter: grayscale(100%);
  }
`

const AppFooterContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2rem;

  @media (max-width: ${MobileDeviceMaxSize.MOBILE_PORTRAIT}px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

const AppFooterContentTitle = styled.div`
  display: flex;
  text-transform: uppercase;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 20px;
  font-weight: 600;
`

const AppFooterContentText = styled.p`
  font-weight: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    margin-right: 1rem;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const AppFooterCopyRightContainer = styled.div`
  text-align: center;
  padding: 1.5rem;
  font-size: 16px;
  background-color: rgb(229, 231, 235);
`

const AppFooterCopyRightLink = styled.a`
  font-weight: 600;
`

export const AppFooter = () => (
  <AppFooterContainer>
    <AppFooterSocialMediaContainer>
      <Container>
        <AppFooterSocialMediaText>Get connected with me on social networks:</AppFooterSocialMediaText>
        <AppFooterSocialMedia>
          <AppFooterSocialMediaLink>
            <FaYoutube size={16} />
          </AppFooterSocialMediaLink>
          <AppFooterSocialMediaLink>
            <FaFacebookF size={16} />
          </AppFooterSocialMediaLink>
          <AppFooterSocialMediaLink>
            <FaLinkedinIn size={16} />
          </AppFooterSocialMediaLink>
          <AppFooterSocialMediaLink>
            <FaGithub size={16} />
          </AppFooterSocialMediaLink>
        </AppFooterSocialMedia>
      </Container>
    </AppFooterSocialMediaContainer>
    <AppFooterContentContainer>
      <Container>
        <AppFooterContentGrid>
          <div>
            <AppFooterContentTitle>AASALEM.COM</AppFooterContentTitle>
            <AppFooterContentText>
              This is the personal website for Abdelrahman Salem. It is both developed and maintained by Abdelrahman
              Salem.
            </AppFooterContentText>
          </div>
          <div>
            <AppFooterContentTitle>Links</AppFooterContentTitle>
            {NavigationConfig.map((NavigationGroup) =>
              NavigationGroup.groupLinks.map((NavigationItem, i) => (
                <AppFooterContentText key={`${NavigationItem.path}-${i}`}>
                  <a href={NavigationItem.path}>{NavigationItem.name}</a>
                </AppFooterContentText>
              ))
            )}
          </div>
          <div>
            <AppFooterContentTitle>Contact</AppFooterContentTitle>
            <AppFooterContentText>
              <FaHome size={18} /> Philadelphia, PA
            </AppFooterContentText>
            <AppFooterContentText>
              <FaEnvelope size={16} /> abubakir1997@gmail.com
            </AppFooterContentText>
            <AppFooterContentText>
              <FaPhone size={16} /> +1 (215) 337-5567
            </AppFooterContentText>
          </div>
        </AppFooterContentGrid>
      </Container>
    </AppFooterContentContainer>
    <AppFooterCopyRightContainer>
      <span>© {new Date().getFullYear()} Copyright: </span>
      <AppFooterCopyRightLink href="#">Abdelrahman Salem</AppFooterCopyRightLink>
    </AppFooterCopyRightContainer>
  </AppFooterContainer>
)
