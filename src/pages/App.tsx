import { NonIdealState } from '@blueprintjs/core'
import { AASalemContent } from '../components/AASalemContent'
import { AASalemNavbar } from '../components/AASalemNavbar'

export const App = () => (
  <>
    <AASalemNavbar />
    <AASalemContent>
      <NonIdealState
        layout="horizontal"
        icon="info-sign"
        title="Under Development"
        description="Coming Soon, the personal website for Abdelrahman Salem."
      />
    </AASalemContent>
  </>
)
