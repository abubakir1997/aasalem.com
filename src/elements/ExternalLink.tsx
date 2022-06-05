import { isFunction } from 'lodash'
import { Link as RRLink, LinkProps, NavLink as RRNavLink, NavLinkProps } from 'react-router-dom'
import { isExternalLink } from '../utils/isExternalLink'

const getPathname = (props: LinkProps | NavLinkProps) => (typeof props.to === 'string' ? props.to : props.to.pathname)

export interface ExternalLinkProps extends LinkProps {}

export const ExternalLink = (props: ExternalLinkProps) => {
  const pathname = getPathname(props)
  // eslint-disable-next-line
  return isExternalLink(pathname) ? <a {...props} href={pathname} /> : <RRLink {...props} />
}

export interface ExternalNavLinkProps extends NavLinkProps {}

export const ExternalNavLink = (props: ExternalNavLinkProps) => {
  const pathname = getPathname(props)

  if (isExternalLink(pathname)) {
    const args = { isActive: false }
    const children = isFunction(props.children) ? props.children(args) : props.children
    const className = isFunction(props.className) ? props.className(args) : props.className
    const style = isFunction(props.style) ? props.style(args) : props.style

    // eslint-disable-next-line
    return <a {...props} children={children} className={className} style={style} href={pathname} />
  } else {
    return <RRNavLink {...props} />
  }
}
