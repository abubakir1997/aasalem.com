import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ForgotPasswordForm, SignInForm } from '../components/SignInForm'
import { App } from './App'
import { Home } from './Home'
import { PageNotFound } from './PageNotFound'
import { Resume } from './Resume'
import { SignIn } from './SignIn'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/signin" element={<SignIn />}>
        <Route index element={<SignInForm />} />
        <Route path=":emailParam" element={<SignInForm />} />
        <Route path="forgot-password" element={<ForgotPasswordForm />} />
        <Route path="forgot-password/:emailParam" element={<ForgotPasswordForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
