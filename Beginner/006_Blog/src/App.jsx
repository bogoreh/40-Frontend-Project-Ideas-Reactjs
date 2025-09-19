import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Post from './pages/Post/Post'
import About from './pages/About/About'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App