import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { CareersPage } from './pages/CareersPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NewsroomPage } from './pages/NewsroomPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/newsroom" element={<NewsroomPage />} />
          <Route path="/newsroom/:slug" element={<BlogPostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
