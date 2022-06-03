import { Button, Card, Collapse, H4, Navbar, NavbarGroup } from '@blueprintjs/core'
import styled from 'styled-components'
import { MobileDeviceMaxSize } from '../config/MobileDeviceMaxSize'
import { NavigationConfig } from '../config/NavigationConfig'
import { Container } from '../elements/Container'
import { useDisclosure } from '../hooks/useDisclosure'
import { AASalemLogo } from './AASalemLogo'

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

const AASalemNavbarContentGrid = styled.div`
  display: grid;
  grid-gap: 14px 14px;
  grid-template-columns: auto auto;

  @media (max-width: ${MobileDeviceMaxSize.MOBILE_LANDSCAPE}px) {
    grid-template-columns: auto;
  }

  .bp4-card {
    height: 100%;
  }

  > a,
  > a:hover,
  > a:visited,
  > a:active,
  > a:link {
    text-decoration: none;
    color: inherit;
  }
`

const AASalemNavbarContentCard = styled(Card)`
  padding-left: 0px;
  padding-right: 0px;
`

const AASalemNavbarContent = () => (
  <AASalemNavbarContentCard elevation={2}>
    <Container>
      <AASalemNavbarContentGrid>
        {NavigationConfig.map((navigation, i) => (
          <a href={navigation.path} key={`${navigation.path}-${i}`}>
            <Card interactive>
              <H4>
                <a href={navigation.path}>{navigation.name}</a>
              </H4>
              <p>{navigation.description}</p>
            </Card>
          </a>
        ))}
      </AASalemNavbarContentGrid>
    </Container>
  </AASalemNavbarContentCard>
)

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
      <Collapse isOpen={isContentOpen}>
        <AASalemNavbarContent />
      </Collapse>
    </>
  )
}
