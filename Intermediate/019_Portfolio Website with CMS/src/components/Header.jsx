function Header({ onAdminClick }) {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">Portfolio</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="admin-btn" onClick={onAdminClick}>
            Admin
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header