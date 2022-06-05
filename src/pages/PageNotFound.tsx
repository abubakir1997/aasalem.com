import { Colors, NonIdealState } from '@blueprintjs/core'
import { TbError404 } from 'react-icons/tb'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { AnchorRouterButton } from '../elements/AnchorRouterButton'
import { PageContent } from '../elements/PageContent'

const PageNotFoundPathName = styled.span`
  color: ${Colors.BLUE3};
  font-weight: 600; ;
`

const PageNotFoundNonIdealState = styled(NonIdealState)`
  > .bp4-non-ideal-state-visual {
    margin-bottom: -20px;
  }

  .bp4-heading {
    font-size: 2rem;
  }
`

const PageNotFoundDescription = styled.div`
  font-size: 1.5rem;
  margin-top: 1.5rem;
`

export const PageNotFound = () => {
  const location = useLocation()

  return (
    <PageContent>
      <PageNotFoundNonIdealState
        icon={<TbError404 size={192} />}
        title="Page not found"
        action={
          <AnchorRouterButton replace large outlined intent="primary" icon="home" text="Go to Home Page" to="/" />
        }
        description={
          <PageNotFoundDescription>
            The following link <PageNotFoundPathName>"{location.pathname}"</PageNotFoundPathName> does not exist on this
            site.
          </PageNotFoundDescription>
        }
      />
    </PageContent>
  )
}
