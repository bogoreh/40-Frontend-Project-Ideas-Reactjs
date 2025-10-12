import { useState } from 'react'
import ProjectForm from './ProjectForm'

function AdminPanel({ data, setData, onExit }) {
  const [editingProject, setEditingProject] = useState(null)

  const updateHero = (newHero) => {
    setData(prev => ({ ...prev, hero: newHero }))
  }

  const updateAbout = (newAbout) => {
    setData(prev => ({ ...prev, about: newAbout }))
  }

  const updateContact = (newContact) => {
    setData(prev => ({ ...prev, contact: newContact }))
  }

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now()
    }
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }))
  }

  const updateProject = (updatedProject) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => 
        p.id === updatedProject.id ? updatedProject : p
      )
    }))
    setEditingProject(null)
  }

  const deleteProject = (projectId) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== projectId)
    }))
  }

  return (
    <div className="admin-panel">
      <div className="container">
        <div className="admin-header">
          <h1>Portfolio CMS</h1>
          <button className="btn btn-secondary" onClick={onExit}>
            Exit Admin
          </button>
        </div>

        {/* Hero Section Editor */}
        <div className="admin-section">
          <h3>Hero Section</h3>
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text" 
              value={data.hero.title}
              onChange={(e) => updateHero({ ...data.hero, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Subtitle</label>
            <input 
              type="text" 
              value={data.hero.subtitle}
              onChange={(e) => updateHero({ ...data.hero, subtitle: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              value={data.hero.description}
              onChange={(e) => updateHero({ ...data.hero, description: e.target.value })}
              rows="3"
            />
          </div>
          <div className="form-group">
            <label>CTA Button Text</label>
            <input 
              type="text" 
              value={data.hero.cta}
              onChange={(e) => updateHero({ ...data.hero, cta: e.target.value })}
            />
          </div>
        </div>

        {/* About Section Editor */}
        <div className="admin-section">
          <h3>About Section</h3>
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text" 
              value={data.about.title}
              onChange={(e) => updateAbout({ ...data.about, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              value={data.about.description}
              onChange={(e) => updateAbout({ ...data.about, description: e.target.value })}
              rows="4"
            />
          </div>
          <div className="form-group">
            <label>Skills (comma separated)</label>
            <input 
              type="text" 
              value={data.about.skills.join(', ')}
              onChange={(e) => updateAbout({ 
                ...data.about, 
                skills: e.target.value.split(',').map(s => s.trim()) 
              })}
            />
          </div>
        </div>

        {/* Projects Management */}
        <div className="admin-section">
          <h3>Projects</h3>
          <ProjectForm 
            project={editingProject}
            onSave={editingProject ? updateProject : addProject}
            onCancel={() => setEditingProject(null)}
          />
          
          <div className="projects-list">
            {data.projects.map(project => (
              <div key={project.id} className="project-item">
                <div>
                  <strong>{project.title}</strong>
                  <p>{project.description}</p>
                </div>
                <div className="project-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setEditingProject(project)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-danger"
                    onClick={() => deleteProject(project.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section Editor */}
        <div className="admin-section">
          <h3>Contact Section</h3>
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text" 
              value={data.contact.title}
              onChange={(e) => updateContact({ ...data.contact, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={data.contact.email}
              onChange={(e) => updateContact({ ...data.contact, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input 
              type="text" 
              value={data.contact.phone}
              onChange={(e) => updateContact({ ...data.contact, phone: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel