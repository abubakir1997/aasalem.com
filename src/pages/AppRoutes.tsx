import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'
import { Home } from './Home'
import { PageNotFound } from './PageNotFound'
import { Resume } from './Resume'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
