function Contact({ data }) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">Email: {data.email}</div>
            <div className="contact-item">Phone: {data.phone}</div>
          </div>
          <div className="social-links">
            <a href={data.social.github} className="social-link">GitHub</a>
            <a href={data.social.linkedin} className="social-link">LinkedIn</a>
            <a href={data.social.twitter} className="social-link">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact