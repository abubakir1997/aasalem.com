import styled from 'styled-components'
import { MobileDeviceMaxSize } from '../config/MobileDeviceMaxSize'
// @ts-ignore
import AppHeroVideo from '../images/aasalem-hero.mp4'

const AppVideoContainer = styled.div`
  position: relative;
  max-height: calc(100% - 60px);
  min-height: 650px;
`

const AppVideo = styled.video`
  z-index: -1;
  position: relative;
  width: 100vw;
  min-width: 100vw;
  max-height: calc(100vh - 60px);
  min-height: 650px;
  object-fit: cover;
`

const AppVideoOverlay = styled.div`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding: 4rem 2rem;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
`

const AppVideoOverlayHeader = styled.h1`
  @font-face {
    font-family: 'Mushaf Page 365';
    src: local('QCF_P365'),
      url(https://cdn.rawgit.com/mustafa0x/qpc-fonts/f93bf5f3/mushaf-woff2/QCF_P365.woff2) format('woff2'),
      url(https://cdn.rawgit.com/mustafa0x/qpc-fonts/f93bf5f3/mushaf-woff/QCF_P365.woff) format('woff');
  }

  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-family: 'Mushaf Page 365';

  margin: auto 0;
  font-size: 4.5rem;

  @media (max-width: ${MobileDeviceMaxSize.TABLET}px) {
    font-size: 3.5rem;
  }
  @media (max-width: ${MobileDeviceMaxSize.MOBILE_LANDSCAPE}px) {
    font-size: 2.3rem;
  }
  @media (max-width: ${MobileDeviceMaxSize.MOBILE_PORTRAIT}px) {
    font-size: 1rem;
  }
`

const AppVideoOverlayHeaderEnglish = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  white-space: nowrap;

  &:before,
  &:after {
    font-size: 6rem;
    line-height: 6rem;
  }

  &:before {
    content: '(';
  }
  &:after {
    content: ')';
  }

  @media (max-width: ${MobileDeviceMaxSize.TABLET}px) {
    font-size: 1.25rem;

    &:before,
    &:after {
      font-size: 5rem;
      line-height: 5rem;
    }
  }
  @media (max-width: ${MobileDeviceMaxSize.MOBILE_LANDSCAPE}px) {
    font-size: 1rem;

    &:before,
    &:after {
      font-size: 4rem;
      line-height: 4rem;
    }
  }
  @media (max-width: ${MobileDeviceMaxSize.MOBILE_PORTRAIT}px) {
    font-size: 0.75rem;

    &:before,
    &:after {
      font-size: 3rem;
      line-height: 3rem;
    }
  }
`

export const AppVideoHero = () => (
  <AppVideoContainer>
    <AppVideo autoPlay loop muted>
      <source src={AppHeroVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </AppVideo>
    <AppVideoOverlay>
      <AppVideoOverlayHeader>
        <div>ﮱﯓﯔﯕﯖﯗ ﯘ</div>
        <div>ﯙﯚﯛﯜﯝﯞ</div>
        <AppVideoOverlayHeaderEnglish>
          <div>
            <div>And the servants of the Most Merciful are those</div>
            <div>who walk upon the earth easily, and when the ignorant</div>
            <div>address them (harshly), they say (words of) peace</div>
          </div>
        </AppVideoOverlayHeaderEnglish>
      </AppVideoOverlayHeader>
    </AppVideoOverlay>
  </AppVideoContainer>
)
