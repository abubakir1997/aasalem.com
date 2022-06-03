import { Button, Card, Collapse, H4, Navbar, NavbarGroup } from '@blueprintjs/core'
import styled from 'styled-components'
import { MobileDeviceMaxSize } from '../config/MobileDeviceMaxSize'
import { NavigationConfig } from '../config/NavigationConfig'
import { Container } from '../elements/Container'
import { useDisclosure } from '../hooks/useDisclosure'
import { AASalemLogo } from './AASalemLogo'

const AASalemNavbarContentGrid = styled.div`
  display: grid;
  grid-gap: 14px 14px;
  grid-template-columns: auto auto;

  @media (max-width: ${MobileDeviceMaxSize.MOBILE_LANDSCAPE}px) {
    grid-template-columns: auto;
  }
`

const AASalemNavbarContentCardContainer = styled(Card)`
  padding-left: 0px;
  padding-right: 0px;
`

const AASalemNavbarContentCard = styled(Card)`
  height: 100%;
`

const AASalemNavbarContentCardLink = styled.a`
  &,
  &:hover,
  &:visited,
  &:active,
  &:link {
    text-decoration: none;
    color: inherit;
  }
`

const AASalemNavbarContent = () => (
  <AASalemNavbarContentCardContainer elevation={2}>
    <Container>
      <AASalemNavbarContentGrid>
        {NavigationConfig.map((navigation, i) => (
          <AASalemNavbarContentCardLink href={navigation.path} key={`${navigation.path}-${i}`}>
            <AASalemNavbarContentCard interactive>
              <H4>
                <a href={navigation.path}>{navigation.name}</a>
              </H4>
              <p>{navigation.description}</p>
            </AASalemNavbarContentCard>
          </AASalemNavbarContentCardLink>
        ))}
      </AASalemNavbarContentGrid>
    </Container>
  </AASalemNavbarContentCardContainer>
)

const AASalemNavbarLogoContainer = styled.div`
  display: inline;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  > a {
    height: inherit;
  }
`

const AASalemNavbarContainer = styled(Navbar)`
  padding: 0;

  &,
  > ${Container}, > ${Container} > .bp4-navbar-group,
  > ${Container} > ${AASalemNavbarLogoContainer} {
    height: 60px;
  }
`

const AASalemNavbarContentCollapse = styled(Collapse as any)`
  overflow-y: visible;
`

export const AASalemNavbar = () => {
  const [isContentOpen, toggleContentOpen] = useDisclosure(true)

  return (
    <>
      <AASalemNavbarContainer>
        <Container>
          <NavbarGroup align="left">
            <Button
              large
              minimal
              intent="primary"
              onClick={toggleContentOpen}
              rightIcon={isContentOpen ? 'chevron-up' : 'chevron-down'}
              active={isContentOpen}>
              Content
            </Button>
          </NavbarGroup>
          <AASalemNavbarLogoContainer>
            <a href="/">
              <AASalemLogo />
            </a>
          </AASalemNavbarLogoContainer>
        </Container>
      </AASalemNavbarContainer>
      <AASalemNavbarContentCollapse isOpen={isContentOpen}>
        <AASalemNavbarContent />
      </AASalemNavbarContentCollapse>
    </>
  )
}
