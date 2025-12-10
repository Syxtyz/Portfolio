import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/ui/theme-provider.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './components/error/notFound.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark' storageKey='theme'>
        <Routes>
          <Route path="" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
