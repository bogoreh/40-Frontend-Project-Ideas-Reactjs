import { useState, useEffect } from 'react'

function ProjectForm({ project, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    liveUrl: '',
    githubUrl: ''
  })

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        technologies: project.technologies.join(', '),
        liveUrl: project.liveUrl,
        githubUrl: project.githubUrl
      })
    }
  }, [project])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      ...(project && { id: project.id }),
      title: formData.title,
      description: formData.description,
      technologies: formData.technologies.split(',').map(t => t.trim()),
      liveUrl: formData.liveUrl,
      githubUrl: formData.githubUrl
    })
    if (!project) {
      setFormData({
        title: '',
        description: '',
        technologies: '',
        liveUrl: '',
        githubUrl: ''
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="admin-section">
      <h4>{project ? 'Edit Project' : 'Add New Project'}</h4>
      
      <div className="form-group">
        <label>Title</label>
        <input 
          type="text" 
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea 
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows="3"
          required
        />
      </div>

      <div className="form-group">
        <label>Technologies (comma separated)</label>
        <input 
          type="text" 
          value={formData.technologies}
          onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label>Live URL</label>
        <input 
          type="url" 
          value={formData.liveUrl}
          onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label>GitHub URL</label>
        <input 
          type="url" 
          value={formData.githubUrl}
          onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {project ? 'Update Project' : 'Add Project'}
        </button>
        {project && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default ProjectForm