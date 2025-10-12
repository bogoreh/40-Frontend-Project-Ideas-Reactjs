function Hero({ data }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <p>{data.description}</p>
          <button className="cta-button">{data.cta}</button>
        </div>
      </div>
    </section>
  )
}

export default Hero