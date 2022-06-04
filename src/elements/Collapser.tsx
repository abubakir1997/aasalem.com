import styled, { css } from 'styled-components'

export interface CollapserProps {
  isOpen: boolean
}

export const Collapser = styled.div<CollapserProps>`
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  transition: all 300ms ease;

  ${(props) => {
    if (props.isOpen) {
      return css`
        opacity: 1;
        transform: translate3d(0, 0, 0);
      `
    }
  }}
`
