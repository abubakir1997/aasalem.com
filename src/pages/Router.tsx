import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'
import { Home } from './Home'
import { PageNotFound } from './PageNotFound'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
