import { Button, Card, Classes, Collapse, H4, Navbar, NavbarGroup } from '@blueprintjs/core'
import styled from 'styled-components'
import { MobileDeviceMaxSize } from '../config/MobileDeviceMaxSize'
import { NavigationConfig } from '../config/NavigationConfig'
import { Container } from '../elements/Container'
import { useDisclosure } from '../hooks/useDisclosure'
import { AppLogo } from './AppLogo'

const AppNavbarContentGrid = styled.div`
  display: grid;
  grid-gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: ${MobileDeviceMaxSize.MOBILE_LANDSCAPE}px) {
    grid-template-columns: auto;
  }
`

const AppNavbarContentCardContainer = styled(Card)`
  padding-left: 0px;
  padding-right: 0px;
`

const AppNavbarContentCard = styled(Card)`
  height: 100%;
`

const AppNavbarContentCardLink = styled.a`
  &,
  &:hover,
  &:visited,
  &:active,
  &:link {
    text-decoration: none;
    color: inherit;
  }
`

const AppNavbarContentGroup = styled.div`
  &:not(:first-child) {
    margin-top: 14px;
  }
`

const AppNavbarContentGroupTitle = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin-bottom: 7px;
`

const AppNavbarContent = () => (
  <AppNavbarContentCardContainer elevation={2}>
    <Container>
      {NavigationConfig.map((NavigationGroup, i) => (
        <AppNavbarContentGroup key={`${NavigationGroup.groupTitle}-${i}`}>
          <AppNavbarContentGroupTitle className={Classes.TEXT_MUTED}>
            {NavigationGroup.groupTitle}
          </AppNavbarContentGroupTitle>
          <AppNavbarContentGrid>
            {NavigationGroup.groupLinks.map((NavigationGroupItem, i) => (
              <AppNavbarContentCardLink href={NavigationGroupItem.path} key={`${NavigationGroupItem.path}-${i}`}>
                <AppNavbarContentCard interactive>
                  <H4>
                    <a href={NavigationGroupItem.path}>{NavigationGroupItem.name}</a>
                  </H4>
                  <p>{NavigationGroupItem.description}</p>
                </AppNavbarContentCard>
              </AppNavbarContentCardLink>
            ))}
          </AppNavbarContentGrid>
        </AppNavbarContentGroup>
      ))}
    </Container>
  </AppNavbarContentCardContainer>
)

const AppNavbarLogoContainer = styled.div`
  display: inline;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  > a {
    height: inherit;
  }
`

const AppNavbarContainer = styled(Navbar)`
  padding: 0;

  &,
  > ${Container}, > ${Container} > .bp4-navbar-group,
  > ${Container} > ${AppNavbarLogoContainer} {
    height: 60px;
  }
`

const AppNavbarContentCollapse = styled(Collapse as any)`
  overflow-y: visible;
`

const AppNavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`

export const AppNavbar = () => {
  const [isContentOpen, toggleContentOpen] = useDisclosure()

  return (
    <AppNavbarWrapper>
      <AppNavbarContainer>
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
          <AppNavbarLogoContainer>
            <a href="/">
              <AppLogo />
            </a>
          </AppNavbarLogoContainer>
        </Container>
      </AppNavbarContainer>
      <AppNavbarContentCollapse isOpen={isContentOpen}>
        <AppNavbarContent />
      </AppNavbarContentCollapse>
    </AppNavbarWrapper>
  )
}
