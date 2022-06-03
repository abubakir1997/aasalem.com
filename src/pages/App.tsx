import { NonIdealState } from '@blueprintjs/core'
import styled from 'styled-components'
import { AASalemContent } from '../components/AASalemContent'
import { AASalemNavbar } from '../components/AASalemNavbar'

const AASalemNonIdealState = styled(NonIdealState)`
  .bp4-non-ideal-state-text {
    max-width: 100%;
  }
`

export const App = () => (
  <>
    <AASalemNavbar />
    <AASalemContent>
      <AASalemNonIdealState
        layout="horizontal"
        icon="info-sign"
        title="Under Development"
        description="Coming Soon, the personal website for Abdelrahman Salem."
      />
      {/* Add Live Video/GIF as background with Verse as overlay */}
    </AASalemContent>
  </>
)
