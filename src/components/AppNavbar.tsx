import { Icon, Button, Card, Classes, Colors, H4, Navbar, NavbarGroup } from '@blueprintjs/core'
import { ExternalLink, ExternalNavLink } from '../elements/ExternalLink'
import styled, { css } from 'styled-components'
import { MobileDeviceMaxSize } from '../config/MobileDeviceMaxSize'
import { NavigationConfig } from '../config/NavigationConfig'
import { Collapser } from '../elements/Collapser'
import { Container } from '../elements/Container'
import { AppTheme } from '../hooks/useAppTheme'
import { useDisclosure } from '../hooks/useDisclosure'
import { AppLogo } from './AppLogo'

export const APP_NAVBAR_HEIGHT = 60

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
  max-height: calc(100vh - ${APP_NAVBAR_HEIGHT}px);
  overflow: auto;
`

const AppNavbarContentCard = styled(Card)<{ isActive: boolean }>`
  height: 100%;

  ${(props) => {
    if (props.isActive) {
      return css`
        &,
        &.bp4-card.bp4-interactive:hover {
          box-shadow: 0 0 0 2px ${Colors.BLUE3};
        }

        .bp4-dark &,
        .bp4-dark &.bp4-card.bp4-interactive:hover {
          box-shadow: 0 0 0 2px ${Colors.BLUE5};
        }
      `
    }
  }}
`

const AppNavbarContentHeader = styled(H4)`
  display: flex;
  align-items: center;
  color: ${Colors.BLUE2};

  .bp4-dark & {
    color: ${Colors.BLUE5};
  }

  ${AppNavbarContentCard}:hover & {
    text-decoration: underline;
    text-decoration-color: ${Colors.BLUE2};

    .bp4-dark & {
      text-decoration-color: ${Colors.BLUE5};
    }
  }

  svg {
    margin-left: 3px;
  }
`

const AppNavbarContentCardLink = styled(ExternalNavLink)`
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

interface AppNavbarContentProps {
  toggleContentOpen: () => any
}

const AppNavbarContent = ({ toggleContentOpen }: AppNavbarContentProps) => (
  <AppNavbarContentCardContainer elevation={2}>
    <Container>
      {NavigationConfig.map((NavigationGroup, i) => (
        <AppNavbarContentGroup key={`${NavigationGroup.groupTitle}-${i}`}>
          <AppNavbarContentGroupTitle className={Classes.TEXT_MUTED}>
            {NavigationGroup.groupTitle}
          </AppNavbarContentGroupTitle>
          <AppNavbarContentGrid>
            {NavigationGroup.groupLinks.map((NavigationItem, i) => (
              <AppNavbarContentCardLink
                onClick={toggleContentOpen}
                to={{ pathname: NavigationItem.path }}
                target={NavigationItem.target}
                key={`${NavigationItem.path}-${i}`}>
                {({ isActive }) => (
                  <AppNavbarContentCard interactive isActive={isActive}>
                    <AppNavbarContentHeader>
                      {NavigationItem.name} {NavigationItem.target === '_blank' && <Icon icon="share" />}
                    </AppNavbarContentHeader>
                    <p>{NavigationItem.description}</p>
                  </AppNavbarContentCard>
                )}
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

  .bp4-dark & {
    box-shadow: 0 0 0 1px rgb(17 20 24 / 10%), 0 1px 1px rgb(17 20 24 / 20%);
  }

  &,
  > ${Container}, > ${Container} > .bp4-navbar-group,
  > ${Container} > ${AppNavbarLogoContainer} {
    height: ${APP_NAVBAR_HEIGHT}px;
  }
`

const AppNavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${APP_NAVBAR_HEIGHT}px;
  z-index: 1000;
`

const AppNavbarGap = styled.div`
  width: 100%;
  height: ${APP_NAVBAR_HEIGHT}px;
`

export interface AppNavbarProps {
  appTheme: AppTheme
  toggleAppTheme: () => any
}

export const AppNavbar = ({ appTheme, toggleAppTheme }: AppNavbarProps) => {
  const [isContentOpen, toggleContentOpen, closeContentOpen] = useDisclosure()

  return (
    <>
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
              <ExternalLink to="/" onClick={closeContentOpen}>
                <AppLogo />
              </ExternalLink>
            </AppNavbarLogoContainer>
            <NavbarGroup align="right">
              <Button large minimal onClick={toggleAppTheme} icon={appTheme === 'dark' ? 'flash' : 'moon'} />
            </NavbarGroup>
          </Container>
        </AppNavbarContainer>
        <Collapser isOpen={isContentOpen}>
          <AppNavbarContent toggleContentOpen={toggleContentOpen} />
        </Collapser>
      </AppNavbarWrapper>
      <AppNavbarGap />
    </>
  )
}
