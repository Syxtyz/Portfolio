import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/ui/theme-provider.tsx'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import JournalPage from './pages/journal.tsx'
// import SkillPage from './pages/skill.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <ThemeProvider defaultTheme='dark' storageKey='theme'>
        <App />
          {/* <Routes>
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/skills" element={<SkillPage />} />
          </Routes> */}
      </ThemeProvider>
    {/* </BrowserRouter> */}
  </StrictMode>,
)
