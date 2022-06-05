import { AnchorButtonProps, Classes, Icon, IconSize, Spinner, Utils } from '@blueprintjs/core'
import { ExternalLink, ExternalLinkProps } from './ExternalLink'
import classNames from 'classnames'

export interface AnchorRouterButtonProps extends Omit<AnchorButtonProps, 'onClick' | 'type'>, ExternalLinkProps {}

export const AnchorRouterButton = (props: AnchorRouterButtonProps) => {
  const {
    // AnchorButtonProps
    className,
    active,
    disabled,
    intent,
    minimal,
    outlined,
    large,
    small,
    fill,
    loading,
    icon,
    rightIcon,
    text,
    children,
    alignText,
    // LinkProps
    to,
    ...rest
  } = props

  const classes = classNames(
    className,
    Classes.BUTTON,
    Classes.intentClass(intent),
    Classes.alignmentClass(alignText),
    {
      [Classes.ACTIVE]: active,
      [Classes.DISABLED]: disabled,
      [Classes.MINIMAL]: minimal,
      [Classes.OUTLINED]: outlined,
      [Classes.LARGE]: large,
      [Classes.SMALL]: small,
      [Classes.FILL]: fill,
    }
  )

  const maybeHasText = !Utils.isReactNodeEmpty(text) || !Utils.isReactNodeEmpty(children)

  return (
    <ExternalLink {...rest} to={to} role="button" className={classes}>
      {[
        loading && <Spinner key="loading" className={Classes.BUTTON_SPINNER} size={IconSize.LARGE} />,
        // The icon is purely decorative if text is provided
        <Icon key="leftIcon" icon={icon} aria-hidden={maybeHasText} tabIndex={maybeHasText ? -1 : undefined} />,
        maybeHasText && (
          <span key="text" className={Classes.BUTTON_TEXT}>
            {text}
            {children}
          </span>
        ),
        <Icon key="rightIcon" icon={rightIcon} />,
      ]}
    </ExternalLink>
  )
}
