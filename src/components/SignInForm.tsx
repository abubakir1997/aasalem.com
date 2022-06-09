import { Button, Colors, FormGroup, H2, H4, InputGroup } from '@blueprintjs/core'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AppLogo } from './AppLogo'

export const Form = styled.form`
  font-size: 1rem;
  font-weight: 600;
  min-width: 100%;
  margin: auto 0;
`

export const FormLogoContainer = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
`

export const FormLogoLink = styled(Link)`
  align-self: center;
`

export const FormHeaderContainer = styled.div`
  margin-top: 1em;
`

export const FormHeader = styled(H2)`
  font-weight: 700;
`

export const FormSubheader = styled(H4)`
  margin-top: 0.5em;
  color: ${Colors.GRAY3};
`

export const FormForgotPasswordContainer = styled.div`
  text-align: right;
`

export const SignInForm = () => {
  const { emailParam = '' } = useParams()
  const [email, setEmail] = useState(emailParam || '')
  const [password, setPassword] = useState('')

  return (
    <Form>
      <FormLogoContainer>
        <FormLogoLink to="/">
          <AppLogo size={192} />
        </FormLogoLink>
        <FormHeaderContainer>
          <FormHeader>Sign in to your admin account</FormHeader>
          <FormSubheader>
            Or <Link to="/">return to home page</Link>
          </FormSubheader>
        </FormHeaderContainer>
      </FormLogoContainer>
      <FormGroup label="Email" labelInfo="(required)">
        <InputGroup large value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      </FormGroup>
      <FormGroup label="Password" labelInfo="(required)">
        <InputGroup
          large
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
        />
      </FormGroup>
      <FormGroup>
        <FormForgotPasswordContainer>
          <Link to={`/signin/forgot-password/${email}`}>Forgot your password?</Link>
        </FormForgotPasswordContainer>
      </FormGroup>
      <FormGroup>
        <Button large fill intent="primary" text="Sign In" />
      </FormGroup>
    </Form>
  )
}

export const ForgotPasswordForm = () => {
  const { emailParam = '' } = useParams()
  const [email, setEmail] = useState(emailParam || '')

  return (
    <Form>
      <FormLogoContainer>
        <FormLogoLink to="/">
          <AppLogo size={192} />
        </FormLogoLink>
        <FormHeaderContainer>
          <FormHeader>Reset your account password</FormHeader>
          <FormSubheader>
            Or <Link to="/signin">return to sign in page</Link>
          </FormSubheader>
        </FormHeaderContainer>
      </FormLogoContainer>
      <FormGroup label="Email" labelInfo="(required)">
        <InputGroup large value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <FormForgotPasswordContainer>
          <Link to={`/signin/${email}`}>Return to sign in</Link>
        </FormForgotPasswordContainer>
      </FormGroup>
      <FormGroup>
        <Button large fill intent="primary" text="Submit" />
      </FormGroup>
    </Form>
  )
}
