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
      </AppVideoOverlayHeader>
    </AppVideoOverlay>
  </AppVideoContainer>
)
