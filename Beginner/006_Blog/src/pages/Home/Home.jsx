import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to My Blog</h1>
          <p>Discover amazing articles about web development, design, and more.</p>
          <Link to="/blog" className="cta-button">Explore Posts</Link>
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <h2>Welcome to our Blog!</h2>
          <p>This is a simple blog built with React and Vite. Start exploring our content!</p>
        </div>
      </section>
    </div>
  )
}

export default Home