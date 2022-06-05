import { AnchorButton, NonIdealState } from '@blueprintjs/core'
import { HTMLProps } from 'react'

export interface PdfViewerProps extends HTMLProps<HTMLObjectElement> {
  file: string
}

export const PdfViewer = ({ file, ...props }: PdfViewerProps) => (
  <object width="100%" height="100%" {...props} data={file} type="application/pdf">
    <NonIdealState
      icon="error"
      title="Could not load PDF"
      description="You may be running an older browser"
      action={<AnchorButton href={file}>Open PDF</AnchorButton>}
    />
  </object>
)
