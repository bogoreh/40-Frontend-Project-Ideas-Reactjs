function About({ data }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        <div className="about-content">
          <p className="about-text">{data.description}</p>
          <div className="skills">
            {data.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About